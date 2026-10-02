import React from 'react';
import { Scale, Shield, BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800 text-center md:text-left">
          {/* Logo & Subject */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-amber-300 border border-amber-400/30 shadow-sm">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <span className="text-base font-bold text-white tracking-tight block">
                Biologik Xilma-xillikni Huquqiy Himoya Qilish
              </span>
              <span className="text-xs text-slate-400">
                11-sinf Davlat va Huquq asoslari fani o‘quv loyihasi
              </span>
            </div>
          </div>

          {/* Links matching navbar */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs sm:text-sm">
            <a href="#bosh-sahifa" className="hover:text-amber-300 transition-colors">Bosh sahifa</a>
            <a href="#muammo" className="hover:text-amber-300 transition-colors">Muammo</a>
            <a href="#huquqiy-asos" className="hover:text-amber-300 transition-colors">Huquqiy asos</a>
            <a href="#misollar" className="hover:text-amber-300 transition-colors">Misollar</a>
            <a href="#yechimlar" className="hover:text-amber-300 transition-colors">Yechimlar</a>
            <a href="#javobgarlik" className="hover:text-amber-300 transition-colors">Javobgarlik</a>
            <a href="#xulosa" className="hover:text-amber-300 transition-colors">Xulosa</a>
          </div>
        </div>

        {/* Legal project credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div>
            “Tabiatni asrash — nafaqat ekologik, balki huquqiy mas’uliyat hamdir.”
          </div>
          <div>
            O‘zbekiston Respublikasi umumta’lim maktablari 11-sinf o‘quvchilari uchun taqdimot
          </div>
        </div>
      </div>
    </footer>
  );
};
