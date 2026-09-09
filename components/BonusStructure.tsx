'use client';

import React from 'react';

interface BonusStructureProps {
  onOpenGetId?: () => void;
}

export default function BonusStructure({ onOpenGetId }: BonusStructureProps) {
  const bonusCards = [
    {
      badge: "🎁 WELCOME BONUS",
      title: "Welcome Bonus",
      desc: "Register on the platform, fund your wallet, and unlock an initial welcome reward for cricket, live casino, or multi-sport exchanges. Simple conditions and swift activation.",
    },
    {
      badge: "💵 BONUS",
      title: "Login Bonuses",
      desc: "Stay engaged with active daily login perks, event-based bonus credits, and tournament spin rewards during high-stakes series like the IPL and World Cup.",
    },
    {
      badge: "👥 REFER A FRIEND",
      title: "Referral Bonus",
      desc: "Share your referral link with sports enthusiasts. When your friends register and make their first deposit, both accounts receive complimentary platform play credits.",
    },
  ];

  return (
    <section id="bonus" className="w-full bg-[#1b1e2b] py-12 md:py-16 scroll-mt-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#12141c] p-6 shadow-2xl md:p-10 text-center">
          {/* Header 1 */}
          <div className="mb-4">
            <div className="inline-block rounded-2xl border border-amber-500/50 bg-[#181a24] px-8 py-3 shadow-lg shadow-amber-500/10">
              <h2 className="text-lg font-extrabold tracking-tight text-white md:text-xl font-sans">
                All Panel Exch Bonus (Welcome, Login, and Referral)
              </h2>
            </div>
          </div>

          {/* Header 2 */}
          <div className="mb-8">
            <div className="inline-block rounded-2xl border border-amber-500/30 bg-[#181a24] px-6 py-2.5 shadow-md">
              <h3 className="text-sm font-bold tracking-wide text-white md:text-base">
                All Panel Exch Bonus Structure for all users
              </h3>
            </div>
          </div>

          <div className="mx-auto max-w-4xl space-y-4 text-xs md:text-sm text-gray-300 leading-relaxed mb-10">
            <p>
              Maximize every betting session with clear, reliable bonus rewards designed to elevate your gaming journey. New members kick off with a generous welcome match on their first verified deposit, providing extra runway from day one.
            </p>
            <p>
              Active members continually benefit from regular check-in rewards, milestone tournament promos, and transparent wagering terms—kept straightforward, fair, and rewarding.
            </p>
          </div>

          {/* 3 Bonus Cards */}
          <div className="grid gap-6 md:grid-cols-3 text-center mb-8">
            {bonusCards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-3xl border-2 border-amber-500/40 bg-[#0c0d12] p-6 shadow-xl transition duration-300 hover:border-amber-400"
              >
                <div className="mb-4 inline-block rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-black text-amber-400 border border-amber-500/30">
                  {card.badge}
                </div>
                <h3 className="mb-3 text-lg font-extrabold text-white">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Gradient Border Button */}
          <div className="pt-2">
            <div className="inline-block rounded-2xl bg-gradient-to-r from-purple-500 via-amber-400 to-cyan-400 p-[2px] shadow-[0_0_25px_rgba(245,158,11,0.3)] transition hover:scale-105">
              <button
                onClick={onOpenGetId}
                className="block rounded-[14px] bg-[#12141c] px-8 py-3 text-sm font-extrabold text-white transition hover:bg-black active:scale-95"
              >
                Get All Panel Bonus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
