'use client';

import React from 'react';
import { SectionPromoCard } from './GraphicAssets';

interface HowItWorksSectionProps {
  onOpenGetId?: () => void;
}

export default function HowItWorksSection({ onOpenGetId }: HowItWorksSectionProps) {
  return (
    <section id="how-it-works" className="w-full bg-[#1b1e2b] py-12 md:py-16 scroll-mt-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#12141c] p-6 shadow-2xl md:p-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left Promo Card */}
            <div className="lg:col-span-6">
              <SectionPromoCard
                title="ALL PANEL EXCH"
                subtitle="WHAT IS ALL PANEL EXCH & HOW DOES IT WORK?"
                bulletItems={[
                  "LIVE CRICKET EXCHANGE",
                  "MULTI-SPORTS MARKETS",
                  "INSTANT ACCOUNT ID",
                  "24/7 DEDICATED SUPPORT",
                ]}
                footerTags={["🎰 Live Casino", "🎲 3D Slots", "🏏 Cricket ID"]}
                badgeText="www.allpaanelexch.org"
                watermark="HOW IT WORKS"
                imageSrc="/images/promo-whatis.jpg"
              />
            </div>

            {/* Right Text Description */}
            <div className="space-y-5 lg:col-span-6">
              <div className="rounded-2xl border border-amber-500/40 bg-[#181a24] py-3.5 px-6 text-center shadow-lg shadow-amber-500/10">
                <h2 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                  What is All Panel Exch? How does it work?
                </h2>
              </div>

              <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-300">
                <p>
                  <strong className="text-amber-400 font-bold">All Panel Exch</strong> is a leading online sports exchange platform in India where players can seamlessly place live bets on their favorite sports and games. From <strong className="text-white font-bold">cricket and football to live casino, roulette, slots, and kabaddi</strong>, every market is engineered for speed, fairness, and safety.
                </p>
                <p>
                  Getting started is straightforward: <strong className="text-white font-bold">register, deposit securely, and access your dashboard</strong>. Each player is issued a dedicated, encrypted <strong className="text-amber-400 font-bold">All Panel ID</strong> to manage bets, view real-time market odds, and track transactions with total transparency.
                </p>
                <p>
                  For enhanced flexibility, the <strong className="text-amber-400 font-bold">All Panel mobile app</strong> mirrors all web features, enabling real-time play anytime, anywhere with low latency and prompt updates.
                </p>
              </div>

              <div className="pt-2">
                <div className="inline-block rounded-2xl bg-gradient-to-r from-purple-500 via-amber-400 to-cyan-400 p-[2px] shadow-[0_0_25px_rgba(245,158,11,0.3)] transition hover:scale-105">
                  <button
                    onClick={onOpenGetId}
                    className="block rounded-[14px] bg-[#12141c] px-8 py-3 text-sm font-extrabold text-white transition hover:bg-black active:scale-95"
                  >
                    Learn About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
