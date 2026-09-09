'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { VerificationProofBanner } from './GraphicAssets';

export default function TestimonialsSection() {
  const reviews = [
    {
      quote: "Cricket bets are easily fluid on here. The odds refresh quickly and my withdrawals go from All Panel to UPI in a matter of minutes. Customer service resolved my queries promptly.",
      name: "Ankit",
      location: "Mumbai",
    },
    {
      quote: "I came on board during IPL and have stayed because of the live markets. The app is light, deposits refresh instantly, and staff helped verify my ID in one attempt.",
      name: "Sarah",
      location: "Chennai",
    },
    {
      quote: "Good for quick play. I move back and forth between cricket and poker, and the wallet syncs well. Payouts via UPI were verified smoothly by support.",
      name: "Tripati",
      location: "Shillong",
    },
    {
      quote: "There are clear steps, betting slips track well, and odds updates have zero lag. I particularly like the in-play markets for international T20 matches.",
      name: "Gurkeerat",
      location: "Manali",
    },
    {
      quote: "The referral program helped me ride the momentum. I introduced two friends, both got welcome credits, and we all enjoyed live sports exchanges seamlessly.",
      name: "Ranku",
      location: "Maweli",
    },
    {
      quote: "Top-tier liquidity on cricket matches and rapid UPI withdrawals. The dedicated WhatsApp care team makes All Panel my trusted go-to exchange.",
      name: "Vikram",
      location: "Delhi",
    },
  ];

  return (
    <section id="testimonials" className="w-full bg-[#0a0b10] py-12 md:py-16 scroll-mt-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#12141c] p-6 shadow-2xl md:p-10">
          {/* Header Pill */}
          <div className="mb-8 text-center">
            <div className="inline-block rounded-2xl border border-amber-500/50 bg-[#181a24] px-8 py-3 shadow-lg shadow-amber-500/10">
              <h2 className="text-lg font-extrabold tracking-tight text-white md:text-xl font-sans">
                All Panel Exch Users Success Stories and Testimonials
              </h2>
            </div>
          </div>

          {/* Verification Proof Banner */}
          <VerificationProofBanner />

          {/* 6 Reviews Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-amber-500/30 bg-[#0c0d12] p-5 shadow-lg"
              >
                <p className="mb-4 text-xs italic text-gray-300 leading-relaxed">
                  &ldquo;{rev.quote}&rdquo;
                </p>

                <div className="flex items-center justify-between border-t border-white/10 pt-3">
                  <div>
                    <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                    <p className="text-[11px] text-gray-400">{rev.location}</p>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        className="w-3.5 h-3.5 fill-[#facc15] text-[#facc15]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
