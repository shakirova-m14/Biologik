import React, { useState } from 'react';
import {
  ShieldCheck,
  SearchCheck,
  ShieldBan,
  TreePine,
  GraduationCap,
  Gavel,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { LEGAL_SOLUTIONS } from '../data/content';

export const SolutionsSection: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState<string>('01');

  const getSolutionIcon = (num: string) => {
    switch (num) {
      case '01':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case '02':
        return <SearchCheck className="w-6 h-6 text-blue-600" />;
      case '03':
        return <ShieldBan className="w-6 h-6 text-rose-600" />;
      case '04':
        return <TreePine className="w-6 h-6 text-teal-600" />;
      case '05':
        return <GraduationCap className="w-6 h-6 text-amber-600" />;
      case '06':
        return <Gavel className="w-6 h-6 text-indigo-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="yechimlar" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3.5 py-1 rounded-full border border-emerald-200 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Qonuniy himoya mexanizmlari</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Huquqiy yechimlar
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            Biologik xilma-xillikni qonuniy vositalar va huquqiy tartib orqali samarali saqlab qolishning 6 ta asosiy yo‘nalishi:
          </p>
        </div>

        {/* 6 Numbered Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEGAL_SOLUTIONS.map((sol) => {
            const isSelected = activeSolution === sol.number;

            return (
              <div
                key={sol.number}
                onClick={() => setActiveSolution(sol.number)}
                className={`cursor-pointer rounded-3xl p-7 transition-all duration-300 relative flex flex-col justify-between border bg-white ${
                  isSelected
                    ? 'border-emerald-500 shadow-xl ring-2 ring-emerald-400/20'
                    : 'border-slate-200/90 shadow-xs hover:border-emerald-300 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-extrabold text-slate-300 font-mono tracking-tight">
                      {sol.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-xs">
                      {getSolutionIcon(sol.number)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">
                    {sol.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {sol.description}
                  </p>
                </div>

                {/* Bottom Legal Mechanism */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50/70 p-3 rounded-xl border border-emerald-100">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Mexanizm: {sol.legalMechanism}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
