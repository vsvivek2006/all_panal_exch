'use client';

import React from 'react';
import { SectionPromoCard } from './GraphicAssets';

interface SupportSectionProps {
  onOpenGetId?: () => void;
}

export default function SupportSection({ onOpenGetId }: SupportSectionProps) {
  return (
    <section id="customer-care" className="w-full bg-[#0a0b10] py-12 md:py-16 scroll-mt-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#12141c] p-6 shadow-2xl md:p-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left Promo Card */}
            <div className="lg:col-span-6">
              <SectionPromoCard
                title="ALL PANEL EXCH"
                subtitle="ALL PANEL EXCH CUSTOMER CARE — 24/7 DEDICATED SUPPORT"
                bulletItems={[
                  "FAST HUMAN RESPONSE",
                  "INSTANT ID ASSISTANCE",
                  "DIRECT TRANSACTION HELP",
                  "VERIFIED OFFICIAL CHANNELS",
                ]}
                footerTags={["🎧 Live Chat", "📞 Helpline", "💬 WhatsApp"]}
                badgeText="www.allpaanelexch.org"
                watermark="24/7 CARE"
                imageSrc="/images/promo-support.jpg"
              />
            </div>

            {/* Right Support Channels Info */}
            <div className="space-y-5 lg:col-span-6">
              <div className="rounded-2xl border border-amber-500/40 bg-[#181a24] py-3.5 px-6 text-center shadow-lg shadow-amber-500/10">
                <h2 className="text-lg font-extrabold tracking-tight text-white md:text-xl font-sans">
                  All Panel Exch Customer Care - 24/7 Support
                </h2>
              </div>

              <div className="space-y-4 text-xs md:text-sm leading-relaxed text-gray-300">
                <p>
                  All Panel Exch delivers <strong>round-the-clock customer care</strong> for all member queries, including <strong>ID creation, deposit tracking, withdrawal clearance, app setup, and login recovery</strong>. Support is swift, personalized, and step-by-step.
                </p>

                <p className="font-bold text-amber-400">
                  Official Support Channels:
                </p>

                <ul className="space-y-2.5 text-xs text-gray-300 leading-relaxed">
                  <li>
                    • <strong>Helpline:</strong> Speak to our customer desk for real-time verification or urgent transaction checks. Keep your All Panel ID ready.
                  </li>
                  <li>
                    • <strong>Live Chat:</strong> Instant web assistance for betting rules, market odd inquiries, and match updates.
                  </li>
                  <li>
                    • <strong>Email:</strong> Reach our formal support desk at <strong className="text-white">support@allpaanelexch.org</strong> for account reviews or documentation queries.
                  </li>
                  <li>
                    • <strong>WhatsApp &amp; Telegram:</strong> High-speed support on the go with screenshot assistance and fast message turnaround.
                  </li>
                </ul>

                <p className="text-xs text-gray-400">
                  Across every channel, our support team remains accessible, professional, and reliable.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onOpenGetId}
              className="inline-block rounded-xl border-2 border-amber-400 bg-[#facc15] px-10 py-3 text-sm font-extrabold text-black shadow-lg transition hover:bg-[#eab308] active:scale-95"
            >
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
