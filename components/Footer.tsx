'use client';

import React from 'react';
import Link from 'next/link';

interface FooterProps {
  onOpenGetId?: () => void;
}

export default function Footer({ onOpenGetId }: FooterProps) {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#080808] text-gray-400 font-sans">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand Info */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2.5 text-decoration-none group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-600 flex items-center justify-center font-black text-black text-lg shadow-md group-hover:scale-105 transition-transform">
                AP
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-white flex items-center gap-1">
                  ALL PANEL <span className="text-[#facc15]">EXCH</span>
                </span>
                <span className="text-[9px] text-amber-400/80 font-bold tracking-widest uppercase">
                  Official Sports Exchange
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mt-3">
              India&apos;s trusted online gaming and sports exchange platform. Secure ID generation, fast payouts, and 24/7 available customer support.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-[#facc15] text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-[#facc15] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#trending-games" className="hover:text-[#facc15] transition-colors">
                  Sports Market
                </Link>
              </li>
              <li>
                <button
                  onClick={onOpenGetId}
                  className="hover:text-[#facc15] transition-colors text-left"
                >
                  Get ID
                </button>
              </li>
              <li>
                <Link href="#blogs" className="hover:text-[#facc15] transition-colors">
                  Blog &amp; Insights
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#facc15] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Sports Verticals */}
          <div>
            <h4 className="mb-4 font-semibold text-[#facc15] text-sm uppercase tracking-wider">
              Sports
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#trending-games" className="hover:text-[#facc15] transition-colors">
                  Cricket Exchange
                </Link>
              </li>
              <li>
                <Link href="#trending-games" className="hover:text-[#facc15] transition-colors">
                  Football Leagues
                </Link>
              </li>
              <li>
                <Link href="#trending-games" className="hover:text-[#facc15] transition-colors">
                  Tennis Open
                </Link>
              </li>
              <li>
                <Link href="#trending-games" className="hover:text-[#facc15] transition-colors">
                  Horse Racing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#facc15] transition-colors">
                  Indian Card Games
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#facc15] transition-colors">
                  Live Casino Tables
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Support & Contacts */}
          <div>
            <h4 className="mb-4 font-semibold text-[#facc15] text-sm uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                24/7 Available
              </li>
              <li>
                <a
                  href="https://wa.me/919999999999?text=Hello%20All%20Panel%20Exch,%20I%20need%20assistance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#facc15] transition-colors"
                >
                  WhatsApp Support
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@allpaanelexch.org"
                  className="hover:text-[#facc15] transition-colors"
                >
                  Email: support@allpaanelexch.org
                </a>
              </li>
              <li>
                <Link href="#customer-care" className="hover:text-[#facc15] transition-colors">
                  Helpline Desk
                </Link>
              </li>
              <li>
                <a
                  href="https://t.me/allpanelexchofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#facc15] transition-colors"
                >
                  Official Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-xs text-gray-500">
          <p className="mb-2 max-w-3xl mx-auto leading-relaxed">
            Online betting regulations may differ across Indian states. Users should check and follow the laws applicable in their jurisdiction before registering. All Panel Exch promotes lawful, responsible entertainment.
          </p>
          <p>© 2026 All Panel Exch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
