import { X } from "lucide-react";

export default function Sidebar({ isOpen, onClose }) {
  const categories = [
    "Head and Neck",
    "Thorax",
    "Spine and Back",
    "Pelvis",
    "Lower Extremity",
  ];

  return (
    <>
      {/* Overlay (Mobile) */}
      <div
        className={`fixed inset-0 bg-black/50 z-[9998] transition-opacity duration-300 lg:hidden
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <aside
        className={`fixed lg:relative z-[9999] w-72 h-full bg-[#111] text-white
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <h2 className="font-black uppercase text-sm">
            Anatomy Catalog
          </h2>

          <button
            onClick={onClose}
            className="lg:hidden hover:bg-white/10 p-2 rounded-md"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="p-4 flex flex-col gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className="text-left px-4 py-3 rounded-lg hover:bg-white/10 text-gray-300"
            >
              {cat}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
