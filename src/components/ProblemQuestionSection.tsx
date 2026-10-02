import React, { useState } from 'react';
import { HelpCircle, MessageSquare, ThumbsUp, Send, CheckCircle2, ChevronRight, Users, Sparkles } from 'lucide-react';
import { DISCUSSION_TOPICS } from '../data/content';

interface UserComment {
  id: string;
  topicId: string;
  name: string;
  comment: string;
  votes: number;
}

export const ProblemQuestionSection: React.FC = () => {
  const [activeTopicId, setActiveTopicId] = useState<string>('disc-1');
  const [nameInput, setNameInput] = useState('');
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState<UserComment[]>([
    {
      id: 'c-1',
      topicId: 'disc-1',
      name: 'Azizbek (11-A sinf)',
      comment: 'Dronlar va avtomatlashtirilgan kameralar orqali o‘rmonlarni nazorat qilish inson omili sabab bo‘ladigan korrupsiyani yo‘qotadi.',
      votes: 14,
    },
    {
      id: 'c-2',
      topicId: 'disc-2',
      name: 'Madinabonu',
      comment: 'Maktabda faqat nazariya emas, qonunbuzarlik uchun javobgarlik amaliyotini ko‘rsatuvchi sud simulyatsiyalari o‘tkazilishi kerak.',
      votes: 19,
    },
    {
      id: 'c-3',
      topicId: 'disc-3',
      name: 'Jasur (Eko-faol)',
      comment: 'Yoshlar o‘z mahallalarida daraxtlarni noqonuniy kesayotganlarni ko‘rganda «1157» yoki Ekologiya vazirligi ishonch telefoniga darhol xabar berishi shart.',
      votes: 22,
    },
  ]);
  const [votedIds, setVotedIds] = useState<string[]>([]);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleVote = (commentId: string) => {
    if (votedIds.includes(commentId)) {
      setComments(
        comments.map((c) => (c.id === commentId ? { ...c, votes: c.votes - 1 } : c))
      );
      setVotedIds(votedIds.filter((id) => id !== commentId));
    } else {
      setComments(
        comments.map((c) => (c.id === commentId ? { ...c, votes: c.votes + 1 } : c))
      );
      setVotedIds([...votedIds, commentId]);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim()) return;

    const newC: UserComment = {
      id: `comm-${Date.now()}`,
      topicId: activeTopicId,
      name: nameInput.trim() ? nameInput.trim() : 'Sinfdoshingiz',
      comment: commentInput.trim(),
      votes: 1,
    };

    setComments([newC, ...comments]);
    setCommentInput('');
    setNameInput('');
    setSubmittedSuccess(true);
    setTimeout(() => setSubmittedSuccess(false), 4000);
  };

  const currentTopic = DISCUSSION_TOPICS.find((t) => t.id === activeTopicId) || DISCUSSION_TOPICS[0];
  const filteredComments = comments.filter((c) => c.topicId === activeTopicId);

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Prominent Question Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white p-8 sm:p-12 lg:p-14 shadow-2xl border border-amber-400/30 relative overflow-hidden">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-950/60 px-4 py-1.5 rounded-full border border-amber-400/30 mb-6">
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>Sinfda bahs-munozara uchun mavzu</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-200 tracking-wide mb-5 font-display">
              Muammoli savol
            </h2>

            {/* Central Question strictly from prompt */}
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-serif-title leading-relaxed [text-wrap:balance] mb-6 drop-shadow-sm">
              “Davlat tabiatni himoya qilish uchun qonunlar yaratgan bo‘lsa, nega biologik xilma-xillikka zarar yetkazuvchi holatlar hanuz uchrab turadi?”
            </blockquote>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Qonunlarning mavjud bo‘lishi tabiatni avtomatik ravishda saqlab qolmaydi. Quyidagi 3 ta asosiy yo‘nalish bo‘yicha fikr almashing:
            </p>
          </div>

          {/* 3 Discussion Directions strictly from prompt */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-5xl mx-auto">
            {DISCUSSION_TOPICS.map((topic) => {
              const isActive = activeTopicId === topic.id;

              return (
                <button
                  key={topic.id}
                  onClick={() => setActiveTopicId(topic.id)}
                  className={`cursor-pointer rounded-2xl p-5 sm:p-6 text-left transition-all duration-300 border flex flex-col justify-between ${
                    isActive
                      ? 'bg-white/20 border-amber-400 shadow-lg ring-1 ring-amber-400/40'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div>
                    <div className="text-xs font-mono uppercase text-amber-300 mb-2 font-bold">
                      Yo‘nalish:
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white font-display mb-3">
                      “{topic.question}”
                    </h4>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-medium pt-3 border-t border-white/10">
                    <span>Muhokamaga qo‘shilish</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Direction Analysis Box */}
          <div className="max-w-4xl mx-auto bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-800 backdrop-blur-md mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">
              Tahliliy yondashuv
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {currentTopic.question}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-5">
              {currentTopic.promptText}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800">
              {currentTopic.studentKeypoints.map((pt, pIdx) => (
                <div key={pIdx} className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80 text-xs text-slate-200">
                  <span className="text-amber-400 font-bold block mb-1">0{pIdx + 1} - Taklif</span>
                  {pt}
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Classroom Discussion Board */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
                <MessageSquare className="w-4 h-4" />
                <span>O‘quvchilar va sinfdoshlar takliflari ({filteredComments.length})</span>
              </div>
            </div>

            {/* List of comments */}
            <div className="space-y-3 mb-6">
              {filteredComments.map((c) => {
                const isVoted = votedIds.includes(c.id);

                return (
                  <div
                    key={c.id}
                    className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 flex items-start justify-between gap-4"
                  >
                    <div>
                      <div className="text-xs font-bold text-amber-300 mb-1">
                        {c.name}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {c.comment}
                      </p>
                    </div>

                    <button
                      onClick={() => handleVote(c.id)}
                      className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                        isVoted
                          ? 'bg-amber-400 text-slate-950 font-bold'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                      title="Ushbu fikrni qo‘llab-quvvatlash"
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span className="tabular-nums">{c.votes}</span>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Submit form */}
            <form onSubmit={handleAddComment} className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 space-y-3">
              <div className="text-xs font-semibold text-slate-300 mb-1">
                Sizning fikringiz va taklifingiz (Bahsga qo‘shiling):
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="Ismingiz (masalan, Shahnoza)"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-800 text-white text-xs sm:text-sm border border-slate-700 focus:outline-none focus:border-amber-400 placeholder-slate-500"
                />
                <input
                  type="text"
                  placeholder="Huquqiy fikringiz yoki taklifingiz..."
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  required
                  className="sm:col-span-2 px-3.5 py-2.5 rounded-xl bg-slate-800 text-white text-xs sm:text-sm border border-slate-700 focus:outline-none focus:border-amber-400 placeholder-slate-500"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-slate-400">
                  Fikringiz tanlangan «{currentTopic.question.slice(0, 30)}...» yo‘nalishida e’lon qilinadi
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors shadow-sm cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Fikrni yuborish</span>
                </button>
              </div>

              {submittedSuccess && (
                <div className="flex items-center gap-2 text-emerald-300 text-xs bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-500/40">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Taklifingiz muvaffaqiyatli qo‘shildi! Rahmat.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
