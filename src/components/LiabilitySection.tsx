import React, { useState } from 'react';
import { Scale, ArrowRight, AlertOctagon, FileCheck, ShieldAlert, Gavel, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { LIABILITY_TYPES, SCALE_OF_JUSTICE_PIPELINE } from '../data/content';

export const LiabilitySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3);

  return (
    <section id="javobgarlik" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-950/60 px-4 py-1.5 rounded-full border border-amber-400/30 mb-3">
            <Scale className="w-4 h-4 text-amber-300" />
            <span>Adolat va qonun ustuvorligi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Qonun buzilsa nima bo‘ladi?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Huquqbuzarlikning xarakteri va yetkazilgan zarar miqdoriga qarab qonunchilikda 3 xil asosiy javobgarlik turi nazarda tutilgan:
          </p>
        </div>

        {/* 3 Liability Types Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {LIABILITY_TYPES.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl p-7 bg-slate-800/80 backdrop-blur-md border border-slate-700/80 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg border ${item.badgeColor}`}>
                    {item.type}
                  </span>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed mb-4">
                  {item.definition}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-700/60 text-xs">
                  <div>
                    <span className="text-slate-400 font-semibold block mb-0.5">Qo‘llanilish holati:</span>
                    <p className="text-slate-300 leading-relaxed">{item.scope}</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-start gap-2 text-xs text-amber-300 bg-slate-900/60 p-3 rounded-xl border border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item.sanctionDescription}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Scale of Justice Pipeline Graphic */}
        <div className="rounded-3xl bg-slate-950/90 border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
                <Scale className="w-4 h-4 text-amber-400" />
                <span>Huquqiy bosqichlar zanjiri</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Huquqiy ta’sir ko‘rsatish tizimi
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Qonunbuzarlik sodir etilgan paytdan boshlab adolat qaror topguniga qadar bosqichlar ketma-ketligi:
              </p>
            </div>
            <div className="text-xs font-mono text-amber-300 bg-amber-950/50 px-3 py-1.5 rounded-lg border border-amber-400/30 self-start md:self-auto">
              Adolat mezonlari
            </div>
          </div>

          {/* Scale-of-Justice Pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 my-8">
            {SCALE_OF_JUSTICE_PIPELINE.map((step) => {
              const isActive = activeStep === step.stepNumber;

              return (
                <div
                  key={step.stepNumber}
                  onClick={() => setActiveStep(step.stepNumber)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? 'bg-gradient-to-b from-emerald-950/90 to-slate-900 border-amber-400/80 shadow-lg ring-1 ring-amber-400/40'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-7 h-7 rounded-full bg-slate-800 text-amber-300 text-xs font-mono font-bold flex items-center justify-center border border-slate-700">
                        0{step.stepNumber}
                      </span>
                      {step.stepNumber < 5 && (
                        <ArrowRight className="w-4 h-4 text-slate-600 hidden lg:block" />
                      )}
                    </div>

                    <h4 className="text-base font-bold text-white mb-2 font-display">
                      {step.label}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {step.detail}
                    </p>
                  </div>

                  <div className="text-[11px] text-emerald-300 pt-3 border-t border-slate-800 font-medium">
                    {step.legalAction}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pipeline Active Step Highlight Explanation */}
          <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
              <Scale className="w-6 h-6 text-amber-300" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                Bosqich {activeStep}: {SCALE_OF_JUSTICE_PIPELINE[activeStep - 1].label}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Tabiatni huquqiy himoya qilishda har bir harakat qonuniy baholanishi, zarari to‘liq hisoblanishi va eng muhimi — keyingi qonunbuzarliklarning oldini oluvchi profilaktika choralariga aylanmog‘i zarur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
