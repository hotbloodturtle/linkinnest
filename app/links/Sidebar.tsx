const menus = [
  { label: "Archive", emoji: "📁", active: true },
  { label: "Roadmap", emoji: "🗺️" },
  { label: "Trash", emoji: "🗑️" },
];

export default function Sidebar() {
  return (
    <aside
      className="bg-[#F7F7FA] w-[280px] h-[calc(100vh-64px)] flex flex-col py-6 px-6 border-r border-[#EBEBF0]"
      style={{ minHeight: 0 }}
    >
      <nav className="flex flex-col gap-2 mt-2">
        {menus.map((menu) => (
          <button
            key={menu.label}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-semibold text-[#4D4D66] transition-colors hover:bg-[#E5E5EB] ${
              menu.active ? "bg-white shadow border border-[#EBEBF0]" : ""
            }`}
          >
            <span className="text-xl">{menu.emoji}</span>
            <span>{menu.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
