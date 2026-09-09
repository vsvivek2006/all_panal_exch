'use client';

import React from 'react';
import { CheckCircle2, Zap, CreditCard, Gift } from 'lucide-react';

export default function PlatformFeatures() {
  const features = [
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      title: "User Friendly, Fast & Secure",
      desc: "Clean UI easy to follow for first-time users with 256-bit SSL encrypted protection.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Live Gaming Odds",
      desc: "Competitive, instantly updating exchange odds across live international fixtures.",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Fast & Simple Deposits/Withdrawals",
      desc: "Stress-free payments with instant credit and rapid earnings settlements.",
    },
    {
      icon: <Gift className="w-5 h-5" />,
      title: "Bonus & Promotions",
      desc: "Exclusive welcome rewards, active login bonuses, and generous referral incentives.",
    },
  ];

  return (
    <section id="features" className="w-full bg-[#1b1e2b] py-12 md:py-16 scroll-mt-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-[#1b170a] to-[#121216] p-8 shadow-xl md:p-10">
          <h2 className="mb-6 text-3xl font-extrabold text-white md:text-4xl">
            Features of <span className="text-amber-400">All Panel Exch</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                  {features[0].icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{features[0].title}</h3>
                  <p className="text-xs text-gray-300">{features[0].desc}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                  {features[1].icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{features[1].title}</h3>
                  <p className="text-xs text-gray-300">{features[1].desc}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                  {features[2].icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{features[2].title}</h3>
                  <p className="text-xs text-gray-300">{features[2].desc}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                  {features[3].icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{features[3].title}</h3>
                  <p className="text-xs text-gray-300">{features[3].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
