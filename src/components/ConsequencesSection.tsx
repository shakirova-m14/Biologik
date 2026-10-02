import React from 'react';
import { AlertOctagon, Skull, Trees, Network, Flame, Droplets, Users, ShieldAlert } from 'lucide-react';
import { WARNING_CONSEQUENCES, IMAGES } from '../data/content';

export const ConsequencesSection: React.FC = () => {
  const getWarningIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Skull className="w-5 h-5 text-rose-500" />;
      case 1:
        return <Trees className="w-5 h-5 text-amber-500" />;
      case 2:
        return <Network className="w-5 h-5 text-orange-500" />;
      case 3:
        return <Flame className="w-5 h-5 text-red-500" />;
      case 4:
        return <Droplets className="w-5 h-5 text-amber-400" />;
      case 5:
        return <Users className="w-5 h-5 text-rose-400" />;
      default:
        return <AlertOctagon className="w-5 h-5 text-rose-500" />;
    }
  };

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Image of Damaged Ecosystem with Contrast Scrim */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity">
        <img
          src={IMAGES.degradedEcosystem}
          alt="Buzilgan tabiiy ekotizim va cho‘llanish xavfi"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400 bg-rose-950/60 px-4 py-1.5 rounded-full border border-rose-500/30 mb-3">
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            <span>Xatarli ekologik ssenariylar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Muammo o‘z vaqtida hal qilinmasa...
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Qonuniy tartib va ekologik nazorat bo‘shashsa, tabiat va insoniyat qanday og‘ir oqibatlarga yuz tutadi:
          </p>
        </div>

        {/* 6 Warning Cards Grid strictly from prompt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WARNING_CONSEQUENCES.map((item, idx) => (
            <div
              key={item.id}
              className="bg-slate-900/85 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-slate-800 hover:border-rose-500/50 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700">
                    {getWarningIcon(idx)}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-rose-300 bg-rose-950/60 px-2.5 py-1 rounded border border-rose-500/30">
                    {item.impactArea}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 font-display">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 mt-5 flex items-center justify-between text-[11px] text-slate-400">
                <span>Ekologik xavf</span>
                <span className="text-rose-400 font-medium">Qonuniy himoya zarur</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
