'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // first open by default like reference

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What Is All Panel Exch?",
      a: "All Panel Exch is a premier online sports betting exchange and live casino platform with deep liquidity in live cricket markets, instant settlement, and accessible mobile and web interfaces.",
    },
    {
      q: "How do I make an All Panel ID?",
      a: "Simply click on 'Get ID', connect with our 24/7 verified support agents via WhatsApp or complete the registration form, verify your details, and receive your encrypted All Panel ID in minutes.",
    },
    {
      q: "Is All Panel Exch secure & legal to use in India?",
      a: "All Panel Exch implements industry-standard 256-bit SSL encryption and strict data protection protocols. Online gaming and skill contest regulations vary by state across India; users should review and follow local jurisdictional guidelines before participating.",
    },
    {
      q: "How do I download the All Panel app?",
      a: "Visit allpaanelexch.org directly on your smartphone. For Android, download the verified APK and install it following the on-screen guide. For iOS users, access the web application via Safari by adding it to your Home Screen.",
    },
    {
      q: "Where can I place bets with All Panel Exch?",
      a: "You can place in-play exchange wagers on our secure web platform via desktop or mobile browser, or through the dedicated Android APK anywhere in India with an internet connection.",
    },
    {
      q: "Is there live cricket betting available on All Panel Exch?",
      a: "Yes! Cricket is our flagship vertical. We provide real-time in-play odds, ball-by-ball session lines, fancy markets, and match-winner odds on IPL, ICC World Cups, Test series, and international T20 leagues.",
    },
    {
      q: "What deposit options do I have?",
      a: "We support major instant Indian payment methods including UPI (Google Pay, PhonePe, Paytm, BHIM), IMPS/NEFT bank transfers, and select cryptocurrency options.",
    },
    {
      q: "How quickly are the withdrawals on All Panel Exch?",
      a: "Verified account withdrawals processed via UPI are typically credited within 5 to 15 minutes. Bank transfers are subject to standard interbank clearance times.",
    },
    {
      q: "Can I play live casino and card games on All Panel Exch?",
      a: "Yes, our gaming catalogue includes professional live dealer tables for Teen Patti, Andar Bahar, Roulette, Blackjack, Baccarat, and hundreds of themed slots.",
    },
    {
      q: "How many active users are on All Panel Exch?",
      a: "All Panel Exch serves thousands of verified active sports and casino enthusiasts nationwide, supported by our robust exchange infrastructure.",
    },
    {
      q: "Does All Panel Exch offer bonuses & promotions?",
      a: "Yes! New users can claim initial welcome rewards on their first deposit, as well as regular event check-in credits and generous referral bonuses.",
    },
    {
      q: "How can I contact the All Panel Exch support team?",
      a: "You can reach our dedicated support desk 24 hours a day, 7 days a week via WhatsApp, live chat, or email at support@allpaanelexch.org.",
    },
    {
      q: "Is there 24/7 live chat support available?",
      a: "Yes, our customer care team is available round-the-clock with real human agents to resolve your queries without waiting.",
    },
  ];

  return (
    <section id="faqs" className="w-full bg-[#0a0b10] py-12 md:py-16 scroll-mt-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#12141c] p-6 shadow-2xl md:p-10">
          {/* Header Pill */}
          <div className="mb-8 text-center">
            <div className="inline-block rounded-2xl border border-amber-500/50 bg-[#181a24] px-8 py-3 shadow-lg shadow-amber-500/10">
              <h2 className="text-lg font-extrabold tracking-tight text-white md:text-xl font-sans">
                FAQs: All Panel Exch
              </h2>
            </div>
          </div>

          {/* Accordion Items */}
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-amber-500/30 bg-[#0c0d12] overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between p-4 text-left font-extrabold text-white text-xs md:text-sm hover:bg-white/5 transition"
                  >
                    <span>» {faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 text-xs text-gray-300 border-t border-white/10 pt-3 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#customer-care"
              className="inline-block rounded-xl border-2 border-amber-400 bg-[#facc15] px-10 py-3 text-sm font-extrabold text-black shadow-lg transition hover:bg-[#eab308]"
            >
              More Faq&apos;s
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
