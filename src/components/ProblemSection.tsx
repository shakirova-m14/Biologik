import React from 'react';
import { AlertTriangle, Gavel, FileQuestion, Axe, Compass, Skull } from 'lucide-react';
import { IMAGES } from '../data/content';

export const ProblemSection: React.FC = () => {
  return (
    <section id="muammo" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-950/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>Ekologik huquqbuzarliklar tahlili</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Bugungi muammoli vaziyat
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Bugungi kunda ayrim hududlarda daraxtlarning noqonuniy kesilishi, hayvonlarning noqonuniy ovlanishi,
            tabiiy hududlarning qurilish uchun o‘zlashtirilishi va atrof-muhitning ifloslanishi biologik xilma-xillikka zarar yetkazmoqda.
          </p>
        </div>

        {/* Two-Column Grid: Large Realistic Image + Interactive Legal Problem Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Visual evidence container */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-950 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto h-full min-h-[340px]">
              <img
                src={IMAGES.deforestation}
                alt="Tabiatga yetkazilayotgan ekologik ziyon va noqonuniy daraxt kesish holati"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Tag on image */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-700/70">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs uppercase font-mono font-bold text-amber-300">
                    Dalil va monitoring
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Ekologik inspektsiya qaydlari
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200">
                  O‘rmon maydonlarining ruxsatsiz yo‘q qilinishi tabiiy ekotizim yaxlitligini buzadi va o‘nlab biologik turlarning boshpanasiz qolishiga olib keladi.
                </p>
              </div>
            </div>
          </div>

          {/* Right column: The Highlighted Legal Problem Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Highlighted legal problem card requested specifically */}
            <div className="rounded-3xl p-7 sm:p-8 bg-gradient-to-br from-emerald-950/90 via-slate-900 to-slate-950 border-2 border-amber-400/40 shadow-2xl relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-950/60 px-3.5 py-1.5 rounded-xl border border-amber-400/30 w-fit mb-5">
                <Gavel className="w-4 h-4 text-amber-300" />
                <span>Huquqiy muammo</span>
              </div>

              <blockquote className="text-lg sm:text-xl font-bold text-white leading-relaxed font-serif-title mb-6 [text-wrap:balance]">
                “Tabiatga zarar yetkazayotgan shaxslar qanday huquqiy javobgarlikka tortiladi va biologik xilma-xillikni himoya qilish uchun qanday qonuniy choralar ko‘rilishi mumkin?”
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-4 border-t border-slate-800">
                Ushbu savol bugungi huquq fani, sudyalar, ekologlar va har bir fuqaro oldidagi asosiy huquqiy vazifadir. Tabiatga tajovuz qilgan shaxs jazolanadimi yoki yetkazilgan zararni qoplab beradimi?
              </p>
            </div>

            {/* Sub-cards illustrating the scope of violations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-4 border border-slate-700/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-300 flex items-center justify-center shrink-0 border border-rose-500/30">
                  <Axe className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Ruxsatsiz kesish
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    O‘simlik dunyosiga moddiy zarar yetkazish.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-4 border border-slate-700/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-500/30">
                  <Skull className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Noqonuniy ov
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    Yovvoyi faunaning genofondiga tajovuz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
