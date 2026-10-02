import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Scale, Shield, FileText } from 'lucide-react';
import { IMAGES } from '../data/content';

interface PresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PresentationModal: React.FC<PresentationModalProps> = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Biologik xilma-xillikni huquqiy himoya qilish',
      subtitle: '“Tabiatni asrash — nafaqat ekologik, balki huquqiy mas’uliyat hamdir.”',
      content:
        'Biologik xilma-xillikni saqlash jamiyat va davlat oldidagi muhim vazifalardan biridir. Tabiiy boyliklardan oqilona foydalanish va atrof-muhitni muhofaza qilish qonun bilan ham tartibga solinadi.',
      image: IMAGES.hero,
      tag: '01 / Kirish',
    },
    {
      title: 'Bugungi muammoli vaziyat',
      subtitle: 'Ekologik qonunbuzarliklar va tabiiy muvozanatga tahdid',
      content:
        'Bugungi kunda ayrim hududlarda daraxtlarning noqonuniy kesilishi, hayvonlarning noqonuniy ovlanishi, tabiiy hududlarning qurilish uchun o‘zlashtirilishi va atrof-muhitning ifloslanishi biologik xilma-xillikka zarar yetkazmoqda.\n\nHuquqiy muammo: Tabiatga zarar yetkazayotgan shaxslar qanday huquqiy javobgarlikka tortiladi va biologik xilma-xillikni himoya qilish uchun qanday qonuniy choralar ko‘rilishi mumkin?',
      image: IMAGES.deforestation,
      tag: '02 / Muammo',
    },
    {
      title: 'Huquqiy asoslar',
      subtitle: 'Konstitutsiya va maxsus qonunlar tizimi',
      content:
        '1. Konstitutsiyaviy asos — fuqarolarning ekologik huquqlari va tabiatga ehtiyotkorona munosabatda bo‘lish majburiyati.\n2. «Tabiatni muhofaza qilish to‘g‘risida»gi Qonun — resurslardan oqilona foydalanish tartibi.\n3. O‘simlik va hayvonot dunyosini muhofaza qilish qonunchiligi.\n4. Muhofaza etiladigan tabiiy hududlar to‘g‘risidagi qonunchilik.',
      image: IMAGES.hero,
      tag: '03 / Qonuniy asos',
    },
    {
      title: 'Hayotiy misollar va huquqiy masala',
      subtitle: 'Amaliy huquqni qo‘llash amaliyoti',
      content:
        '• Daraxtlarni noqonuniy kesish: Moratoriyni buzish va tabiatga yetkazilgan zararni hisoblash.\n• Noqonuniy ov (brakonyerlik): Noyob va zaif turlarni ovlashda qurol-aslahalarni musodara qilish va og‘ir jazo choralari.\n• Tabiatni ifloslantirish: Chiqindilarni ruxsatsiz to‘kish va ekotizimni majburiy tozalash majburiyati.',
      image: IMAGES.illegalLogging,
      tag: '04 / Misollar',
    },
    {
      title: 'Qonun buzilsa nima bo‘ladi?',
      subtitle: 'Javobgarlikning 3 ta asosiy turi',
      content:
        '1. Ma’muriy javobgarlik: Ruxsatsiz daraxt kesish yoki ov qoidalarini buzganlik uchun jarimalar va ta’sir choralari.\n2. Fuqaroviy-huquqiy javobgarlik: Tabiatga yetkazilgan moddiy zararni to‘liq qoplash va zararlangan hududni qayta tiklash.\n3. Jinoiy javobgarlik: Qizil kitobdagi turlarni yo‘q qilish kabi og‘ir jinoyatlar uchun sud hukmi.',
      image: IMAGES.wildlifeRanger,
      tag: '05 / Javobgarlik',
    },
    {
      title: 'Huquq va tabiat — umumiy mas’uliyat',
      subtitle: '“Tabiatni asrash — kelajak oldidagi mas’uliyat.”',
      content:
        'Biologik xilma-xillikni saqlash faqat ekologlarning vazifasi emas. Har bir fuqaro tabiatga ehtiyotkor munosabatda bo‘lishi, qonunlarga rioya qilishi va atrof-muhitni muhofaza qilishga o‘z hissasini qo‘shishi kerak. Huquqiy tartib va ekologik mas’uliyat birgalikda tabiatni kelajak avlod uchun asrashga xizmat qiladi.',
      image: IMAGES.hero,
      tag: '06 / Xulosa',
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, slides.length]);

  if (!isOpen) return null;

  const slide = slides[currentSlide];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 text-white animate-fadeIn">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase font-mono text-amber-300 bg-amber-950/80 px-2.5 py-1 rounded border border-amber-400/30">
            Huquq fani taqdimot rejimi
          </span>
          <span className="text-xs text-slate-400">
            {slide.tag} · Slayd {currentSlide + 1} / {slides.length}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          title="Taqdimotni yopish (Esc)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Slide Content */}
      <div className="max-w-6xl mx-auto w-full my-auto py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
            11-sinf Davlat va Huquq asoslari
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display [text-wrap:balance]">
            {slide.title}
          </h2>
          <p className="text-lg sm:text-xl text-emerald-200 font-serif-title font-medium">
            {slide.subtitle}
          </p>
          <div className="pt-2 text-sm sm:text-base text-slate-300 leading-relaxed whitespace-pre-line bg-white/5 p-5 sm:p-6 rounded-2xl border border-white/10">
            {slide.content}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/20 bg-slate-900">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between border-t border-white/10 pt-4">
        <div className="text-xs text-slate-400 hidden sm:block">
          Slaydlarni almashtirish uchun <kbd className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">←</kbd> va <kbd className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">→</kbd> tugmalaridan foydalaning
        </div>

        <div className="flex items-center gap-3 mx-auto sm:mx-0">
          <button
            onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
            disabled={currentSlide === 0}
            className={`p-2.5 rounded-xl border flex items-center gap-1.5 text-xs font-semibold transition-colors ${
              currentSlide === 0
                ? 'opacity-40 border-slate-800 text-slate-500 cursor-not-allowed'
                : 'border-white/20 hover:bg-white/10 text-white cursor-pointer'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Oldingi</span>
          </button>

          <span className="text-xs font-mono text-amber-300 px-2">
            {currentSlide + 1} / {slides.length}
          </span>

          <button
            onClick={() => setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1))}
            disabled={currentSlide === slides.length - 1}
            className={`p-2.5 rounded-xl border flex items-center gap-1.5 text-xs font-semibold transition-colors ${
              currentSlide === slides.length - 1
                ? 'opacity-40 border-slate-800 text-slate-500 cursor-not-allowed'
                : 'border-white/20 hover:bg-white/10 text-white cursor-pointer'
            }`}
          >
            <span>Keyingi</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
