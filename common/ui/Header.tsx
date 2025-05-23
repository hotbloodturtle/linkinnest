"use client";

import LoginModal from "../domains/LoginModal";
import LoginContainer from "../domains/auth/LoginContainer";
import LayoutContainer from "./LayoutContainer";

export default function Header() {
  const { loginModal } = LayoutContainer.useContainer();
  const { user, isAuthenticated, signOut, loading } = LoginContainer.useContainer();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    }
  };

  return (
    <header className="w-full h-16 flex items-center px-6 border-b border-[#EBEBF0] bg-white">
      <div className="font-bold text-2xl text-[#1A1A33] mr-8">
        🗂️ LinkInNest
      </div>
      <nav className="flex gap-6 text-[#4D4D66] font-semibold">
        <a href="#" className="text-[#4D4D66]">
          Home
        </a>
        <a href="#" className="text-[#808099] font-medium">
          Explore
        </a>
        <a href="#" className="text-[#808099] font-medium">
          Popular
        </a>
      </nav>
      <div className="flex-1 flex justify-center">
        <div className="flex items-center bg-[#F7F7FA] border border-[#E5E5EB] rounded-lg px-4 h-10 w-96">
          <span className="text-[#80808C] mr-2">🔍</span>
          <input
            className="bg-transparent outline-none text-sm flex-1"
            placeholder="Search folders, links..."
          />
        </div>
      </div>
      
      {/* 로그인 상태에 따른 UI */}
      {loading ? (
        <div className="ml-8 w-20 h-10 bg-gray-100 rounded-md animate-pulse" />
      ) : isAuthenticated ? (
        <div className="ml-8 flex items-center gap-4">
          <div className="flex items-center gap-2">
            {user?.user_metadata?.avatar_url && (
              <img 
                src={user.user_metadata.avatar_url} 
                alt="Profile" 
                className="w-8 h-8 rounded-full"
              />
            )}
            <span className="text-[#4D4D66] font-medium">
              {user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User'}
            </span>
          </div>
          <button
            onClick={handleSignOut}
            className="bg-[#F7F7FA] text-[#4D4D66] border border-[#E5E5EB] rounded-md px-4 py-2 font-medium hover:bg-gray-100 transition-colors"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          className="ml-8 bg-[#4A66FA] text-white rounded-md px-6 py-2 font-semibold cursor-pointer hover:bg-[#3D56E8] transition-colors"
          onClick={loginModal.open}
        >
          Login
        </button>
      )}
      
      <LoginModal />
    </header>
  );
}
