export default function Header() {
  return (
    <header className="w-full h-18 flex items-center px-6 border-b border-[#EBEBF0] bg-white">
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
      <button className="ml-8 bg-[#4A66FA] text-white rounded-md px-6 py-2 font-semibold">
        Login
      </button>
    </header>
  );
}
