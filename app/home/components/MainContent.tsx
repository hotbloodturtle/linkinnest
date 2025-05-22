import HeroSection from "@/app/home/components/HeroSection";
import SampleContent from "@/app/home/components/SampleContent";

export default function MainContent() {
  return (
    <main className="w-full bg-[#FFFFFF] min-h-[828px]">
      <HeroSection />
      <SampleContent />
    </main>
  );
}
