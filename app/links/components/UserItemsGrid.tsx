import { UserTopLevelItem } from "@/lib/api/user-items";
import ItemCard from "../../../common/ui/ItemCard";

interface UserItemsGridProps {
  items: UserTopLevelItem[];
  onItemClick?: (item: UserTopLevelItem) => void;
}

export default function UserItemsGrid({
  items,
  onItemClick,
}: UserItemsGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">📂</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          아직 폴더나 링크가 없습니다
        </h3>
        <p className="text-gray-600">첫 번째 폴더나 링크를 만들어보세요!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {items.map((item) => (
        <ItemCard
          key={`${item.type}-${item.id}`}
          item={item}
          onClick={() => onItemClick?.(item)}
        />
      ))}
    </div>
  );
}
