'use client';

import React from 'react';
import Link from 'next/link';

export default function TableOfContents() {
  const leftLinks = [
    { title: "Welcome to All Panel Exch — Secure ID & Dashboard Access", href: "#top" },
    { title: "What is All Panel Exch? How does it work?", href: "#how-it-works" },
    { title: "Why Thousands of Players Rely on All Panel Exch in India", href: "#why-rely" },
    { title: "All Panel Exch Services", href: "#services" },
    { title: "All Panel Exch Betting Options & Markets", href: "#marketplace" },
    { title: "Features of the All Panel Exch", href: "#features" },
    { title: "All Panel Exch Quick-Login & Sign-Up Tutorial", href: "#login-tutorial" },
    { title: "Download the All Panel Exch App", href: "#download-app" },
    { title: "Features of the App (Android/iOS)", href: "#download-app" },
    { title: "Top Trending Games on All Panel Exch", href: "#trending-games" },
  ];

  const rightLinks = [
    { title: "Easy Deposit Options", href: "#deposit-guide" },
    { title: "Fast Withdrawals with All Panel Exch", href: "#withdrawals" },
    { title: "Why All Panel Exch is India's Leading Platform", href: "#why-leading" },
    { title: "All Panel Exch Customer Care - 24/7 Support", href: "#customer-care" },
    { title: "All Panel Exch ID – Your Gateway to the Platform", href: "#get-id-section" },
    { title: "Cricket News, Tips, and Platform Insights", href: "#blogs" },
    { title: "All Panel Exch Bonus Structure", href: "#bonus" },
    { title: "Success Stories and Testimonials", href: "#testimonials" },
    { title: "FAQs: All Panel Exch", href: "#faqs" },
    { title: "Security, Safety & Responsible Play", href: "#security-safety" },
  ];

  return (
    <section className="w-full bg-[#0a0b10] py-12 md:py-16 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#12141c] p-6 shadow-2xl md:p-10">
          <div className="mb-8 text-center">
            <div className="inline-block rounded-2xl border border-amber-500/50 bg-[#181a24] px-8 py-3 shadow-lg shadow-amber-500/10">
              <h2 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                Table Of Content
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Left Column Links */}
            <div className="space-y-3">
              {leftLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="flex items-center gap-3 text-xs md:text-sm font-semibold text-gray-200 transition hover:text-amber-400 group"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400 text-[10px] font-black text-black group-hover:scale-110 transition-transform">
                    ❯
                  </span>
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>

            {/* Right Column Links */}
            <div className="space-y-3">
              {rightLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="flex items-center gap-3 text-xs md:text-sm font-semibold text-gray-200 transition hover:text-amber-400 group"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400 text-[10px] font-black text-black group-hover:scale-110 transition-transform">
                    ❯
                  </span>
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
