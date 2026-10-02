import React from 'react';
import { Scale, Award, Printer, ArrowUp, BookOpen, ShieldCheck, Heart } from 'lucide-react';
import { InteractiveQuiz } from './InteractiveQuiz';

export const ConclusionSection: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="xulosa" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Academic Legal Conclusion Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm text-center relative overflow-hidden">
          {/* Legal Scale Icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 text-amber-300 flex items-center justify-center mx-auto mb-6 shadow-md border border-amber-400/30">
            <Scale className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <span>Yakuniy huquqiy xulosa</span>
          </div>

          {/* Title strictly from prompt */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-6 [text-wrap:balance]">
            Huquq va tabiat — umumiy mas’uliyat
          </h2>

          {/* Text strictly from prompt */}
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto mb-8 font-normal [text-wrap:balance]">
            “Biologik xilma-xillikni saqlash faqat ekologlarning vazifasi emas. Har bir fuqaro tabiatga ehtiyotkor munosabatda bo‘lishi, qonunlarga rioya qilishi va atrof-muhitni muhofaza qilishga o‘z hissasini qo‘shishi kerak. Huquqiy tartib va ekologik mas’uliyat birgalikda tabiatni kelajak avlod uchun asrashga xizmat qiladi.”
          </p>

          {/* Final Quote-Style Block strictly from prompt */}
          <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 border border-amber-400/40 shadow-xl mb-10 text-center">
            <span className="text-xs uppercase font-mono tracking-widest text-amber-400 block mb-2 font-bold">
              Bosh g‘oya
            </span>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-serif-title tracking-tight [text-wrap:balance]">
              “Tabiatni asrash — kelajak oldidagi mas’uliyat.”
            </blockquote>
          </div>

          {/* Academic Project Presentation Card */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 max-w-2xl mx-auto mb-8 text-left grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs text-slate-500 font-medium">Loyiha fani:</div>
                <div className="text-sm font-bold text-slate-900">11-sinf Davlat va Huquq asoslari</div>
                <div className="text-xs text-slate-600 mt-0.5">Biologik xilma-xillikni huquqiy himoya qilish</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs text-slate-500 font-medium">Bosh maqsad:</div>
                <div className="text-sm font-bold text-slate-900">Huquqiy madaniyat va javobgarlik</div>
                <div className="text-xs text-slate-600 mt-0.5">Qonun ustuvorligi va tabiat daxlsizligi</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>Loyiha varaqasini chop etish (Print)</span>
            </button>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm cursor-pointer"
            >
              <ArrowUp className="w-4 h-4 text-amber-300" />
              <span>Boshiga qaytish</span>
            </button>
          </div>
        </div>

        {/* Interactive Law Quiz */}
        <InteractiveQuiz />
      </div>
    </section>
  );
};
