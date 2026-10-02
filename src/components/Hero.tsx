import React from 'react';
import { ArrowDown, Scale, ShieldAlert, BookOpen, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section id="bosh-sahifa" className="relative min-h-[94vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image Container with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Biologik xilma-xillikni huquqiy himoya qilish: adolat tarozisi, qonunlar to‘plami va muhofaza etilayotgan yashil o‘rmon"
          className="w-full h-full object-cover object-center scale-105 animate-[kenburns_24s_ease-in-out_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        {/* Measured scrim ensuring high contrast readability: dark green + deep blue + navy tones */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/50" />
        <div className="absolute inset-0 bg-emerald-950/35 mix-blend-multiply" />
      </div>

      {/* Subtle gold and emerald ambient glows */}
      <div className="absolute top-28 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-16">
        {/* Academic Project Metadata Badge */}
        <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-amber-300 mb-6 tracking-wide bg-slate-900/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-400/30 shadow-lg">
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-amber-400" />
            11-sinf Davlat va Huquq asoslari
          </span>
          <span aria-hidden="true" className="text-amber-500/60">·</span>
          <span>Ekologik Huquq Loyihasi</span>
        </div>

        {/* Main Title strictly from prompt */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4 drop-shadow-sm font-display [text-wrap:balance]">
          Biologik xilma-xillikni huquqiy himoya qilish
        </h1>

        {/* Subtitle strictly from prompt */}
        <p className="text-lg sm:text-2xl md:text-3xl font-medium text-emerald-200/95 mb-6 font-serif-title max-w-3xl mx-auto leading-relaxed [text-wrap:balance]">
          “Tabiatni asrash — nafaqat ekologik, balki huquqiy mas’uliyat hamdir.”
        </p>

        {/* Short Text strictly from prompt */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Biologik xilma-xillikni saqlash jamiyat va davlat oldidagi muhim vazifalardan biridir.
          Tabiiy boyliklardan oqilona foydalanish va atrof-muhitni muhofaza qilish qonun bilan ham tartibga solinadi.
        </p>

        {/* Button strictly from prompt */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#muammo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-xl shadow-emerald-950/50 hover:scale-[1.02] active:scale-[0.98] border border-amber-400/30 cursor-pointer"
          >
            <span>Muammoni o‘rganish ↓</span>
            <ArrowDown className="w-4 h-4 text-amber-300 animate-bounce" />
          </a>

          <a
            href="#huquqiy-asos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-medium text-sm sm:text-base backdrop-blur-md border border-slate-700/80 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Scale className="w-4 h-4 text-amber-300" />
            <span>Qonuniy asoslar</span>
          </a>
        </div>

        {/* Pillars / Quick legal highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-4xl mx-auto mt-14 pt-8 border-t border-slate-800/80 text-left">
          <div className="bg-slate-900/70 backdrop-blur-md rounded-xl p-4 border border-slate-800/80 hover:border-emerald-500/30 transition-colors">
            <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold mb-1">
              <Scale className="w-3.5 h-3.5 text-amber-400" />
              <span>Konstitutsiyaviy norma</span>
            </div>
            <div className="text-xs text-slate-300 leading-snug">
              Har bir fuqaro atrof tabiiy muhitga ehtiyotkorona munosabatda bo‘lishga majburdir.
            </div>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-md rounded-xl p-4 border border-slate-800/80 hover:border-emerald-500/30 transition-colors">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold mb-1">
              <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />
              <span>Qonun ustuvorligi</span>
            </div>
            <div className="text-xs text-slate-300 leading-snug">
              O‘simlik va hayvonot olamiga yetkazilgan har qanday zarar huquqiy baholanadi.
            </div>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-md rounded-xl p-4 border border-slate-800/80 hover:border-emerald-500/30 transition-colors">
            <div className="flex items-center gap-2 text-xs text-teal-300 font-semibold mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
              <span>Jazo muqarrarligi</span>
            </div>
            <div className="text-xs text-slate-300 leading-snug">
              Ma’muriy, fuqaroviy-huquqiy va jinoiy javobgarlik choralari bilan himoyalangan.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
