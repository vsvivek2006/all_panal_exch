'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ShieldCheck, Zap, Phone, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onOpenGetId: () => void;
}

export default function Navbar({ onOpenGetId }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSportsDropdownOpen, setIsSportsDropdownOpen] = useState(false);
  const [isProvidersDropdownOpen, setIsProvidersDropdownOpen] = useState(false);

  // Close menus on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sportsItems = [
    { name: 'Cricket Exchange', href: '#trending-games', desc: 'IPL, T20 & World Cup Live Odds' },
    { name: 'Football Leagues', href: '#trending-games', desc: 'Premier League, LaLiga & Champions League' },
    { name: 'Tennis Open', href: '#trending-games', desc: 'Grand Slams & ATP Tournaments' },
    { name: 'Horse Racing', href: '#trending-games', desc: 'Instant settlement race cards' },
    { name: 'Live Casino & Cards', href: '#services', desc: 'Roulette, Teen Patti & Blackjack' },
  ];

  const providerItems = [
    { name: 'All Panel Premium', href: '#get-id-section', desc: 'Direct fast ID generation' },
    { name: 'LaserBook ID', href: '#get-id-section', desc: 'High limits & instant settlement' },
    { name: 'Lotus Exchange', href: '#get-id-section', desc: 'Live multi-market exchanges' },
    { name: 'SkyExchange', href: '#get-id-section', desc: '24/7 global sportsbook access' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1f2230] bg-[#000000] py-2.5 sm:py-3 shadow-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 text-decoration-none shrink-0 group">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-600 flex items-center justify-center font-black text-black text-lg sm:text-xl shadow-lg group-hover:scale-105 transition-transform">
            AP
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-xl tracking-tight text-white flex items-center gap-1.5 leading-tight">
              ALL PANEL <span className="text-[#facc15]">EXCH</span>
            </span>
            <span className="text-[9px] sm:text-[10px] text-amber-400/80 font-bold tracking-widest uppercase">
              Official Sports Exchange
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center text-sm xl:text-base font-extrabold text-[#facc15] lg:flex whitespace-nowrap">
          <Link href="/" className="px-2 py-1.5 transition hover:text-amber-200">
            Home
          </Link>
          <span className="text-gray-400 font-normal mx-1 opacity-70">|</span>

          {/* Sports Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsSportsDropdownOpen(true)}
            onMouseLeave={() => setIsSportsDropdownOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 px-2 py-1.5 text-[#facc15] font-extrabold transition hover:text-amber-200"
              onClick={() => setIsSportsDropdownOpen(!isSportsDropdownOpen)}
              aria-expanded={isSportsDropdownOpen}
            >
              <span>Sports Market</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isSportsDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isSportsDropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-[#12141c] border border-amber-500/30 rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl z-50">
                {sportsItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsSportsDropdownOpen(false)}
                    className="block p-2.5 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <div className="font-bold text-xs text-white hover:text-amber-300">
                      {item.name}
                    </div>
                    <div className="text-[11px] text-gray-400">
                      {item.desc}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <span className="text-gray-400 font-normal mx-1 opacity-70">|</span>

          {/* ID Providers Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsProvidersDropdownOpen(true)}
            onMouseLeave={() => setIsProvidersDropdownOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 px-2 py-1.5 text-[#facc15] font-extrabold transition hover:text-amber-200"
              onClick={() => setIsProvidersDropdownOpen(!isProvidersDropdownOpen)}
              aria-expanded={isProvidersDropdownOpen}
            >
              <span>ID Providers</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isProvidersDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isProvidersDropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-[#12141c] border border-amber-500/30 rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl z-50">
                {providerItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsProvidersDropdownOpen(false)}
                    className="block p-2.5 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <div className="font-bold text-xs text-white hover:text-amber-300">
                      {item.name}
                    </div>
                    <div className="text-[11px] text-gray-400">
                      {item.desc}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <span className="text-gray-400 font-normal mx-1 opacity-70">|</span>

          <Link href="#get-id-section" className="px-2 py-1.5 transition hover:text-amber-200">
            All Panel ID
          </Link>
          <span className="text-gray-400 font-normal mx-1 opacity-70">|</span>

          <Link href="#about" className="px-2 py-1.5 transition hover:text-amber-200">
            About Us
          </Link>
          <span className="text-gray-400 font-normal mx-1 opacity-70">|</span>

          <Link href="#customer-care" className="px-2 py-1.5 transition hover:text-amber-200">
            Contact
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            onClick={onOpenGetId}
            className="rounded-xl bg-[#facc15] px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-extrabold text-black whitespace-nowrap shadow-lg transition hover:bg-[#eab308] active:scale-95"
          >
            Login
          </button>
          <button
            onClick={onOpenGetId}
            className="rounded-xl bg-[#facc15] px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-extrabold text-black whitespace-nowrap shadow-lg transition hover:bg-[#eab308] active:scale-95"
          >
            Get ID
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-xl border border-white/10 bg-[#181a24] p-2 text-amber-400 lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#1f2230] bg-[#0c0d12] px-4 py-6 shadow-2xl animate-fade-in">
          <div className="flex flex-col space-y-3 font-bold text-sm text-[#facc15]">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-white/5 transition"
            >
              Home
            </Link>
            <Link
              href="#trending-games"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-white/5 transition"
            >
              Sports &amp; Cricket Markets
            </Link>
            <Link
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-white/5 transition"
            >
              Services &amp; Games
            </Link>
            <Link
              href="#get-id-section"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-white/5 transition"
            >
              All Panel ID Gateway
            </Link>
            <Link
              href="#download-app"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-white/5 transition"
            >
              Download Mobile App
            </Link>
            <Link
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-white/5 transition"
            >
              About Us
            </Link>
            <Link
              href="#customer-care"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-white/5 transition"
            >
              24/7 Support &amp; Contact
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenGetId();
              }}
              className="w-full py-3 rounded-xl bg-[#facc15] font-extrabold text-sm text-black shadow-lg text-center"
            >
              Get Your All Panel ID
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenGetId();
              }}
              className="w-full py-3 rounded-xl border border-white/20 bg-[#18181b] font-bold text-sm text-white text-center"
            >
              Login to Dashboard
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
