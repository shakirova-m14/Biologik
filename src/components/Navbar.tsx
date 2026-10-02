import React, { useState, useEffect } from 'react';
import { Scale, Menu, X, Shield, Gavel, FileText } from 'lucide-react';

interface NavbarProps {
  onStartPresentation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartPresentation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#bosh-sahifa', label: 'Bosh sahifa' },
    { href: '#muammo', label: 'Muammo' },
    { href: '#huquqiy-asos', label: 'Huquqiy asos' },
    { href: '#misollar', label: 'Misollar' },
    { href: '#yechimlar', label: 'Yechimlar' },
    { href: '#javobgarlik', label: 'Javobgarlik' },
    { href: '#xulosa', label: 'Xulosa' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-emerald-900/30 py-3 text-white'
          : 'bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#bosh-sahifa"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-amber-300 shadow-sm border border-amber-400/30 transition-transform duration-200 group-hover:scale-105">
            <Scale className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                Huquq va Tabiat
              </span>
              <span className="text-[10px] uppercase font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 px-1.5 py-0.5 rounded">
                11-sinf
              </span>
            </div>
            <div className="text-[11px] text-slate-300 hidden sm:block">
              Biologik xilma-xillikni huquqiy himoya qilish
            </div>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs xl:text-sm font-medium transition-colors text-slate-300 hover:text-amber-300 relative py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {onStartPresentation && (
            <button
              onClick={onStartPresentation}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-slate-200 border border-white/15 transition-all cursor-pointer"
              title="Darsda proyektor orqali taqdimot qilish"
            >
              <FileText className="w-3.5 h-3.5 text-amber-300" />
              <span>Taqdimot</span>
            </button>
          )}

          <a
            href="#muammo"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white shadow-sm transition-all border border-emerald-500/30 cursor-pointer"
          >
            <Shield className="w-3.5 h-3.5 text-amber-300" />
            <span>Muammoni o‘rganish</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-200 hover:text-white"
            aria-label="Menyu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-5 py-4 space-y-2.5 backdrop-blur-xl shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-300 hover:text-amber-300 border-b border-slate-800/60"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            {onStartPresentation && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onStartPresentation();
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-white/10 text-white font-medium text-xs flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-amber-300" />
                <span>Taqdimot rejimini ochish</span>
              </button>
            )}
            <a
              href="#muammo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 rounded-lg bg-emerald-600 text-white font-medium text-xs flex items-center justify-center gap-2"
            >
              <Gavel className="w-4 h-4 text-amber-300" />
              <span>Muammoli vaziyatga o‘tish</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
