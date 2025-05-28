import { supabase } from "@/lib/supabase";

export interface UserTopLevelItem {
  id: string;
  type: "folder" | "link";
  title: string;
  description?: string | null;
  url?: string;
  is_public?: boolean | null;
  is_roadmap?: boolean | null;
  created_at: string | null;
  sort_order?: number | null;
}

/**
 * 로그인한 사용자의 최상위 폴더와 링크를 가져옵니다
 */
export async function getUserTopLevelItems(
  userId: string
): Promise<UserTopLevelItem[]> {
  try {
    // 1. child_id 목록 먼저 조회
    const { data: childFolders, error: childFoldersError } = await supabase
      .from("folder_hierarchy")
      .select("child_id")
      .eq("child_type", "folder");

    if (childFoldersError) {
      console.error("Error fetching child folders:", childFoldersError);
      throw childFoldersError;
    }
    const childFolderIds = (childFolders || []).map((row) => row.child_id);

    // 2. 해당 id를 not in으로 사용
    let topLevelFoldersQuery = supabase
      .from("folders")
      .select("*")
      .eq("user_id", userId);

    if (childFolderIds.length > 0) {
      topLevelFoldersQuery = topLevelFoldersQuery.not(
        "id",
        "in",
        childFolderIds
      );
    }

    const { data: topLevelFolders, error: foldersError } =
      await topLevelFoldersQuery.order("created_at", { ascending: false });

    if (foldersError) {
      console.error("Error fetching top-level folders:", foldersError);
      throw foldersError;
    }

    // 최상위 링크들 가져오기 (folder_id가 null이고 해당 사용자의 링크들)
    const { data: topLevelLinks, error: linksError } = await supabase
      .from("links")
      .select("*")
      .eq("user_id", userId)
      .is("folder_id", null)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (linksError) {
      console.error("Error fetching top-level links:", linksError);
      throw linksError;
    }

    // 폴더와 링크를 통합된 형태로 변환
    const folders: UserTopLevelItem[] = (topLevelFolders || []).map(
      (folder) => ({
        id: folder.id,
        type: "folder" as const,
        title: folder.title,
        description: folder.description,
        is_public: folder.is_public,
        is_roadmap: folder.is_roadmap,
        created_at: folder.created_at,
        sort_order: 0, // 폴더는 기본 정렬값 0
      })
    );

    const links: UserTopLevelItem[] = (topLevelLinks || []).map((link) => ({
      id: link.id,
      type: "link" as const,
      title: link.title,
      description: link.description,
      url: link.url,
      created_at: link.created_at,
      sort_order: link.sort_order || 0,
    }));

    // 폴더와 링크를 합치고 정렬 (폴더가 먼저, 그 다음 링크)
    const allItems = [...folders, ...links].sort((a, b) => {
      // 타입별로 먼저 정렬 (폴더 > 링크)
      if (a.type !== b.type) {
        return a.type === "folder" ? -1 : 1;
      }

      // 같은 타입 내에서는 sort_order, 그 다음 created_at으로 정렬
      if (a.sort_order !== b.sort_order) {
        return a.sort_order! - b.sort_order!;
      }

      return (
        new Date(b.created_at || "").getTime() -
        new Date(a.created_at || "").getTime()
      );
    });

    return allItems;
  } catch (error) {
    console.error("Error in getUserTopLevelItems:", error);
    throw error;
  }
}

/**
 * 현재 로그인한 사용자의 최상위 항목들을 가져옵니다
 */
export async function getCurrentUserTopLevelItems(): Promise<
  UserTopLevelItem[]
> {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    throw new Error("User not authenticated");
  }

  return getUserTopLevelItems(user.id);
}
