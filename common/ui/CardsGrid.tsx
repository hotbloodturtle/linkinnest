import Card from "@/common/ui/Card";
import MoreCard from "@/common/ui/MoreCard";

interface CardData {
  id: number;
  icon: string;
  title: string;
  description: string;
  author: string;
  likes: number;
  comments: number;
  type: string;
  itemsCount: number;
  badgeColor: string;
  bgColor: string;
}

interface CardsGridProps {
  data: CardData[];
}

export default function CardsGrid({ data }: CardsGridProps) {
  return (
    <div className="w-full min-h-[400px] bg-[#FFFFFF] rounded-lg border border-[#EBEBF0] grid grid-cols-4 gap-8 p-8">
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
      <MoreCard />
    </div>
  );
}
