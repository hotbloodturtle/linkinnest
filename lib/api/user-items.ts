import { supabase } from "@/lib/supabase";

export interface UserTopLevelItem {
  id: string;
  type: "folder" | "link" | "roadmap";
  title: string;
  description?: string | null;
  url?: string;
  is_public?: boolean | null;
  created_at: string | null;
  sort_order?: number | null;
}

/**
 * 로그인한 사용자의 최상위 폴더, 링크, 로드맵을 가져옵니다
 */
export async function getUserTopLevelItems(
  userId: string
): Promise<UserTopLevelItem[]> {
  try {
    // 최상위 폴더들 가져오기 (folder_hierarchy에서 parent_id로 참조되지 않는 폴더들)
    const { data: childFolders, error: childFoldersError } = await supabase
      .from("folder_hierarchy")
      .select("child_id")
      .eq("child_type", "folder");

    if (childFoldersError) {
      console.error("Error fetching child folders:", childFoldersError);
      throw childFoldersError;
    }

    const childFolderIds = (childFolders || []).map((row) => row.child_id);

    let topLevelFoldersQuery = supabase
      .from("folders")
      .select("*")
      .eq("user_id", userId);

    if (childFolderIds.length > 0) {
      topLevelFoldersQuery = topLevelFoldersQuery.not(
        "id",
        "in",
        `(${childFolderIds.map((id) => `'${id}'`).join(",")})`
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

    // 로드맵들 가져오기
    const { data: roadmaps, error: roadmapsError } = await supabase
      .from("roadmaps")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (roadmapsError) {
      console.error("Error fetching roadmaps:", roadmapsError);
      throw roadmapsError;
    }

    // 통합된 형태로 변환
    const folders: UserTopLevelItem[] = (topLevelFolders || []).map(
      (folder) => ({
        id: folder.id,
        type: "folder" as const,
        title: folder.title,
        description: folder.description,
        is_public: folder.is_public,
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

    const roadmapItems: UserTopLevelItem[] = (roadmaps || []).map(
      (roadmap) => ({
        id: roadmap.id,
        type: "roadmap" as const,
        title: roadmap.title,
        description: roadmap.description,
        is_public: roadmap.is_public,
        created_at: roadmap.created_at,
        sort_order: 0, // 로드맵은 기본 정렬값 0
      })
    );

    // 폴더, 링크, 로드맵을 합치고 정렬 (폴더 > 로드맵 > 링크 순서)
    const allItems = [...folders, ...roadmapItems, ...links].sort((a, b) => {
      // 타입별로 먼저 정렬 (폴더 > 로드맵 > 링크)
      const typeOrder = { folder: 0, roadmap: 1, link: 2 };
      if (a.type !== b.type) {
        return typeOrder[a.type] - typeOrder[b.type];
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
