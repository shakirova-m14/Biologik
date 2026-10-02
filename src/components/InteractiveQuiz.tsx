import React, { useState } from 'react';
import { Award, CheckCircle, XCircle, RefreshCw, Scale } from 'lucide-react';
import { LAW_QUIZ_QUESTIONS } from '../data/content';

export const InteractiveQuiz: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (questionId: number, optionIndex: number) => {
    if (showResults) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionIndex,
    });
  };

  const calculateScore = () => {
    let score = 0;
    LAW_QUIZ_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const isComplete = Object.keys(selectedAnswers).length === LAW_QUIZ_QUESTIONS.length;
  const score = calculateScore();

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm mt-16 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">
            <Scale className="w-4 h-4 text-emerald-600" />
            <span>Sinfda bilimni sinash testi</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
            Huquqiy bilimingizni sinab ko‘ring
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            O‘zbekiston ekologik qonunchiligi va huquqiy javobgarlik bo‘yicha 3 ta asosiy savol:
          </p>
        </div>

        {showResults && (
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Qayta topshirish</span>
          </button>
        )}
      </div>

      {/* Questions */}
      <div className="space-y-6 my-6">
        {LAW_QUIZ_QUESTIONS.map((q, qIndex) => {
          const userAnswer = selectedAnswers[q.id];

          return (
            <div key={q.id} className="space-y-3">
              <div className="font-semibold text-sm sm:text-base text-slate-900 flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-900 text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  {qIndex + 1}
                </span>
                <span>{q.question}</span>
              </div>

              <div className="grid grid-cols-1 gap-2 pl-8">
                {q.options.map((option, oIndex) => {
                  const isSelected = userAnswer === oIndex;
                  const isCorrect = q.correctIndex === oIndex;

                  let optionStyle = 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700';

                  if (showResults) {
                    if (isCorrect) {
                      optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-medium';
                    } else if (isSelected && !isCorrect) {
                      optionStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                    } else {
                      optionStyle = 'bg-slate-50 opacity-50 border-slate-200 text-slate-500';
                    }
                  } else if (isSelected) {
                    optionStyle = 'bg-emerald-50 border-emerald-600 text-emerald-950 font-medium shadow-xs';
                  }

                  return (
                    <button
                      key={oIndex}
                      onClick={() => handleSelect(q.id, oIndex)}
                      disabled={showResults}
                      className={`text-left text-xs sm:text-sm p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${optionStyle}`}
                    >
                      <span>{option}</span>
                      {showResults && isCorrect && (
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                      )}
                      {showResults && isSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {showResults && (
                <div className="text-xs text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 ml-8 leading-relaxed">
                  <strong className="text-slate-900">Huquqiy asos:</strong> {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quiz Submit / Result Bar */}
      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        {!showResults ? (
          <>
            <span className="text-xs text-slate-500">
              {Object.keys(selectedAnswers).length} / {LAW_QUIZ_QUESTIONS.length} savol belgilandi
            </span>
            <button
              onClick={() => setShowResults(true)}
              disabled={!isComplete}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm ${
                isComplete
                  ? 'bg-emerald-700 hover:bg-emerald-600 text-white cursor-pointer'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              Natijani hisoblash
            </button>
          </>
        ) : (
          <div className="w-full flex items-center justify-between bg-emerald-50 p-4 rounded-2xl border border-emerald-200">
            <div className="flex items-center gap-3">
              <Award className="w-7 h-7 text-emerald-700 shrink-0" />
              <div>
                <div className="text-sm font-bold text-emerald-950">
                  Natijangiz: {score} / {LAW_QUIZ_QUESTIONS.length} to‘g‘ri javob!
                </div>
                <div className="text-xs text-emerald-800">
                  {score === 3
                    ? 'A’lo natija! Ekologik qonunchilik va javobgarlik asoslarini puxta o‘zlashtiribsiz.'
                    : 'Yaxshi! Qonun moddalari va huquqiy tushunchalarni yana bir bor takrorlab oling.'}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
