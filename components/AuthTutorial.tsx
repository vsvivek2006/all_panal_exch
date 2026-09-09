'use client';

import React from 'react';

export default function AuthTutorial() {
  return (
    <section id="login-tutorial" className="w-full bg-[#0a0b10] py-12 md:py-16 scroll-mt-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2">
        {/* Sign Up Card */}
        <div className="rounded-3xl border border-white/10 bg-[#131317] p-8 shadow-xl">
          <h3 className="mb-4 text-2xl font-bold text-white">Sign Up As a New User</h3>
          <ol className="space-y-3 text-sm text-gray-300">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-black">
                1
              </span>
              <span>
                Visit the official site <strong className="text-amber-400">All Panel Exch</strong>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-black">
                2
              </span>
              <span>
                Register your details and create your verified All Panel ID.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-black">
                3
              </span>
              <span>
                Follow simple verification steps, access your dashboard, and start exploring live markets.
              </span>
            </li>
          </ol>
        </div>

        {/* Easy Login Card */}
        <div className="rounded-3xl border border-white/10 bg-[#131317] p-8 shadow-xl">
          <h3 className="mb-4 text-2xl font-bold text-white">Easy Login</h3>
          <ol className="space-y-3 text-sm text-gray-300">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-black">
                1
              </span>
              <span>
                Enter your verified Login ID and password on the member login prompt.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-black">
                2
              </span>
              <span>
                Instantly access your account wallet, track match odds, and manage bets without delay.
              </span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
