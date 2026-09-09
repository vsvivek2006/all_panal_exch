'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Zap, ArrowRight, MessageCircle } from 'lucide-react';

interface GetIdModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GetIdModal({ isOpen, onClose }: GetIdModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Cricket Exchange ID',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello All Panel Exch Official, I want to create a new ${formData.category || 'Exchange ID'}. My name is ${formData.name || 'Player'}. Please provide verified ID and account access details.`
    );
    window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in font-sans">
      <div className="relative w-full max-w-lg bg-[#0F1622] border border-amber-500/30 rounded-3xl p-6 md:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full">
                Instant Verified Activation
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-2">
              Get Your Official <span className="text-amber-400">All Panel ID</span>
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Instant access to cricket exchanges, live dealer tables &amp; 24/7 account support.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  Full Name / Username
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#080B11] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  WhatsApp Mobile Number (+91)
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-[#080B11] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  ID Preference
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 bg-[#080B11] border border-gray-700 rounded-xl text-white focus:outline-none focus:border-amber-400 transition-colors text-sm"
                >
                  <option value="Cricket Exchange ID">Cricket &amp; Sports Exchange ID</option>
                  <option value="Live Casino ID">Live Dealer Casino &amp; Cards ID</option>
                  <option value="Slots & Matka ID">Slots &amp; Traditional Matka ID</option>
                  <option value="VIP Premium ID">VIP Premium Exchange ID</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-extrabold text-black bg-[#facc15] hover:bg-[#eab308] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-lg"
                >
                  <Zap className="w-4 h-4 fill-current" />
                  <span>Generate ID Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            <div className="mt-5 pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> 256-Bit SSL Protected
              </span>
              <span className="text-gray-400">Verified Official Platform</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Request Processed!</h3>
            <p className="text-gray-300 text-sm mb-6 max-w-sm mx-auto">
              Hi <span className="text-amber-400 font-semibold">{formData.name || 'Player'}</span>, your verification ticket has been generated. Connect with our official support agent to receive your login credentials immediately.
            </p>

            <button
              onClick={handleWhatsAppRedirect}
              className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 mb-3 shadow-lg"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Connect on WhatsApp Now</span>
            </button>

            <button
              onClick={() => {
                setStep('form');
                onClose();
              }}
              className="text-xs text-gray-400 hover:text-white underline transition-colors"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
