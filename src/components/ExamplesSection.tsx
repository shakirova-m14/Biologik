import React from 'react';
import { ShieldAlert, Scale, AlertCircle, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { LEGAL_EXAMPLES } from '../data/content';

export const ExamplesSection: React.FC = () => {
  return (
    <section id="misollar" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200 mb-2">
            <Eye className="w-3.5 h-3.5 text-amber-600" />
            <span>Amaliy huquqiy amaliyot</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Hayotiy misollar
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            Jamiyatda eng ko‘p uchraydigan ekologik huquqbuzarliklar va ularning huquqiy talqini:
          </p>
        </div>

        {/* 3 Real-Life Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEGAL_EXAMPLES.map((example) => (
            <div
              key={example.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Badge */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={example.image}
                  alt={example.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-wider bg-slate-950/80 backdrop-blur-md text-amber-300 px-3 py-1 rounded-full border border-amber-400/30">
                  {example.badge}
                </span>
                <span className="absolute bottom-3 left-4 text-xs font-bold text-white font-display">
                  {example.title}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  {/* Situation */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                      <span>Hayotiy holat:</span>
                    </div>
                    <p className="text-sm font-medium text-slate-800 leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                      “{example.situation}”
                    </p>
                  </div>

                  {/* Legal Issue strictly from prompt */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
                      <Scale className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Huquqiy masala:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {example.legalIssue}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Applicable Law & Consequence */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div className="flex items-start gap-2 text-xs text-slate-500">
                    <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{example.applicableLaw}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs font-semibold text-emerald-900 bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{example.consequenceSummary}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
