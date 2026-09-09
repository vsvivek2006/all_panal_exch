'use client';

import React from 'react';
import { SectionPromoCard } from './GraphicAssets';

interface ServicesShowcaseProps {
  onOpenGetId?: () => void;
}

export default function ServicesShowcase({ onOpenGetId }: ServicesShowcaseProps) {
  return (
    <section id="services" className="w-full bg-[#1b1e2b] py-12 md:py-16 scroll-mt-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#12141c] p-6 shadow-2xl md:p-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left Content */}
            <div className="space-y-5 lg:col-span-6">
              <div className="rounded-2xl border border-amber-500/40 bg-[#181a24] py-3.5 px-6 text-center shadow-lg shadow-amber-500/10">
                <h2 className="text-lg font-extrabold tracking-tight text-white md:text-xl font-sans">
                  All Panel Exch Services
                </h2>
              </div>

              <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-300">
                <p>
                  All Panel Exch is committed to making sports exchange and gaming <strong className="text-white font-bold">simple, secure, and intuitive</strong> for every Indian user. The platform provides direct access to diverse gaming verticals including <strong className="text-white font-bold">cricket, football, kabaddi, live casino, slots, and matka</strong>, all configured within a streamlined interface built for beginners and experienced players alike.
                </p>
                <p>
                  Beyond live sports odds, our platform emphasizes <strong className="text-amber-400 font-bold">verified payment integrations</strong> that enable instant deposits and prompt payouts, giving every member a frictionless experience. With <strong className="text-white font-bold">24/7 dedicated customer care</strong>, real human assistance is available at any time.
                </p>
                <p>
                  The <strong className="text-amber-400 font-bold">All Panel mobile app</strong> extends this convenience, allowing users to track real-time odds, manage account preferences, and place bets easily on mobile devices with high stability and speed.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenGetId}
                  className="inline-block rounded-xl border-2 border-amber-400 bg-[#facc15] px-8 py-3.5 text-sm font-extrabold text-black shadow-lg transition hover:bg-[#eab308] active:scale-95"
                >
                  Our Services
                </button>
              </div>
            </div>

            {/* Right Promo Card */}
            <div className="lg:col-span-6">
              <SectionPromoCard
                title="ALL PANEL EXCH"
                subtitle="ALL PANEL EXCH SERVICES & EXCHANGE ECOSYSTEM"
                bulletItems={[
                  "ONLINE SPORTS EXCHANGE",
                  "CRICKET IN-PLAY MARKETS",
                  "LIVE CASINO GAMING",
                  "24/7 VERIFIED SETTLEMENTS",
                ]}
                footerTags={["🎲 3D Dice", "🎰 Live Tables", "🃏 VIP Poker"]}
                badgeText="www.allpaanelexch.org"
                watermark="SERVICES"
                imageSrc="/images/promo-services.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
