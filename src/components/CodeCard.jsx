import React from 'react';

const CodeCard = () => {
    return (
        <div className="w-full code-editor-card overflow-hidden font-mono text-sm md:text-base text-left group">
            {/* Window Header */}
            <div className="flex items-center px-4 py-3 border-b border-white/5 bg-slate-800/20">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="mx-auto flex-1 text-center text-slate-500 text-xs font-semibold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    SoftwareEngineer.js
                </div>
            </div>

            {/* Code Content */}
            <div className="p-6 md:p-8 text-slate-300 leading-relaxed overflow-x-auto selection:bg-purple-500/30">
                <div>
                    <span className="text-[#ff79c6]">class</span> <span className="text-[#3B82F6]">SoftwareEngineer</span> {'{'}
                </div>

                <div className="pl-6 md:pl-8 mt-2 text-[#6272a4] italic">
          // Engineering with a purpose
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
