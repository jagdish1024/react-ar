import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ModelViewer from "../components/Viewer/ModelViewer";

import {
  LayoutGrid,
  BookOpen,
  Layers,
  Share2,
  Settings,
  Menu,
  Search,
} from "lucide-react";

export default function HomeUI() {
  const [mobileSidebar, setMobileSidebar] = useState(false);

  // ✅ NEW — Active Module State
  const [activeModule, setActiveModule] = useState("Spine and Back");

  const navigate = useNavigate();

  const modules = [
    "Head and Neck",
    "Dental Anatomy",
    "Upper Extremity",
    "Thorax",
    "Abdomen",
    "Spine and Back",
    "Pelvis",
    "Lower Extremity",
    "Organ Systems",
  ];

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden bg-white">
      {/* ================= NAVBAR ================= */}
      <header className="h-16 bg-black text-white flex items-center justify-between px-4 md:px-8 shrink-0">
        <div className="flex items-center gap-3">
          <button
            className="md:hidden"
            onClick={() => setMobileSidebar(true)}
          >
            <Menu size={22} />
          </button>

          <h1 className="font-black text-lg tracking-tight">
            SKEL<span className="text-[#e5b36a]">AR</span>
          </h1>
        </div>

        <nav className="hidden lg:flex gap-10 text-sm font-semibold text-gray-300">
          {["3D Anatomy", "Library", "Encyclopedia"].map((item) => (
            <button key={item} className="hover:text-white transition">
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Search size={18} className="text-gray-400 hidden sm:block" />
          <button className="px-4 py-2 rounded-full border border-white/20 text-sm hover:bg-white/10 transition">
            Sign in
          </button>
        </div>
      </header>

      {/* ================= MAIN BODY ================= */}
      <div className="flex flex-1 overflow-hidden">
        {/* ICON RAIL */}
        <div className="hidden md:flex w-14 border-r bg-white flex-col items-center py-6 gap-6 text-gray-500">
          {[LayoutGrid, BookOpen, Layers, Share2, Settings].map((Icon, i) => (
            <Icon
              key={i}
              size={20}
              className="hover:text-black transition cursor-pointer"
            />
          ))}
        </div>

        {/* DESKTOP SIDEBAR */}
        <aside className="hidden md:block bg-[#1c1c1c] text-white overflow-y-auto w-56 lg:w-72 shrink-0">
          <div className="p-5 text-xs font-bold tracking-widest text-gray-500 uppercase">
            Anatomy Modules
          </div>

          {modules.map((item) => {
            const active = item === activeModule;

            return (
              <button
                key={item}
                onClick={() => setActiveModule(item)} // ✅ MODEL CHANGE
                className={`
                  relative w-full text-left px-6 py-4 text-sm border-b border-white/5
                  transition-all duration-300 group
                  ${
                    active
                      ? "bg-[#e5b36a] text-black font-bold"
                      : "text-gray-300 hover:bg-white/10"
                  }
                `}
              >
                <span
                  className={`
                    absolute left-0 top-0 h-full w-1 bg-[#e5b36a]
                    transition-all duration-300
                    ${
                      active
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-50"
                    }
                  `}
                />

                <span className="group-hover:translate-x-2 transition-transform duration-300 inline-block">
                  {item}
                </span>
              </button>
            );
          })}
        </aside>

        {/* MOBILE SIDEBAR */}
        {mobileSidebar && (
          <div className="fixed inset-0 z-[9999] flex">
            <div
              className="flex-1 bg-black/50"
              onClick={() => setMobileSidebar(false)}
            />

            <div className="w-72 bg-[#1c1c1c] text-white overflow-y-auto">
              <div className="p-5 font-bold text-gray-400 uppercase text-xs">
                Anatomy Modules
              </div>

              {modules.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveModule(item); // ✅ MODEL CHANGE
                    setMobileSidebar(false);
                  }}
                  className="w-full text-left px-6 py-4 text-sm border-b border-white/10 hover:bg-white/10"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* CENTER VIEWER */}
        <main className="flex-1 flex flex-col bg-[#eef0f3] overflow-hidden">
          <div className="px-6 py-3 text-sm text-gray-600 border-b bg-white shrink-0">
            {activeModule} ›{" "}
            <span className="font-semibold text-black">Overview</span>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center px-6 py-6 overflow-y-auto">
            <div className="w-full max-w-[900px] flex-1 bg-white rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
              
              {/* ✅ PASS ACTIVE MODULE */}
              <ModelViewer activeModule={activeModule} />

            </div>

            <div className="w-full max-w-[900px] flex justify-center py-5">
              <button
                onClick={() => navigate("/ar")}
                className="
                  bg-[#e5b36a] text-black px-12 py-4 rounded-xl font-black
                  shadow-md hover:scale-[1.04] active:scale-[0.97]
                  transition-all duration-300
                "
              >
                Enter AR Mode →
              </button>
            </div>
          </div>
        </main>

        {/* ARTICLE PANEL */}
        <section className="hidden xl:block w-[420px] bg-white border-l overflow-y-auto px-8 py-10 shrink-0">
          <h1 className="text-5xl font-black mb-8 leading-tight">
            {activeModule} <br /> (Overview)
          </h1>

          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            Explore the anatomical structure in interactive 3D and AR mode.
          </p>

          <div className="mt-10 p-4 rounded-xl border bg-[#f9fafb] text-sm text-gray-500">
            Tip: Rotate the model with mouse. Enter AR mode for real-world placement.
          </div>
        </section>
      </div>
    </div>
  );
}
