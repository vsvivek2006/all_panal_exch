'use client';

import React from 'react';
import { ShieldCheck, Trophy, Sparkles, Award, Star, Flame, Zap } from 'lucide-react';

/**
 * 3D Golden Shield & Emblem used in Hero right column
 */
export function HeroOrbitalShield() {
  return (
    <div className="relative flex items-center justify-center py-6 w-full">
      {/* Outer Orbit 1 */}
      <div className="absolute h-[340px] w-[340px] sm:h-[400px] sm:w-[400px] rounded-full border border-amber-500/30 border-t-amber-400 border-r-amber-500/10 shadow-[0_0_30px_rgba(245,158,11,0.2)]" />
      {/* Outer Orbit 2 */}
      <div className="absolute h-[380px] w-[380px] sm:h-[440px] sm:w-[440px] rounded-full border border-yellow-500/20 border-b-yellow-400 border-l-yellow-500/10" />
      {/* Deep Ambient Glow */}
      <div className="absolute h-[280px] w-[280px] rounded-full bg-amber-500/20 blur-3xl pointer-events-none" />

      {/* Center 3D Shield Graphic */}
      <div className="relative h-[310px] w-[310px] sm:h-[370px] sm:w-[370px] overflow-hidden rounded-full border-2 border-amber-500/50 shadow-[0_0_60px_rgba(245,158,11,0.4)] backdrop-blur-md bg-black group">
        <img
          src="/images/hero-shield.jpg"
          alt="3D Golden Shield Security"
          className="h-full w-full object-cover scale-105 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
      </div>
    </div>
  );
}

/**
 * Reusable Promo Card Graphic used across About, Services, Why Leading, Support
 */
export function SectionPromoCard({
  title = "ALL PANEL EXCH",
  subtitle = "INDIA'S TRUSTED ONLINE BETTING & CRICKET EXCHANGE",
  bulletItems = [
    "SPORTS & CASINO",
    "FAST DEPOSITS",
    "SECURE PAYMENTS",
    "24/7 CUSTOMER SUPPORT",
  ],
  footerTags = ["🎰 Live Casino", "🎲 3D Slots", "🏏 Cricket ID"],
  badgeText = "www.allpaanelexch.org",
  watermark = "ALL PANEL",
  imageSrc = "/images/promo-official.jpg",
}: {
  title?: string;
  subtitle?: string;
  bulletItems?: string[];
  footerTags?: string[];
  badgeText?: string;
  watermark?: string;
  imageSrc?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border-2 border-amber-500/50 bg-[#12141c] p-7 md:p-8 shadow-2xl shadow-amber-500/20 backdrop-blur-xl min-h-[370px] flex flex-col justify-between group">
      {/* Real Background Image from images collection */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
        />
      )}

      {/* Ambient Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#12141c]/90 via-[#12141c]/75 to-[#0c0d12]/95 pointer-events-none" />
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-8xl font-black text-white/[0.04] select-none pointer-events-none whitespace-nowrap rotate-[-12deg]">
        {watermark}
      </div>

      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <span className="text-2xl font-black tracking-widest text-amber-400 drop-shadow-md">
              {title}
            </span>
            <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-0.5">
              ESTABLISHED PLATFORM • OFFICIAL
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow">
            <Trophy className="w-5 h-5" />
          </div>
        </div>

        <h3 className="mb-6 text-lg font-extrabold tracking-tight text-white md:text-xl leading-snug">
          {subtitle}
        </h3>

        <ul className="mb-6 space-y-3 font-semibold text-xs text-gray-200 uppercase tracking-wide">
          {bulletItems.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-amber-400 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="inline-block rounded-xl bg-[#facc15] px-5 py-2 text-xs font-black text-black shadow-lg">
          {badgeText}
        </div>
      </div>

      {footerTags.length > 0 && (
        <div className="relative z-10 mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-bold text-gray-300">
          {footerTags.map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Visual Sports Thumbnail using real sports photography
 */
export function SportsCardThumbnail({
  sport,
  imageSrc,
  badge,
  icon,
}: {
  sport: string;
  imageSrc: string;
  badge: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="relative h-40 w-full max-w-[240px] overflow-hidden rounded-2xl border-2 border-amber-500/50 shadow-lg group">
      <img
        src={imageSrc}
        alt={sport}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-black/60 border border-amber-500/40 text-[10px] font-bold text-amber-300 uppercase tracking-wider backdrop-blur-sm">
        {badge}
      </div>
      <div className="absolute bottom-2.5 left-3 right-3 flex items-center gap-2">
        {icon && <span className="text-amber-400 shrink-0">{icon}</span>}
        <span className="font-bold text-xs text-white tracking-wide truncate">
          {sport}
        </span>
      </div>
    </div>
  );
}

/**
 * Proof Verification Banner for Testimonials
 */
export function VerificationProofBanner() {
  return (
    <div className="relative mb-10 overflow-hidden rounded-3xl border-2 border-amber-500/40 bg-[#0c0d12] shadow-2xl min-h-[300px] md:min-h-[380px] flex flex-col justify-end p-6 md:p-8 group">
      {/* Verified payment proof image */}
      <img
        src="/images/payment-proofs.jpg"
        alt="All Panel Exch Users Success Stories and WhatsApp Payment Proofs"
        className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.02]"
      />
      
      {/* Contrast gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

      {/* Floating Info Overlay */}
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold mb-2 backdrop-blur-md border border-emerald-500/40">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            100% Genuine &amp; Verified WhatsApp Settlements
          </div>
          <h3 className="text-lg md:text-xl font-extrabold text-white drop-shadow">
            Daily Live Payment Confirmations &amp; Real Player Satisfaction
          </h3>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="px-4 py-2.5 rounded-xl bg-black/80 border border-amber-500/30 text-center backdrop-blur-md">
            <div className="text-[11px] text-gray-400">Average Payout Time</div>
            <div className="text-base font-black text-amber-400">Under 5 Mins</div>
          </div>
          <div className="px-4 py-2.5 rounded-xl bg-black/80 border border-amber-500/30 text-center backdrop-blur-md">
            <div className="text-[11px] text-gray-400">Player Rating</div>
            <div className="text-base font-black text-amber-400 flex items-center justify-center gap-1">
              4.9 <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
