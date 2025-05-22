import Card from "@/shared/ui/Card";
import MoreCard from "@/shared/ui/MoreCard";

const dummyData = [
  {
    id: 1,
    icon: "📚",
    title: "프론트엔드 완전정복",
    description:
      "HTML, CSS부터 React까지 체계적으로 학습할 수 있는 로드맵입니다.",
    author: "개발자김씨",
    likes: 234,
    comments: 45,
    type: "로드맵",
    itemsCount: 12,
    badgeColor: "bg-[#4D99F2]",
    bgColor: "bg-[#FAFCFF]",
  },
  {
    id: 2,
    icon: "🎸",
    title: "기타 독학 가이드",
    description: "기타를 처음 시작하는 분들을 위한 유용한 링크 모음집입니다.",
    author: "음악러버",
    likes: 156,
    comments: 23,
    type: "컬렉션",
    itemsCount: 8,
    badgeColor: "bg-[#B2FAF2]",
    bgColor: "bg-[#FAFFFC]",
  },
  {
    id: 3,
    icon: "🍳",
    title: "요리 초보 탈출",
    description: "기본 요리부터 응용까지, 단계별로 익히는 요리 로드맵.",
    author: "요리왕",
    likes: 189,
    comments: 67,
    type: "로드맵",
    itemsCount: 15,
    badgeColor: "bg-[#4D99F2]",
    bgColor: "bg-[#FFFCFA]",
  },
  {
    id: 4,
    icon: "🌍",
    title: "제주도 완전정복",
    description: "맛집, 카페, 관광지까지 제주도 여행 필수 정보 모음.",
    author: "여행러",
    likes: 298,
    comments: 89,
    type: "컬렉션",
    itemsCount: 24,
    badgeColor: "bg-[#B2FAF2]",
    bgColor: "bg-[#FCFAFF]",
  },
  {
    id: 5,
    icon: "💪",
    title: "홈트 완전정복",
    description: "집에서도 효과적으로 운동할 수 있는 체계적인 홈트 가이드.",
    author: "운동맨",
    likes: 445,
    comments: 123,
    type: "로드맵",
    itemsCount: 18,
    badgeColor: "bg-[#4D99F2]",
    bgColor: "bg-[#FFFAFC]",
  },
  {
    id: 6,
    icon: "📖",
    title: "영어 독학 가이드",
    description: "영어 회화, 문법, 어휘까지 체계적으로 배우는 방법.",
    author: "영어마스터",
    likes: 367,
    comments: 98,
    type: "컬렉션",
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
