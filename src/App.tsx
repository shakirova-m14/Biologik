import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { LegalBasisSection } from './components/LegalBasisSection';
import { ExamplesSection } from './components/ExamplesSection';
import { SolutionsSection } from './components/SolutionsSection';
import { LiabilitySection } from './components/LiabilitySection';
import { ConsequencesSection } from './components/ConsequencesSection';
import { ProblemQuestionSection } from './components/ProblemQuestionSection';
import { ConclusionSection } from './components/ConclusionSection';
import { Footer } from './components/Footer';
import { PresentationModal } from './components/PresentationModal';
import { Scale } from 'lucide-react';

export default function App() {
  const [isPresentationOpen, setIsPresentationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-900">
      {/* Sticky Top Navigation */}
      <Navbar onStartPresentation={() => setIsPresentationOpen(true)} />

      {/* Main Educational Flow for 11th Grade Law Project */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Bugungi Muammoli Vaziyat + Huquqiy Muammo Card */}
        <ProblemSection />

        {/* 3. Biologik xilma-xillikni himoya qilishning huquqiy asoslari (Konstitutsiya va qonunlar) */}
        <LegalBasisSection />

        {/* 4. Hayotiy misollar (Daraxtlarni noqonuniy kesish, Noqonuniy ov, Tabiatni ifloslantirish) */}
        <ExamplesSection />

        {/* 5. Huquqiy yechimlar (01–06 Numbered Cards) */}
        <SolutionsSection />

        {/* 6. Javobgarlik ("Qonun buzilsa nima bo‘ladi?") + Scale-of-Justice Pipeline */}
        <LiabilitySection />

        {/* 7. "Muammo o‘z vaqtida hal qilinmasa..." (6 Warning Cards + Degraded Ecosystem) */}
        <ConsequencesSection />

        {/* 8. Muammoli savol + 3 Directions + Interactive Classroom Discussion */}
        <ProblemQuestionSection />

        {/* 9. Xulosa ("Huquq va tabiat — umumiy mas’uliyat" + Quote + Quiz) */}
        <ConclusionSection />
      </main>

      {/* Modern Educational Legal Footer */}
      <Footer />

      {/* Floating Presentation Mode Button for Classrooms */}
      <button
        onClick={() => setIsPresentationOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-emerald-800 to-teal-900 hover:from-emerald-700 hover:to-teal-800 text-white p-3.5 sm:px-4 sm:py-3 rounded-full sm:rounded-2xl shadow-2xl flex items-center gap-2.5 transition-all duration-200 hover:scale-105 active:scale-95 border border-amber-400/40 cursor-pointer"
        title="Darsda proyektorda taqdimot qilish rejimi"
      >
        <Scale className="w-5 h-5 text-amber-300" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide uppercase">
          Taqdimot rejimi
        </span>
      </button>

      {/* Fullscreen Classroom Presentation Modal */}
      <PresentationModal
        isOpen={isPresentationOpen}
        onClose={() => setIsPresentationOpen(false)}
      />
    </div>
  );
}
