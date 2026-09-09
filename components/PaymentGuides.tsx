'use client';

import React from 'react';

interface PaymentGuidesProps {
  onOpenGetId?: () => void;
}

export default function PaymentGuides({ onOpenGetId }: PaymentGuidesProps) {
  return (
    <section id="deposit-guide" className="w-full bg-[#0a0b10] py-12 md:py-16 scroll-mt-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#12141c] p-6 shadow-2xl md:p-10">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Column: Easy Deposit Options */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-amber-500/40 bg-[#181a24] py-3.5 px-6 text-center shadow-lg shadow-amber-500/10">
                <h2 className="text-lg font-extrabold tracking-tight text-white md:text-xl font-sans">
                  Easy Deposit Options
                </h2>
              </div>

              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                Deposits are processed swiftly and securely. Fund your All Panel account using UPI, Paytm, PhonePe, direct bank transfer, or crypto to begin playing immediately. In most cases credits reflect within moments, supported by 24/7 customer care.
              </p>

              <div className="rounded-2xl border border-amber-500/30 bg-[#0c0d12] p-6 shadow-lg">
                <div className="mb-4 text-center">
                  <div className="inline-block rounded-xl border border-amber-500/40 bg-[#181a24] px-6 py-2">
                    <h3 className="text-sm md:text-base font-extrabold text-white">
                      A Step by Step Process for Deposits
                    </h3>
                  </div>
                </div>

                <p className="mb-4 text-xs text-gray-300 leading-relaxed">
                  First, <strong>log in to your account and navigate to Wallet</strong>. Then, <strong>choose your preferred channel — UPI, Paytm, Bank Transfer, or Crypto</strong>. Next, <strong>enter your amount and follow the prompt:</strong>
                </p>

                <ul className="mb-4 space-y-2 text-xs text-gray-300 leading-relaxed">
                  <li>• <strong>UPI:</strong> Approve the collect prompt in GPay, PhonePe, or BHIM.</li>
                  <li>• <strong>Paytm / Wallets:</strong> Confirm the transfer in your wallet and return to the dashboard.</li>
                  <li>• <strong>Bank Transfer:</strong> Send via IMPS/NEFT using official account details and save the reference UTR.</li>
                  <li>• <strong>Crypto:</strong> Send exact network amount to the verified deposit address.</li>
                </ul>

                <p className="text-xs text-gray-300 leading-relaxed">
                  Credits reflect near-instantly via verified gateways. Always use <strong>official dashboard links</strong> and verify details before confirming transactions.
                </p>
              </div>
            </div>

            {/* Right Column: Fast Withdrawals */}
            <div id="withdrawals" className="space-y-6 scroll-mt-24">
              <div className="rounded-2xl border border-amber-500/40 bg-[#181a24] py-3.5 px-6 text-center shadow-lg shadow-amber-500/10">
                <h2 className="text-lg font-extrabold tracking-tight text-white md:text-xl font-sans">
                  Fast Withdrawals with All Panel Exch
                </h2>
              </div>

              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                Withdrawals are engineered to be clear, transparent, and prompt—releasing winnings directly to your verified bank account or UPI ID with zero artificial delays.
              </p>

              <div className="rounded-2xl border border-amber-500/30 bg-[#0c0d12] p-6 shadow-lg">
                <div className="mb-4 text-center">
                  <div className="inline-block rounded-xl border border-amber-500/40 bg-[#181a24] px-6 py-2">
                    <h3 className="text-sm md:text-base font-extrabold text-white">
                      Step by Step Withdrawal Process
                    </h3>
                  </div>
                </div>

                <p className="mb-3 text-xs font-semibold text-amber-400">
                  Open Account Dashboard → Withdraw.
                </p>

                <ul className="space-y-2 text-xs text-gray-300 leading-relaxed">
                  <li>• Select your preferred settlement mode (UPI or Direct Bank Transfer).</li>
                  <li>• Enter the amount within platform parameters.</li>
                  <li>• Verify recipient account information (UPI ID or Bank Account &amp; IFSC).</li>
                  <li>• Submit request and keep reference ID for quick tracking.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-amber-500/30 bg-[#0c0d12] p-6 shadow-lg">
                <div className="mb-4 text-center">
                  <div className="inline-block rounded-xl border border-amber-500/40 bg-[#181a24] px-6 py-2">
                    <h3 className="text-sm md:text-base font-extrabold text-white">
                      Get In Minutes Payouts
                    </h3>
                  </div>
                </div>

                <p className="mb-3 text-xs text-gray-300 leading-relaxed">
                  Payouts via UPI and instant wallets are typically processed within a few minutes once verified:
                </p>

                <ul className="space-y-2 text-xs text-gray-300 leading-relaxed">
                  <li>• Verified accounts receive expedited processing around the clock.</li>
                  <li>• Bank NEFT/RTGS transfers depend on standard banking clearance cycles.</li>
                  <li>• Dedicated 24/7 agents verify requests promptly to ensure uninterrupted service.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onOpenGetId}
              className="inline-block rounded-xl border-2 border-amber-400 bg-[#facc15] px-10 py-3 text-sm font-extrabold text-black shadow-lg transition hover:bg-[#eab308] active:scale-95"
            >
              Login Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
