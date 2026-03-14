import React from 'react';

const CodeCard = () => {
    return (
        <div className="w-full bedim-card bg-[#050510]/80 backdrop-blur-xl border border-[var(--glass-border)] hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] overflow-hidden font-mono text-sm md:text-base text-left group transition-all duration-300 rounded-xl relative">
            {/* Glowing background layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 pointer-events-none"></div>

            {/* Window Header */}
            <div className="flex items-center px-4 py-3 border-b border-[var(--glass-border)] bg-[#030014]/80 relative z-10 shadow-sm">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:scale-110 transition-transform"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:scale-110 transition-transform"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:scale-110 transition-transform"></div>
                </div>
                <div className="mx-auto flex-1 text-center text-gray-400 text-xs font-semibold tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                    SoftwareEngineer.js
                </div>
            </div>

            {/* Code Content */}
            <div className="p-6 md:p-8 text-gray-200 leading-relaxed overflow-x-auto selection:bg-cyan-500/30 relative z-10">
                <div>
                    <span className="text-pink-400">class</span> <span className="text-cyan-400 font-bold">SoftwareEngineer</span> {'{'}
                </div>

                <div className="pl-6 md:pl-8 mt-2 text-gray-500 italic">
          // Engineering with a purpose 🚀
                </div>

                <div className="pl-6 md:pl-8 mt-2">
                    <span className="text-[#3B82F6]">constructor</span>() {'{'}
                </div>
                <div className="pl-12 md:pl-16">
                    <span className="text-[#ff79c6]">this</span>.<span className="text-[#f1fa8c]">skills</span> <span className="text-[#ff79c6]">=</span> [
                    <span className="text-[#50fa7b]">'MERN'</span>, <span className="text-[#50fa7b]">'PHP'</span>, <span className="text-[#50fa7b]">'DevOps'</span>
                    ];
                </div>
                <div className="pl-12 md:pl-16">
                    <span className="text-[#ff79c6]">this</span>.<span className="text-[#f1fa8c]">philosophy</span> <span className="text-[#ff79c6]">=</span> <span className="text-[#50fa7b]">'CleanCode'</span>;
                </div>
                <div className="pl-6 md:pl-8 mt-1">
                    {'}'}
                </div>

                <div className="pl-6 md:pl-8 mt-4">
                    <span className="text-[#3B82F6]">solve</span>(<span className="text-white">complexProblem</span>) {'{'}
                </div>
                <div className="pl-12 md:pl-16">
                    <span className="text-[#ff79c6]">return</span> <span className="text-[#ff79c6]">this</span>.<span className="text-[#3B82F6]">architect</span>(<span className="text-white">complexProblem</span>)
                </div>
                <div className="pl-16 md:pl-20 mt-1">
                    .<span className="text-[#3B82F6]">optimize</span>()
                </div>
                <div className="pl-16 md:pl-20 mt-1">
                    .<span className="text-[#3B82F6]">ship</span>();
                </div>
                <div className="pl-6 md:pl-8 mt-1">
                    {'}'}
                </div>

                <div className="mt-2">
                    {'}'}
                </div>
            </div>
        </div>
    );
};

export default CodeCard;
