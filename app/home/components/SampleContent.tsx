import CardsGrid from "@/shared/ui/CardsGrid";

export default function SampleContent() {
  return (
    <section className="w-full py-10 px-32">
      <h2 className="text-3xl font-bold text-[#1A1A33] mb-2">
        Popular Folders & Roadmaps
      </h2>
      <p className="text-base text-[#666680] mb-6">
        Browse useful folders and roadmaps created by others
      </p>
      <CardsGrid />
    </section>
  );
}
