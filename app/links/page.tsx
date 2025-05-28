"use client";

import UserItemsContainer from "@/app/links/components/UserItemsContainer";
import Header from "@/common/ui/Header";
import Sidebar from "../../common/ui/Sidebar";
import LinksContainer from "./LinksContainer";

export default function LinksPage() {
  return (
    <>
      <LinksContainer.Provider>
        <Header />
        <div className="flex w-full min-h-screen bg-[#F7F7FA]">
          <Sidebar />
          <main className="flex-1 flex flex-col items-center py-0 px-0 bg-white">
            <div className="w-full max-w-[1160px] mx-auto relative pt-10 px-10">
              <UserItemsContainer />
            </div>
          </main>
        </div>
      </LinksContainer.Provider>
    </>
  );
}
