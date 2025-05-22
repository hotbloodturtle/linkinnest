import Card from "@/shared/ui/Card";
import MoreCard from "@/shared/ui/MoreCard";

const dummyData = [
  {
    id: 1,
    icon: "📚",
    title: "Complete Frontend Mastery",
    description:
      "A systematic roadmap to learn everything from HTML and CSS to React.",
    author: "Dev Kim",
    likes: 234,
    comments: 45,
    type: "Roadmap",
    itemsCount: 12,
    badgeColor: "bg-[#4D99F2]",
    bgColor: "bg-[#FAFCFF]",
  },
  {
    id: 2,
    icon: "🎸",
    title: "Guitar Self-Study Guide",
    description:
      "A collection of useful links for those starting guitar for the first time.",
    author: "Music Lover",
    likes: 156,
    comments: 23,
    type: "Collection",
    itemsCount: 8,
    badgeColor: "bg-[#B2FAF2]",
    bgColor: "bg-[#FAFFFC]",
  },
  {
    id: 3,
    icon: "🍳",
    title: "Escape Cooking Beginner",
    description:
      "A step-by-step cooking roadmap from basics to advanced recipes.",
    author: "Cooking King",
    likes: 189,
    comments: 67,
    type: "Roadmap",
    itemsCount: 15,
    badgeColor: "bg-[#4D99F2]",
    bgColor: "bg-[#FFFCFA]",
  },
  {
    id: 4,
    icon: "🌍",
    title: "Complete Jeju Island Guide",
    description:
      "Essential information for Jeju travel: restaurants, cafes, and attractions.",
    author: "Traveler",
    likes: 298,
    comments: 89,
    type: "Collection",
    itemsCount: 24,
    badgeColor: "bg-[#B2FAF2]",
    bgColor: "bg-[#FCFAFF]",
  },
  {
    id: 5,
    icon: "💪",
    title: "Complete Home Training",
    description:
      "A systematic home training guide for effective workouts at home.",
    author: "Workout Man",
    likes: 445,
    comments: 123,
    type: "Roadmap",
    itemsCount: 18,
    badgeColor: "bg-[#4D99F2]",
    bgColor: "bg-[#FFFAFC]",
  },
  {
    id: 6,
    icon: "📖",
    title: "English Self-Study Guide",
    description:
      "How to systematically learn English conversation, grammar, and vocabulary.",
    author: "English Master",
    likes: 367,
    comments: 98,
    type: "Collection",
    itemsCount: 16,
    badgeColor: "bg-[#B2FAF2]",
    bgColor: "bg-[#FAFCFF]",
  },
];

export default function CardsGrid() {
  return (
    <div className="w-full min-h-[400px] bg-[#FFFFFF] rounded-lg border border-[#EBEBF0] grid grid-cols-4 gap-8 p-8">
      {dummyData.map((item) => (
        <Card key={item.id} {...item} />
      ))}
      <MoreCard />
    </div>
  );
}
