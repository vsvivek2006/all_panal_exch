'use client';

import React from 'react';

interface IdGatewaySectionProps {
  onOpenGetId?: () => void;
}

export default function IdGatewaySection({ onOpenGetId }: IdGatewaySectionProps) {
  return (
    <section id="get-id-section" className="w-full bg-[#1b1e2b] py-12 md:py-16 scroll-mt-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#12141c] p-6 shadow-2xl md:p-10 text-center">
          {/* Header Badge 1 */}
          <div className="mb-4">
            <div className="inline-block rounded-2xl border border-amber-500/50 bg-[#181a24] px-8 py-3 shadow-lg shadow-amber-500/10">
              <h2 className="text-lg font-extrabold tracking-tight text-white md:text-xl font-sans">
                All Panel Exch ID – Your Gateway to the Platform
              </h2>
            </div>
          </div>

          {/* Header Badge 2 */}
          <div className="mb-8">
            <div className="inline-block rounded-2xl border border-amber-500/30 bg-[#181a24] px-6 py-2.5 shadow-md">
              <h3 className="text-sm font-bold tracking-wide text-white md:text-base">
                Get Your All Panel Exch ID – From India&apos;s Trusted Partner
              </h3>
            </div>
          </div>

          {/* Paragraphs */}
          <div className="mx-auto max-w-4xl space-y-4 text-xs md:text-sm text-gray-300 leading-relaxed">
            <p>
              Your <strong className="text-amber-400">All Panel ID</strong> is your unique account credential that unlocks full access to all All Panel Exch features. With a single ID, you can securely log in, navigate your <strong>personalized exchange dashboard</strong>, monitor live ball-by-ball markets, and operate seamlessly across the web and mobile app.
            </p>
            <p>
              Creating an <strong>All Panel Exch ID</strong> is straightforward and rapid. Once generated, your ID ensures encrypted access, keeping your account preferences and transaction records shielded. It is the cornerstone for enjoying all exchange services—from fast deposits and multi-sport betting to 24/7 dedicated customer assistance.
            </p>
            <p>
              Start today by generating your verified <strong>All Panel ID</strong> and experience a streamlined platform built for maximum convenience and reliability.
            </p>
          </div>

          {/* Button */}
          <div className="mt-8">
            <button
              onClick={onOpenGetId}
              className="inline-block rounded-xl border-2 border-amber-400 bg-[#facc15] px-10 py-3.5 text-sm font-extrabold text-black shadow-lg transition hover:bg-[#eab308] active:scale-95"
            >
              Get your All Panel ID
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
