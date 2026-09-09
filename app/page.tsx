'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TableOfContents from '@/components/TableOfContents';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesShowcase from '@/components/ServicesShowcase';
import MarketplaceSection from '@/components/MarketplaceSection';
import TrendingGames from '@/components/TrendingGames';
import PlatformFeatures from '@/components/PlatformFeatures';
import AuthTutorial from '@/components/AuthTutorial';
import AppDownloadSection from '@/components/AppDownloadSection';
import PaymentGuides from '@/components/PaymentGuides';
import WhyLeadingPlatform from '@/components/WhyLeadingPlatform';
import SupportSection from '@/components/SupportSection';
import IdGatewaySection from '@/components/IdGatewaySection';
import BlogSection from '@/components/BlogSection';
import BonusStructure from '@/components/BonusStructure';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import SecuritySafetySection from '@/components/SecuritySafetySection';
import Footer from '@/components/Footer';
import GetIdModal from '@/components/GetIdModal';
import { MessageCircle, Zap } from 'lucide-react';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenGetId = () => {
    setIsModalOpen(true);
  };

  const handleCloseGetId = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="top" className="min-h-screen bg-[#09090c] text-white selection:bg-amber-500 selection:text-black font-sans">
      {/* 1. Sticky Navigation Header */}
      <Navbar onOpenGetId={handleOpenGetId} />

      <main className="flex-1 w-full">
        {/* 2. Hero Section */}
        <HeroSection onOpenGetId={handleOpenGetId} />

        {/* 3. Official Book / About Section */}
        <AboutSection onOpenGetId={handleOpenGetId} />

        {/* 4. Table Of Contents */}
        <TableOfContents />

        {/* 5. What is All Panel Exch & How It Works */}
        <HowItWorksSection onOpenGetId={handleOpenGetId} />

        {/* 6. Why Thousands of Players Rely on All Panel Exch */}
        <WhyChooseUs />

        {/* 7. All Panel Exch Services */}
        <ServicesShowcase onOpenGetId={handleOpenGetId} />

        {/* 8. All Panel Exch Marketplace */}
        <MarketplaceSection onOpenGetId={handleOpenGetId} />

        {/* 9. Top Trending Games (9 Alternating Cards) */}
        <TrendingGames onOpenGetId={handleOpenGetId} />

        {/* 10. Platform Features */}
        <PlatformFeatures />

        {/* 11. Sign Up & Easy Login Tutorials */}
        <AuthTutorial />

        {/* 12. App Download Section */}
        <AppDownloadSection onOpenGetId={handleOpenGetId} />

        {/* 13. Easy Deposit & Fast Withdrawal Guides */}
        <PaymentGuides onOpenGetId={handleOpenGetId} />

        {/* 14. Why All Panel Exch is India's Leading Platform */}
        <WhyLeadingPlatform onOpenGetId={handleOpenGetId} />

        {/* 15. 24/7 Customer Care & Support Channels */}
        <SupportSection onOpenGetId={handleOpenGetId} />

        {/* 16. All Panel ID Gateway */}
        <IdGatewaySection onOpenGetId={handleOpenGetId} />

        {/* 17. Cricket News, Tips & Blog Articles */}
        <BlogSection />

        {/* 18. Bonus Structure (Welcome, Login, Referral) */}
        <BonusStructure onOpenGetId={handleOpenGetId} />

        {/* 19. Success Stories & Player Testimonials */}
        <TestimonialsSection />

        {/* 20. Accessible FAQs Accordion */}
        <FaqSection />

        {/* 21. Security, Transparency & Responsible Gaming Notice */}
        <SecuritySafetySection />
      </main>

      {/* 22. Production Footer */}
      <Footer onOpenGetId={handleOpenGetId} />

      {/* Interactive Get ID Modal */}
      <GetIdModal isOpen={isModalOpen} onClose={handleCloseGetId} />

      {/* Desktop Floating WhatsApp Quick Button */}
      <a
        href="https://wa.me/919999999999?text=Hello%20All%20Panel%20Exch,%20I%20want%20to%20get%20my%20All%20Panel%20ID.%20Please%20help%20me."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 hidden sm:flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 hover:shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Mobile Floating Sticky CTA Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0F1622]/95 border-t border-amber-500/30 p-2.5 backdrop-blur-lg flex items-center justify-between gap-2 shadow-2xl">
        <a
          href="https://wa.me/919999999999?text=Hello%20All%20Panel%20Exch,%20I%20want%20instant%20support"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-xs text-white flex items-center justify-center gap-1.5 shadow-lg"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp 24/7</span>
        </a>

        <button
          onClick={handleOpenGetId}
          className="flex-1 py-3 rounded-xl bg-[#facc15] hover:bg-[#eab308] font-black text-xs text-black flex items-center justify-center gap-1.5 shadow-lg active:scale-95"
        >
          <Zap className="w-4 h-4 fill-current" />
          <span>GET YOUR ID</span>
        </button>
      </div>
    </div>
  );
}
