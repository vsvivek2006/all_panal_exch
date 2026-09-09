'use client';

import React from 'react';
import { SectionPromoCard } from './GraphicAssets';

interface WhyLeadingPlatformProps {
  onOpenGetId?: () => void;
}

export default function WhyLeadingPlatform({ onOpenGetId }: WhyLeadingPlatformProps) {
  return (
    <section id="why-leading" className="w-full bg-[#1b1e2b] py-12 md:py-16 scroll-mt-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#12141c] p-6 shadow-2xl md:p-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left Content */}
            <div className="space-y-5 lg:col-span-6">
              <div className="rounded-2xl border border-amber-500/40 bg-[#181a24] py-3.5 px-6 text-center shadow-lg shadow-amber-500/10">
                <h2 className="text-lg font-extrabold tracking-tight text-white md:text-xl font-sans">
                  Why All Panel Exch is India&apos;s Leading Platform
                </h2>
              </div>

              <div className="space-y-4 text-xs md:text-sm leading-relaxed text-gray-300">
                <p>
                  All Panel Exch has established a singular value proposition: delivering genuine sports exchange lovers exactly what they expect—live odds, transparent settlements, and rapid payouts day or night!
                </p>
                <p>
                  Compared to traditional platforms, All Panel Exch offers streamlined ID generation, simpler navigation, and dependable account verification:
                </p>

                <ul className="space-y-3 text-xs text-gray-300 leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>
                      Core focus on <strong className="text-amber-400 font-bold">cricket betting exchanges</strong> with real-time markets for IPL, ICC events, and international leagues.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>
                      Prompt withdrawals with step-by-step guidance so earnings are processed without arbitrary delay.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>
                      Responsive 24/7 customer care available on WhatsApp, Live Chat, and Phone.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>
                      A loyal community where trust is forged through fair play, safe transactions, and reliable app performance.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Promo Card */}
            <div className="lg:col-span-6">
              <SectionPromoCard
                title="ALL PANEL EXCH"
                subtitle="WHY ALL PANEL EXCH IS INDIA'S #1 BETTING PLATFORM"
                bulletItems={[
                  "FAST CRICKET EXCHANGES",
                  "DIRECT UPI SETTLEMENTS",
                  "ROUND-THE-CLOCK CARE",
                  "HIGH LIQUIDITY MARKETS",
                ]}
                footerTags={["🎲 3D Dice", "🃏 Live Cards", "📱 Mobile App"]}
                badgeText="www.allpaanelexch.org"
                watermark="NO. 1"
                imageSrc="/images/promo-whatis.jpg"
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onOpenGetId}
              className="inline-block rounded-xl border-2 border-amber-400 bg-[#facc15] px-10 py-3 text-sm font-extrabold text-black shadow-lg transition hover:bg-[#eab308] active:scale-95"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
