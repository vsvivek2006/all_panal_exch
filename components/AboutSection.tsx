'use client';

import React from 'react';
import { SectionPromoCard } from './GraphicAssets';

interface AboutSectionProps {
  onOpenGetId?: () => void;
}

export default function AboutSection({ onOpenGetId }: AboutSectionProps) {
  return (
    <section id="about" className="w-full bg-[#1b1e2b] py-12 md:py-16 scroll-mt-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#12141c] p-6 shadow-2xl md:p-10">
          {/* Header Pill */}
          <div className="mb-8 rounded-2xl border border-amber-500/40 bg-[#181a24] py-3.5 px-6 text-center shadow-lg shadow-amber-500/10">
            <h2 className="text-lg font-extrabold tracking-tight text-white md:text-2xl">
              Official All Panel Exch — Your Cricket ID Provider
            </h2>
          </div>

          {/* 12-Column Grid */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left Content */}
            <div className="space-y-4 lg:col-span-6 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                <strong className="text-amber-400 font-bold">All Panel Exch</strong> was established with a singular, focused vision — to give sports enthusiasts in India a transparent, secure, and hassle-free online gaming and exchange platform. What began as a dedicated cricket exchange has grown into a verified destination for thousands of active players.
              </p>
              <p>
                Today, All Panel Exch offers comprehensive live odds on <strong className="text-white font-bold">cricket, football, tennis, live casino games, slots, matka, and kabaddi</strong>. Players benefit from deep liquidity, competitive market odds, and rapid settlements.
              </p>
              <p>
                The platform is widely recognized for its <strong className="text-amber-400 font-bold">24/7 customer support</strong>, helping users round the clock whether it&apos;s about account setup, ID verification, or platform navigation.
              </p>
              <p>
                Through sustained focus on <strong className="text-white font-bold">fairness, security, and high reliability</strong>, All Panel Exch has built an enduring standard in online gaming and sports exchange solutions.
              </p>

              {/* Gradient Border Button */}
              <div className="pt-3">
                <div className="inline-block rounded-2xl bg-gradient-to-r from-purple-500 via-amber-400 to-emerald-400 p-[2px] shadow-[0_0_25px_rgba(245,158,11,0.3)] transition hover:scale-105">
                  <button
                    onClick={onOpenGetId}
                    className="block rounded-[14px] bg-[#12141c] px-8 py-3 text-base font-extrabold text-white transition hover:bg-black active:scale-95"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>

            {/* Right Promo Card */}
            <div className="lg:col-span-6">
              <SectionPromoCard
                title="ALL PANEL EXCH"
                subtitle="ALL PANEL EXCH — INDIA'S TRUSTED ONLINE GAMING & CRICKET EXCHANGE"
                bulletItems={[
                  "SPORTS & CASINO",
                  "FAST DEPOSITS",
                  "SECURE PAYMENTS",
                  "24/7 CUSTOMER SUPPORT",
                ]}
                footerTags={["🎰 Live Casino", "🎲 3D Slots", "🏏 Cricket ID"]}
                badgeText="www.allpaanelexch.org"
                watermark="ALL PANEL"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
