'use client';

import React from 'react';

export default function BlogSection() {
  const articles = [
    {
      title: "Blackjack Splitting and Doubling Down — When and Why to Do It on All Panel Exch",
      category: "Casino Strategy",
      excerpt: "Master basic blackjack mechanics, table probability, and when to optimize your bankroll during live dealer sessions.",
      author: "Edward Miller",
      date: "August 7, 2026",
      time: "8:38 am",
      imageSrc: "/images/promo-official.jpg",
    },
    {
      title: "Andar Bahar Card Game — Complete Guide, Rules, Strategy & How to Play on All Panel Exch",
      category: "Indian Classics",
      excerpt: "Comprehensive guide to India's favorite fast-paced card game with rule breakdowns, odds evaluation, and bankroll tips.",
      author: "Edward Miller",
      date: "August 4, 2026",
      time: "5:34 am",
      imageSrc: "/images/promo-whatis.jpg",
    },
    {
      title: "Things to Consider Before Placing a Bet on All Panel Exch — Complete Guide",
      category: "Sports Exchange",
      excerpt: "Critical factors every user should know: reading exchange match liquidity, verifying team news, and practicing disciplined bankroll habits.",
      author: "Edward Miller",
      date: "July 30, 2026",
      time: "4:40 am",
      imageSrc: "/images/promo-services.jpg",
    },
  ];

  return (
    <section id="blogs" className="w-full bg-[#0a0b10] py-12 md:py-16 scroll-mt-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#12141c] p-6 shadow-2xl md:p-10">
          {/* Header Pill */}
          <div className="mb-8 text-center">
            <div className="inline-block rounded-2xl border border-amber-500/50 bg-[#181a24] px-8 py-3 shadow-lg shadow-amber-500/10">
              <h2 className="text-lg font-extrabold tracking-tight text-white md:text-xl font-sans">
                Cricket News, Tips, and Platform Insights
              </h2>
            </div>
          </div>

          {/* 3 Articles Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {articles.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-amber-500/30 bg-[#0c0d12] overflow-hidden shadow-xl transition duration-300 hover:border-amber-400 group"
              >
                {/* Visual Banner */}
                <div className="relative h-44 w-full overflow-hidden bg-black">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/70 border border-amber-500/30 text-[10px] font-bold text-amber-300 uppercase tracking-wider backdrop-blur-sm">
                    {item.category}
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white leading-snug mb-3 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 mb-4 leading-relaxed line-clamp-2">
                      {item.excerpt}
                    </p>
                    <span className="inline-block text-xs font-bold text-emerald-400 hover:underline mb-4 uppercase tracking-wider cursor-pointer">
                      READ MORE »
                    </span>
                  </div>

                  <div className="border-t border-white/10 pt-3 text-[11px] text-gray-400">
                    {item.author} • {item.date} • {item.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="inline-block rounded-xl border border-amber-400/60 bg-[#181a24] px-8 py-3 text-xs font-extrabold text-amber-400 shadow-md transition hover:bg-black active:scale-95">
              All Panel Exch Blogs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
