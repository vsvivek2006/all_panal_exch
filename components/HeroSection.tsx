'use client';

import React from 'react';
import { ShieldCheck, Zap, Headphones, Users, Lock, ArrowRight } from 'lucide-react';
import { HeroOrbitalShield } from './GraphicAssets';

interface HeroSectionProps {
  onOpenGetId: () => void;
}

export default function HeroSection({ onOpenGetId }: HeroSectionProps) {
  const trustFeatures = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Licensed & Secure",
      desc: "100% verified & fully encrypted platform",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Payouts",
      desc: "Fast withdrawals & hassle-free transactions",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Available",
      desc: "Round-the-clock support whenever you need us",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Active Community",
      desc: "Trusted by thousands of players nationwide",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#09090c] py-12 lg:py-20 font-sans">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[550px] w-[550px] rounded-full bg-amber-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-yellow-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Hero Content */}
          <div className="lg:col-span-7">
            {/* Pill Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-400 backdrop-blur-md md:text-sm">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>India&apos;s Most Trusted Sports Exchange Platform</span>
            </div>

            {/* Display Headline */}
            <h1 className="mb-6 font-sans text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.15]">
              Welcome to <span className="text-amber-400">All Panel Exch</span>:
              <br className="hidden sm:inline" /> Secure ID &amp; Official
              <br className="hidden sm:inline" /> Dashboard Access
            </h1>

            {/* Subtitle */}
            <p className="mb-8 max-w-xl font-sans text-base leading-relaxed text-gray-400 md:text-lg">
              India&apos;s premier cricket ID and sports exchange platform. Enjoy live odds on cricket, football, casino, slots, roulette, and blackjack with 24/7 support.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenGetId}
                className="flex items-center gap-2 rounded-xl bg-[#facc15] px-7 py-3.5 font-sans text-base font-bold text-black shadow-xl shadow-amber-500/20 transition hover:bg-[#eab308] hover:shadow-amber-500/30 active:scale-95"
              >
                <Lock className="w-4 h-4 stroke-[2.5]" />
                <span>Get Your All Panel ID Now</span>
              </button>

              <button
                onClick={onOpenGetId}
                className="flex items-center gap-2 rounded-xl border border-[#27272a] bg-[#18181b] px-7 py-3.5 font-sans text-base font-semibold text-white transition hover:border-amber-500/50 hover:bg-[#27272a] active:scale-95"
              >
                <ArrowRight className="w-4 h-4" />
                <span>Login to Dashboard</span>
              </button>
            </div>
          </div>

          {/* Right Hero Orbital 3D Shield */}
          <div className="lg:col-span-5">
            <HeroOrbitalShield />
          </div>
        </div>

        {/* 4 Trust Highlights Strip */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustFeatures.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 rounded-2xl border border-[#27272a] bg-[#131317]/80 p-5 backdrop-blur-md transition hover:border-amber-500/40"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
                {item.icon}
              </div>
              <div>
                <h3 className="font-sans text-base font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 font-sans text-xs text-gray-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
