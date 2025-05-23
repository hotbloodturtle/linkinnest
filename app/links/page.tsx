import Header from "@/common/ui/Header";
import Image from "next/image";
import Sidebar from "./Sidebar";

const dummyFolders = [
  {
    id: 1,
    title: "FullStack Roadmap",
    description: "From frontend to backend",
    itemsCount: 12,
  },
  {
    id: 2,
    title: "React Study",
    description: "A collection of useful React resources.",
    itemsCount: 9,
  },
  {
    id: 3,
    title: "Design Inspiration",
    description: "Beautiful websites and UI inspiration.",
    itemsCount: 15,
  },
  {
    id: 4,
    title: "Job Preparation",
    description: "Resume, portfolio, and interview materials.",
    itemsCount: 7,
  },
  {
    id: 5,
    title: "Travel Checklist",
    description: "Must-have items before your trip!",
    itemsCount: 5,
  },
];

export default function LinksPage() {
  return (
    <>
      <Header />
      <div className="flex w-full min-h-screen bg-[#F7F7FA]">
        <Sidebar />
        <main className="flex-1 flex flex-col items-center py-0 px-0 bg-white">
          <div className="w-full max-w-[1160px] mx-auto relative pt-10">
            {/* 상단 타이틀, 설명, Add Link 버튼 */}
            <div className="flex items-start justify-between px-10">
              <div>
                <h1 className="text-[32px] font-bold text-[#1A1A33] leading-tight mb-2">
                  Manage My Links
                </h1>
                <p className="text-base text-[#666680] mb-0">
                  Organize your frequently visited links by folder.
                </p>
              </div>
              <button className="h-9 px-6 rounded-md bg-[#4A66FA] text-white font-semibold text-sm flex items-center shadow-sm hover:bg-[#3D56E8] transition-colors mt-2">
                + Add Link
              </button>
            </div>
            {/* 폴더 카드 그리드 */}
            <div
              className="grid gap-6 mt-10 px-10"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                display: "grid",
              }}
            >
              {dummyFolders.map((folder) => (
                <div
                  key={folder.id}
                  className="bg-white rounded-xl border border-[#E5E5EB] flex flex-col items-center shadow-sm min-h-[240px] p-0 relative"
                  style={{ width: 250, height: 240 }}
                >
                  {/* 폴더 아이콘 */}
                  <div
                    className="flex items-center justify-center bg-[#4D99F2] rounded-xl mt-10"
                    style={{ width: 80, height: 80 }}
                  >
                    <Image
                      src="/icons/folder.svg"
                      alt="Folder"
                      width={48}
                      height={48}
                    />
                  </div>
                  {/* 타이틀 */}
                  <div className="mt-6 w-full px-8">
                    <div className="text-base font-semibold text-[#1A1A33] mb-1">
                      {folder.title}
                    </div>
                    <div className="text-xs text-[#666680] mb-1">
                      {folder.description}
                    </div>
                    <div className="text-[11px] font-medium text-[#808099]">
                      {folder.itemsCount} links
                    </div>
                  </div>
                </div>
              ))}
              {/* Add New Folder 카드 */}
              <button
                className="bg-[#FAFAFC] border border-[#E5E5EB] rounded-xl flex flex-col items-center justify-center min-h-[240px] p-6 hover:shadow-md transition-shadow cursor-pointer"
                style={{ width: 250, height: 240 }}
              >
                <span className="text-3xl mb-2">＋</span>
                <span className="text-base font-semibold text-[#4A66FA]">
                  Add New Folder
                </span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
