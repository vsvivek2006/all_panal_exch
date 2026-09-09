'use client';

import React from 'react';

export default function SecuritySafetySection() {
  const cards = [
    {
      icon: "🔒",
      title: "Encrypted Transactions",
      desc: "Every deposit and withdrawal is processed through secure payment channels. Our infrastructure uses 256-bit SSL encryption to help protect your financial details and transactions.",
    },
    {
      icon: "✓",
      title: "Verified Agent Network",
      desc: "Every All Panel ID created through allpaanelexch.org is handled by our verified network. Our official support team helps users directly, eliminating unauthorized third-party intermediaries.",
    },
    {
      icon: "⚖️",
      title: "Transparent Odds & Fair Play",
      desc: "We prioritize absolute transparency with clear exchange odds, real-time market data, and prompt settlements without hidden fees or unclear terms.",
    },
    {
      icon: "🛡️",
      title: "Responsible Gaming Commitment",
      desc: "All Panel Exch promotes responsible gaming practices. Set personal limits, play within your budget, and take breaks. Support is available anytime for account restrictions.",
    },
  ];

  return (
    <section id="security-safety" className="w-full bg-[#1b1e2b] py-12 md:py-16 scroll-mt-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white p-8 md:p-12 text-black shadow-2xl">
          {/* Section Header */}
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-black md:text-3xl font-sans">
              Is All Panel Exch Safe? Your Security Is Our Priority
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs md:text-sm text-gray-700 leading-relaxed">
              This is the question every new user asks, and it deserves a clear, direct answer. At <strong className="text-amber-600 font-bold">allpaanelexch.org</strong>, we focus on providing a secure, transparent, and reliable experience for every user.
            </p>
          </div>

          {/* 4 Feature Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
            {cards.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center rounded-2xl bg-gray-50 border border-gray-100 p-6 text-center shadow-md transition hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-white text-xl shadow">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-sm md:text-base font-extrabold text-black">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Important Notice Alert Box */}
          <div className="mt-8 rounded-r-2xl border-l-4 border-amber-600 bg-amber-50/80 p-5 text-left">
            <h4 className="mb-1 text-sm font-extrabold text-amber-900">Important Notice</h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Online betting regulations may differ across Indian states. Users should check and follow the laws applicable in their location before registering. All Panel Exch encourages everyone to follow responsible and lawful practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
