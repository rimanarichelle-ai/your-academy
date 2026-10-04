import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Sparkles, Award } from 'lucide-react';
import { CAMPAIGN_MOTTO } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';

export const GoldenColorWavesCard: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      id="golden-waves-motto-card"
      className="mt-14 relative rounded-3xl p-8 sm:p-10 lg:p-12 golden-wave-container border-2 border-[#F7C62F] dark:border-[#F7C62F] shadow-2xl shadow-[#F2AE0B]/20 text-center select-none overflow-hidden transition-all duration-300 hover:shadow-[#F2AE0B]/30"
    >
      {/* =========================================================================
          LAYER 1: Animated CSS Fluid Wave Blobs (Deep Liquid Color Mixing)
          ========================================================================= */}
      <div className="wave-layer wave-1" />
      <div className="wave-layer wave-2" />
      <div className="wave-layer wave-3" />
      <div className="wave-layer wave-4" />

      {/* =========================================================================
          LAYER 2: Living Organic SVG Waves (Continuous Morphing & Flowing Currents)
          ========================================================================= */}
      {!shouldReduceMotion && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none wave-svg opacity-80"
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            {/* WAVE 1: Bright Academy Yellow + Warm Light Yellow (70-80% core) */}
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFC62A" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#FFD447" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#F2AE0B" stopOpacity="0.8" />
            </linearGradient>

            {/* WAVE 2: Soft Golden + Bright Highlight (15-25% highlight) */}
            <linearGradient id="waveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFE58A" stopOpacity="0.8" />
              <stop offset="55%" stopColor="#FFD447" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#F7C62F" stopOpacity="0.65" />
            </linearGradient>

            {/* WAVE 3: Subtle Deep Gold Undertow (5-10% depth, never red or orange) */}
            <linearGradient id="waveGrad3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D99600" stopOpacity="0.28" />
              <stop offset="50%" stopColor="#F2AE0B" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFC62A" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {/* Morphing Wave 1: Primary Swell (11s loop) */}
          <motion.path
            d="M0,220 C150,100 300,350 500,210 C700,70 850,280 1000,150 V400 H0 Z"
            fill="url(#waveGrad1)"
            animate={{
              d: [
                "M0,220 C150,100 300,350 500,210 C700,70 850,280 1000,150 V400 H0 Z",
                "M0,180 C180,330 320,80 520,230 C700,360 840,100 1000,220 V400 H0 Z",
                "M0,250 C140,150 280,320 480,180 C680,80 820,310 1000,190 V400 H0 Z",
                "M0,220 C150,100 300,350 500,210 C700,70 850,280 1000,150 V400 H0 Z"
              ]
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Morphing Wave 2: Counter-Current Sunlit Crest (15s loop) */}
          <motion.path
            d="M0,300 C200,180 350,400 550,270 C750,130 850,350 1000,220 V400 H0 Z"
            fill="url(#waveGrad2)"
            opacity="0.75"
            animate={{
              d: [
                "M0,300 C200,180 350,400 550,270 C750,130 850,350 1000,220 V400 H0 Z",
                "M0,260 C220,380 380,190 580,310 C720,180 880,380 1000,270 V400 H0 Z",
                "M0,320 C160,200 320,410 520,240 C720,110 860,320 1000,200 V400 H0 Z",
                "M0,300 C200,180 350,400 550,270 C750,130 850,350 1000,220 V400 H0 Z"
              ],
              x: ["-4%", "4%", "-4%"],
              y: ["2%", "-3%", "2%"]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Morphing Wave 3: Subtle Deep Gold Flow (19s loop) */}
          <motion.path
            d="M0,120 C180,250 340,50 520,150 C720,280 850,100 1000,180 V0 H0 Z"
            fill="url(#waveGrad3)"
            animate={{
              d: [
                "M0,120 C180,250 340,50 520,150 C720,280 850,100 1000,180 V0 H0 Z",
                "M0,160 C200,80 380,260 560,110 C740,240 880,70 1000,140 V0 H0 Z",
                "M0,100 C160,220 320,70 500,170 C700,260 840,120 1000,160 V0 H0 Z",
                "M0,120 C180,250 340,50 520,150 C720,280 850,100 1000,180 V0 H0 Z"
              ],
              x: ["3%", "-3%", "3%"],
              y: ["-2%", "3%", "-2%"]
            }}
            transition={{
              duration: 19,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Morphing Wave 4: Upper Light Shimmer (13s loop) */}
          <motion.path
            d="M0,70 Q250,130 500,60 T1000,80 V0 H0 Z"
            fill="#FFE58A"
            opacity="0.55"
            animate={{
              d: [
                "M0,70 Q250,130 500,60 T1000,80 V0 H0 Z",
                "M0,90 Q250,40 500,100 T1000,60 V0 H0 Z",
                "M0,50 Q250,110 500,40 T1000,90 V0 H0 Z",
                "M0,70 Q250,130 500,60 T1000,80 V0 H0 Z"
              ]
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      )}

      {/* =========================================================================
          LAYER 3: Subtle Academy Watermark Pattern (Non-competing geometric marks)
          ========================================================================= */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#000000_1.5px,transparent_1.5px)] [background-size:24px_24px]" 
        aria-hidden="true" 
      />

      {/* Dynamic corner ambient lights (Pure gold and soft light) */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-[#FFE58A]/35 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-44 h-44 bg-[#F2AE0B]/25 rounded-full blur-2xl pointer-events-none" />

      {/* =========================================================================
          LAYER 4: Crisp High-Contrast Deep Black Typography
          ========================================================================= */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-4">
        
        {/* Motto Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/90 text-[#FFC62A] text-xs font-black tracking-widest uppercase font-sora shadow-md border border-black/10">
          <Sparkles className="w-3.5 h-3.5 text-[#FFC62A] shrink-0" />
          <span>{t.pillars.boxMottoBadge}</span>
          <Award className="w-3.5 h-3.5 text-[#FFC62A] shrink-0" />
        </div>

        {/* Primary English Motto with "DO" Emphasis */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-950 font-sora tracking-tight leading-tight drop-shadow-sm">
          {CAMPAIGN_MOTTO.tagline1} • {CAMPAIGN_MOTTO.tagline2.replace('DO', '"DO"')}
        </h3>

        {/* Arabic Motivational Slogan */}
        <p className="text-lg sm:text-xl md:text-2xl font-black text-zinc-900 leading-snug drop-shadow-sm">
          {t.common.slogan}
        </p>

        {/* Supporting Educational Footnote */}
        <p className="text-xs sm:text-sm font-bold text-zinc-900/85 pt-1 max-w-xl mx-auto drop-shadow-none">
          {t.pillars.boxFootnote}
        </p>

      </div>
    </div>
  );
};
