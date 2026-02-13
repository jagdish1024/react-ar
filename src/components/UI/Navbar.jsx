import { Menu } from "lucide-react";

export default function Navbar({ onMenu }) {
  return (
    <nav className="h-14 bg-black text-white flex items-center justify-between px-5 shadow-md">

      {/* Mobile Menu */}
      <button
        onClick={onMenu}
        className="lg:hidden p-2 rounded-md hover:bg-white/10"
      >
        <Menu size={22} />
      </button>

      {/* Logo */}
      <h1 className="font-black uppercase tracking-tight text-lg">
        SKEL<span className="text-[#e5b36a]">AR</span>
      </h1>

      {/* Right */}
      <div className="text-sm text-gray-400 hidden md:block">
        Interactive Anatomy Platform
      </div>
    </nav>
  );
}
