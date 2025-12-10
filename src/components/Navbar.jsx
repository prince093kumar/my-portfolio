import React from "react";
import { Sun, Moon } from "lucide-react";

const Navbar = ({ darkMode, toggleTheme, scrollTo, activeSection }) => {
  const menu = ["About", "Projects", "Resume", "Contact"];

  return (
    <nav
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        darkMode
          ? "bg-slate-900/80 border-slate-800 text-slate-100"
          : "bg-white/80 border-slate-200 text-slate-800"
      }`}
    >
      
      <div className="w-full px-6 md:px-8 h-16 flex items-center justify-between">
        {/* LEFT - Brand */}
        <div
          className="font-mono font-bold text-xl tracking-wide cursor-pointer select-none"
          onClick={() => scrollTo?.("home")}
        >
          Prince Kumar
        </div>

        {/* RIGHT - Menu */}
        <div className="flex items-center gap-2">
          {menu.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;

            return (
              <button
                key={item}
                onClick={() => scrollTo?.(id)}
                className={`group relative px-2 py-1 rounded-md transition-transform duration-200
                  transform
                  ${
                    isActive
                      ? "text-blue-600 font-semibold -translate-y-0.5"
                      : "text-current hover:text-blue-600 hover:-translate-y-0.5"
                  }
                `}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="relative z-10">{item}</span>

                {/* animated underline */}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] rounded-full transition-all duration-300
                    ${
                      isActive
                        ? "w-[70%] bg-blue-600"
                        : "w-0 bg-blue-500 group-hover:w-[70%]"
                    }`}
                />
              </button>
            );
          })}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`ml-2 p-2 rounded-full transition-transform duration-200 transform hover:scale-110 ${
              darkMode ? "bg-slate-800 hover:bg-slate-700" : "bg-slate-100 hover:bg-slate-200"
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;