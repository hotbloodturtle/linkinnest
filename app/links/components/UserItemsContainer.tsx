"use client";

import UserItemsGrid from "@/app/links/components/UserItemsGrid";
import AuthContainer from "@/common/domains/auth/AuthContainer";
import LinksContainer from "../LinksContainer";

export default function UserItemsContainer() {
  const { user } = AuthContainer.useContainer();
  const { items, loading, error, handleItemClick, loadUserItems } =
    LinksContainer.useContainer();

  if (!user) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">🔐</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          로그인이 필요합니다
        </h3>
        <p className="text-gray-600">
          나의 폴더와 링크를 보려면 로그인해주세요.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-400 text-6xl mb-4">⚠️</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          오류가 발생했습니다
        </h3>
        <p className="text-gray-600 mb-4">{error}</p>
        <button
          onClick={loadUserItems}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          다시 시도
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">나의 폴더와 링크</h2>
        <div className="flex gap-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            + 폴더 추가
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
            + 링크 추가
          </button>
        </div>
      </div>

      <UserItemsGrid items={items} onItemClick={handleItemClick} />
    </div>
  );
}
