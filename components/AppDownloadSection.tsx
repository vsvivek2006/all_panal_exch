'use client';

import React from 'react';
import { Download, Smartphone, Apple, Sparkles } from 'lucide-react';

interface AppDownloadSectionProps {
  onOpenGetId?: () => void;
}

export default function AppDownloadSection({ onOpenGetId }: AppDownloadSectionProps) {
  return (
    <section id="download-app" className="w-full bg-[#1b1e2b] py-12 md:py-16 scroll-mt-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-r from-[#1c1707] via-[#131317] to-[#0d0d10] p-8 shadow-2xl md:p-12">
          {/* Star Rating Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1 text-xs font-bold text-amber-400">
            ⭐⭐⭐⭐⭐ 4.8 Stars · 50K+ Active Installs
          </div>

          <h2 className="mb-2 text-3xl font-extrabold text-white md:text-4xl">
            Download the <span className="text-amber-400">All Panel Exch App</span>
          </h2>

          <p className="mb-6 text-base font-semibold text-amber-400">
            Claim Exclusive Welcome Rewards Instantly on App Download!
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Android Guide */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-2 mb-3">
                <Smartphone className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">Android Download Guide</h3>
              </div>
              <ul className="space-y-2 text-xs text-gray-300">
                <li>• Download the official APK directly from allpaanelexch.org</li>
                <li>• Go to Settings → Security → Enable &quot;Install from Unknown Sources&quot;</li>
                <li>• Tap downloaded APK to install, launch the app, and log in with your All Panel ID</li>
              </ul>
            </div>

            {/* iOS Guide */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-2 mb-3">
                <Apple className="w-5 h-5 text-gray-200" />
                <h3 className="text-lg font-bold text-white">iOS Download Guide</h3>
              </div>
              <ul className="space-y-2 text-xs text-gray-300">
                <li>• Open Safari browser and visit allpaanelexch.org</li>
                <li>• Tap the Share button and select &quot;Add to Home Screen&quot;</li>
                <li>• Launch the instant web app directly from your home screen and sign in</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={onOpenGetId}
              className="inline-flex items-center gap-2 rounded-xl bg-[#facc15] px-8 py-3.5 text-base font-bold text-black shadow-xl transition hover:bg-[#eab308] active:scale-95"
            >
              <Download className="w-5 h-5" />
              <span>Download All Panel App Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
