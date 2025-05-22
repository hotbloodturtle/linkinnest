type CardProps = {
  icon?: string;
  title: string;
  description: string;
  author: string;
  likes: number;
  comments?: number;
  type?: string; // '로드맵' 등
  itemsCount?: number;
  badgeColor?: string;
  bgColor?: string;
};

export default function Card({
  icon = "",
  title,
  description,
  author,
  likes,
  comments = 0,
  type = "로드맵",
  itemsCount = 0,
  badgeColor = "bg-[#4D99F2]",
  bgColor = "bg-[#FAFCFF]",
}: CardProps) {
  return (
    <div
      className={`w-[280px] min-h-[180px] rounded-xl border border-[#D9D9E5] shadow-sm pt-5 pb-7 px-5 flex flex-col justify-between hover:shadow-md transition ${bgColor}`}
    >
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">{icon}</span>
          <h3 className="text-lg font-bold text-[#1A1A33]">{title}</h3>
        </div>
        <p className="text-sm text-[#666680] mb-3 line-clamp-2">
          {description}
        </p>
        <span
          className={`inline-block text-white text-xs font-semibold rounded-lg px-3 py-1 mb-2 ${badgeColor}`}
        >
          {type}
        </span>
      </div>
      <div>
        <div className="text-xs text-[#808099] mb-1">
          by {author} • 👍 {likes} • 💬 {comments}
        </div>
        <div className="text-xs text-[#808099]">
          {type === "로드맵" ? "📂" : "🔗"} {itemsCount}개{" "}
          {type === "로드맵" ? "아이템" : "링크"}
        </div>
      </div>
    </div>
  );
}
