import CardsGrid from "@/shared/ui/CardsGrid";

export default function SampleContent() {
  return (
    <section className="w-full py-10 px-32">
      <h2 className="text-3xl font-bold text-[#1A1A33] mb-2">
        인기 폴더 & 로드맵
      </h2>
      <p className="text-base text-[#666680] mb-6">
        다른 사람들이 만든 유용한 폴더와 로드맵을 둘러보세요
      </p>
      <CardsGrid />
    </section>
  );
}
