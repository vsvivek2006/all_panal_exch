'use client';

import React from 'react';

export default function WhyChooseUs() {
  const reasons = [
    {
      num: 1,
      title: "Licensed & Secured Platform",
      desc: "Players enjoy complete peace of mind knowing their accounts, personal data, and funds are guarded with modern 256-bit SSL encryption and strict verification standards.",
    },
    {
      num: 2,
      title: "Variety of Sports Markets",
      desc: "Comprehensive market depth across cricket (IPL, ICC tournaments, Test matches), football, kabaddi, tennis, and global sports with real-time exchange liquidity.",
    },
    {
      num: 3,
      title: "Speedy Deposits & Withdrawals",
      desc: "Transactions are executed efficiently. Deposits reflect immediately, and withdrawals are processed via UPI and verified bank channels with zero arbitrary waiting.",
    },
    {
      num: 4,
      title: "Reliable 24/7 Customer Support",
      desc: "Dedicated help is always accessible. Reach out anytime via WhatsApp, Live Chat, Helpline, or Email for prompt and courteous resolution of all queries.",
    },
    {
      num: 5,
      title: "User Friendly & Responsive",
      desc: "Our platform and mobile app are engineered for smooth navigation, instant page loads, and intuitive betting slips, making it easy to place bets on the go.",
    },
    {
      num: 6,
      title: "Exclusive Promotions & Bonuses",
      desc: "Rewarding member loyalty with attractive welcome rewards, daily check-in perks, special tournament bonuses, and active referral incentives.",
    },
  ];

  return (
    <section id="why-rely" className="w-full bg-[#0a0b10] py-12 md:py-16 scroll-mt-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#12141c] p-6 shadow-2xl md:p-10">
          {/* Header Pill */}
          <div className="mb-4 text-center">
            <div className="inline-block rounded-2xl border border-amber-500/50 bg-[#181a24] px-8 py-3 shadow-lg shadow-amber-500/10">
              <h2 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                Why Thousands of Players Rely on All Panel Exch in India
              </h2>
            </div>
          </div>

          <p className="mx-auto mb-10 max-w-4xl text-center text-xs md:text-sm text-gray-300 leading-relaxed">
            All Panel Exch has established an enduring reputation as one of the most trusted names in sports exchange and online gaming in India. We prioritize fair play, robust privacy, and rapid settlements. Here is why thousands of active players trust our platform daily:
          </p>

          {/* 6 White Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item) => (
              <div
                key={item.num}
                className="rounded-2xl bg-white p-6 text-black shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#facc15] font-extrabold text-black text-lg shadow">
                    {item.num}
                  </div>
                  <h3 className="font-extrabold text-[#d97706] text-base md:text-lg leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
