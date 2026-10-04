import React, { useState, useEffect } from 'react';
import { ACADEMY_INFO, CAMPAIGN_MOTTO } from '../data/academyData';
import { Phone, MapPin, Menu, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { TopLanguageTicker } from './TopLanguageTicker';
import { MobileDrawerNav } from './MobileDrawerNav';
import { IOSPWAExperience } from './IOSPWAExperience';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenRegister: (program?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const { t, isRtl, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: isRtl ? 'الرئيسية' : t.nav.home, href: '#hero' },
    { name: isRtl ? 'اللغات' : t.nav.languages, href: '#languages' },
    { name: isRtl ? 'الدعم المدرسي' : t.nav.academic, href: '#academic' },
    { name: isRtl ? 'برامجنا والرزنامة' : (language === 'ar' ? 'الرزنامة 2026/2027' : 'Calendar & Programs'), href: '#calendar' },
    { name: isRtl ? 'مواقعنا' : 'Our Branches', href: '#contact' },
    { name: isRtl ? 'الأسئلة الشائعة' : t.nav.faq, href: '#faq' },
    { name: isRtl ? 'اتصل بنا' : t.nav.contact, href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-sm pt-[env(safe-area-inset-top,0px)] bg-[#F7C62F]">
      {/* Top Moving Language Bar Ticker */}
      <TopLanguageTicker />

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/95 text-zinc-900 border-zinc-200 shadow-lg dark:bg-[#0B0F17]/95 dark:text-white dark:border-amber-500/20 py-2.5 sm:py-3 backdrop-blur-md'
            : 'bg-white/90 text-zinc-900 border-zinc-200/80 dark:bg-[#0B0F17]/85 dark:text-white dark:border-white/10 py-3 sm:py-4 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          
          {/* Logo & Brand Identity (Exact Uploaded Logo Asset) */}
          <a
            href="#hero"
            className="flex items-center gap-2 sm:gap-2.5 group text-start min-h-[44px] min-w-0"
            id="nav-logo"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white p-1 flex items-center justify-center shadow-sm border border-amber-400/40 group-hover:scale-105 transition-transform overflow-hidden shrink-0">
              <img
                src="/assets/your-academy-logo.png"
                alt="Your Academy"
                className="w-full h-full object-contain"
                width="44"
                height="44"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm sm:text-base lg:text-xl text-zinc-950 dark:text-white tracking-tight font-sora leading-tight truncate">
                  YOUR ACADEMY
                </span>
                <span className="hidden md:inline-flex items-center gap-1 bg-amber-500/15 text-amber-800 dark:text-amber-400 text-[10px] px-2 py-0.5 rounded-md font-bold border border-amber-500/30 shrink-0">
                  <MapPin className="w-3 h-3 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>{language === 'ar' ? 'عين الدفلى • البليدة • خميس مليانة' : 'Aïn Defla • Blida • Khemis Miliana'}</span>
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-amber-700 dark:text-amber-400 font-bold leading-none truncate">
                {language === 'ar' ? ACADEMY_INFO.academyNameAr : t.common.academySubtitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-700 hover:text-amber-600 dark:text-zinc-300 dark:hover:text-amber-400 px-3 py-2 text-sm font-semibold rounded-lg hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Controls & CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Language Switcher */}
            <LanguageSwitcher variant="navbar" />

            {/* Theme Toggle Button */}
            <ThemeToggle variant="icon" />

            {/* Direct Phone Call */}
            <a
              href={`tel:${ACADEMY_INFO.phones[0]}`}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 hover:border-amber-400/50 text-zinc-800 dark:text-zinc-200 hover:text-amber-600 dark:hover:text-amber-400 text-xs font-bold transition-all shadow-sm min-h-[44px]"
              id="header-phone-btn"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span dir="ltr">{ACADEMY_INFO.phones[0]}</span>
            </a>

            {/* Register CTA Button */}
            <button
              onClick={() => onOpenRegister()}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center gap-1.5 min-h-[44px]"
              id="header-register-btn"
            >
              <span>{t.common.registerNow}</span>
              {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Header Controls (iOS-friendly, high touch precision, uncrowded) */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Tablet-only language & theme toggles */}
            <div className="hidden sm:flex items-center">
              <LanguageSwitcher variant="navbar" />
            </div>

            <div className="hidden sm:flex items-center">
              <ThemeToggle variant="icon" />
            </div>

            {/* Mobile Primary Register CTA (Min 44px touch target) */}
            <button
              onClick={() => onOpenRegister()}
              className="min-h-[44px] px-3.5 sm:px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-black font-black text-xs sm:text-sm shadow-sm active:scale-95 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap touch-manipulation"
              id="mobile-register-quick"
            >
              <Sparkles className="w-3.5 h-3.5 fill-black shrink-0 hidden xs:inline" />
              <span>{t.common.registerNow}</span>
            </button>

            {/* Mobile Hamburger / Menu Button (Min 44x44px touch target) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] p-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center active:scale-95 transition-all touch-manipulation"
              aria-label={isRtl ? "القائمة الرئيسية" : "Main Menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-slide-over-drawer"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 stroke-[2.5]" /> : <Menu className="w-5 h-5 stroke-[2.5]" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-Over Drawer Navigation (RTL-aware, focus-trapped, touch-friendly) */}
      <MobileDrawerNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenRegister={onOpenRegister}
        onOpenIOSGuide={() => setShowIOSGuide(true)}
      />

      {/* iOS Safari PWA / Add to Home Screen Guided Modal */}
      <IOSPWAExperience
        showGuide={showIOSGuide}
        onCloseGuide={() => setShowIOSGuide(false)}
      />
    </header>
  );
};


