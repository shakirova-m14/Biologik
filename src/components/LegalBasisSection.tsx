import React, { useState } from 'react';
import { Scale, BookOpen, ShieldCheck, Mountain, FileCheck, Landmark, CheckCircle } from 'lucide-react';
import { LEGAL_BASES } from '../data/content';

export const LegalBasisSection: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string>(LEGAL_BASES[0].id);

  const getCardIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Landmark className="w-6 h-6 text-amber-500" />;
      case 1:
        return <Scale className="w-6 h-6 text-emerald-600" />;
      case 2:
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 3:
        return <Mountain className="w-6 h-6 text-teal-600" />;
      default:
        return <BookOpen className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="huquqiy-asos" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full border border-emerald-200 mb-2">
            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
            <span>Qonunchilik me’yorlari</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Biologik xilma-xillikni himoya qilishning huquqiy asoslari
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            O‘zbekiston Respublikasining qonunchilik tizimi tabiatni, flora va fauna genofondini asrashni kafolatlovchi qat’iy normalarga asoslanadi:
          </p>
        </div>

        {/* 4 Legal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {LEGAL_BASES.map((basis, idx) => {
            const isSelected = activeCardId === basis.id;

            return (
              <div
                key={basis.id}
                onClick={() => setActiveCardId(basis.id)}
                className={`cursor-pointer rounded-3xl p-7 sm:p-8 transition-all duration-300 relative flex flex-col justify-between border bg-white ${
                  isSelected
                    ? 'border-emerald-500 shadow-xl ring-2 ring-emerald-500/20'
                    : 'border-slate-200/90 shadow-xs hover:border-emerald-300 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Category */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shadow-xs">
                      {getCardIcon(idx)}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {basis.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 font-display">
                    {basis.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                    {basis.description}
                  </p>
                </div>

                {/* Bottom Legal Reference Bar */}
                <div className="pt-5 border-t border-slate-100 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                    <FileCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Qonuniy hujjat: {basis.officialReference}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Asosiy mezon: {basis.keyNorm}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legal Guarantee Banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Huquqiy tamoyil
            </div>
            <h4 className="text-lg sm:text-xl font-bold font-display text-white">
              Tabiatdan foydalanish faqat qonuniy asosda va ruxsatnomalar bilan amalga oshiriladi
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Har qanday o‘zboshimchalik, noqonuniy ov yoki ruxsatsiz daraxt kesish qonunbuzarlik deb hisoblanadi.
            </p>
          </div>

          <a
            href="#javobgarlik"
            className="shrink-0 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-bold transition-all shadow-md cursor-pointer"
          >
            Javobgarlik turlarini ko‘rish →
          </a>
        </div>
      </div>
    </section>
  );
};
