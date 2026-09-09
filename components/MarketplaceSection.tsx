'use client';

import React from 'react';

interface MarketplaceSectionProps {
  onOpenGetId?: () => void;
}

export default function MarketplaceSection({ onOpenGetId }: MarketplaceSectionProps) {
  const categories = [
    {
      emoji: "🏏",
      title: "Cricket Exchange",
      desc: "Cricket is at the core of our platform, offering deep liquidity and live odds on IPL, international T20 leagues, Test matches, and the ICC World Cup. Track real-time ball-by-ball markets with zero delay.",
      colSpan: "sm:col-span-1 lg:col-span-1",
    },
    {
      emoji: "🏆",
      title: "Sports Market",
      desc: "Comprehensive sports coverage beyond cricket: bet on Premier League football, UEFA Champions League, Grand Slam tennis, Pro Kabaddi League, and daily horse racing fixtures with prompt settlements.",
      colSpan: "sm:col-span-1 lg:col-span-1",
    },
    {
      emoji: "🎡",
      title: "Live Casino Games",
      desc: "Immerse yourself in authentic real-time casino environments featuring live dealer tables for Roulette, Blackjack, Baccarat, Teen Patti, and VIP Poker with professional hosts and crisp streams.",
      colSpan: "sm:col-span-1 lg:col-span-1",
    },
    {
      emoji: "🎰",
      title: "Slots & Matka",
      desc: "Explore hundreds of interactive jackpot slot titles alongside traditional Indian number games like Matka, designed with intuitive rules and swift result verification.",
      colSpan: "sm:col-span-1 lg:col-span-1",
    },
    {
      emoji: "📈",
      title: "All Panel App & ID Services",
      desc: "Get started with your verified All Panel ID for encrypted dashboard access. The responsive mobile app lets you place bets, monitor odds, and manage account settlements seamlessly from anywhere in India.",
      colSpan: "sm:col-span-1 lg:col-span-2",
    },
  ];

  return (
    <section id="marketplace" className="w-full bg-[#0a0b10] py-12 md:py-16 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#12141c] p-6 shadow-2xl md:p-10">
          {/* Header Pill */}
          <div className="mb-4 text-center">
            <div className="inline-block rounded-2xl border border-amber-500/50 bg-[#181a24] px-8 py-3 shadow-lg shadow-amber-500/10">
              <h2 className="text-lg font-extrabold tracking-tight text-white md:text-xl font-sans">
                All Panel Exch Marketplace
              </h2>
            </div>
          </div>

          <p className="mx-auto mb-10 max-w-4xl text-center text-xs md:text-sm text-gray-300 leading-relaxed">
            All Panel Exch brings together the most popular online sports exchange markets and entertainment verticals under one secure roof. Every category is optimized for competitive odds, transparent settlements, and responsive gameplay.
          </p>

          {/* 5 Yellow/Gold Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center rounded-3xl bg-[#fcd34d] p-6 text-black shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${cat.colSpan}`}
              >
                <div className="mb-4 text-4xl">{cat.emoji}</div>
                <h3 className="mb-3 text-lg font-extrabold text-black text-center">
                  {cat.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-900 leading-relaxed text-center">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
