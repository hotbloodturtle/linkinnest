"use client";

import AuthContainer from "@/common/domains/auth/AuthContainer";
import {
  getCurrentUserTopLevelItems,
  UserTopLevelItem,
} from "@/lib/api/user-items";
import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";

const LinksContainer = createContainer(() => {
  const { isAuthenticated } = AuthContainer.useContainer();
  useEffect(() => {
    if (isAuthenticated) {
      loadUserItems();
    }
  }, [isAuthenticated]);

  const [items, setItems] = useState<UserTopLevelItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadUserItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const userItems = await getCurrentUserTopLevelItems();
      setItems(userItems);
    } catch (err) {
      console.error("Error loading user items:", err);
      setError("데이터를 불러오는데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleItemClick = (item: UserTopLevelItem) => {
    if (item.type === "folder") {
      // TODO: 폴더 상세 페이지로 이동
      console.log("Folder clicked:", item);
    } else {
      // 링크의 경우 새 탭에서 열기
      if (item.url) {
        window.open(item.url, "_blank", "noopener,noreferrer");
      }
    }
  };

  return {
    items,
    loading,
    error,
    handleItemClick,
    loadUserItems,
  };
});

export default LinksContainer;
