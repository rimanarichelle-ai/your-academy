import React, { useState } from 'react';
import { ACADEMY_INFO, academyCampaign } from '../data/academyData';
import {
  Phone,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  MapPin,
  X,
  Sparkles,
  Send,
  HelpCircle,
  BookOpen,
  GraduationCap
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface MobileStickyBarProps {
  onOpenRegister: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenRegister }) => {
  const { t, isRtl, language } = useLanguage();
  const [showCallSheet, setShowCallSheet] = useState(false);
  const [showWhatsAppSheet, setShowWhatsAppSheet] = useState(false);

  const branches = [
    {
      id: 'ain-defla',
      name: isRtl ? 'فرع عين الدفلى — الرئيسي' : 'Aïn Defla — Main HQ',
      phone: '0552 40 40 59',
      whatsappRaw: '213552404059',
      address: isRtl ? 'حي الإخوة شوال، طريق مسجد مالك ابن أنس' : 'Hay El Ikhwa Chaoual, Aïn Defla',
      exactAddress: isRtl ? 'حي الإخوة شوال، طريق مسجد مالك ابن أنس، عين الدفلى، الجزائر 44000' : 'Hay El Ikhwa Chaoual, Route Mosquee Malik Ibn Anas, Aïn Defla, Algeria, 44000',
      isMain: true,
    },
    {
      id: 'khemis-miliana',
      name: isRtl ? 'فرع خميس مليانة' : 'Khemis Miliana Branch',
      phone: '0551 40 40 59',
      whatsappRaw: '213551404059',
      address: isRtl ? 'تحت محل وزير القلايل مقابل زواق المصور' : 'Under Wazir El Qlayel, Khemis Miliana',
      exactAddress: isRtl ? 'تحت محل وزير القلايل مقابل زواق المصور، خميس مليانة، الجزائر 44000' : 'Under Wazir El Qlayel store, opposite Zouak Photographer, Khemis Miliana, Algeria, 44000',
      isMain: false,
    },
    {
      id: 'blida',
      name: isRtl ? 'فرع البليدة' : 'Blida Branch',
      phone: '0560 40 40 00',
      whatsappRaw: '213560404000',
      address: isRtl ? 'البليدة، الجزائر 09000' : 'Blida, Algeria 09000',
      exactAddress: isRtl ? 'البليدة، الجزائر 09000' : 'Blida, Algeria, 09000',
      isMain: false,
    },
  ];

  // Predefined Inquiry Templates
  const defaultInquiryMessage = isRtl
    ? 'مرحباً إدارة أكاديمية Your Academy 🎓، أود الاستفسار عن التسجيلات المتاحة للموسم 2026/2027 (برامج اللغات والدعم المدرسي) والتعرف على جدول الأفواج والأسعار. شكراً لكم!'
    : 'Hello Your Academy Administration 🎓, I would like to inquire about 2026/2027 enrollment (Language Programs & Academic Support) and request schedules and pricing. Thank you!';

  const buildWhatsAppUrl = (phoneRaw: string = '213552404059', customMessage?: string) => {
    const text = customMessage || defaultInquiryMessage;
    return `https://wa.me/${phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  const quickInquiryTopics = [
    {
      id: 'general',
      titleAr: 'استفسار عام عن التسجيل والأسعار',
      titleEn: 'General Inquiry & Tuition Fees',
      icon: HelpCircle,
      msgAr: 'مرحباً أكاديمية Your Academy 🎓، أود الاستفسار عن برامج الموسم 2026/2027 وكيفية التسجيل والأسعار المتاحة.',
      msgEn: 'Hello Your Academy 🎓, I would like to ask about 2026/2027 programs, registration process, and fees.',
    },
    {
      id: 'languages',
      titleAr: 'دورات اللغات الحية (الإنجليزية / الفرنسية / الألمانية / الإسبانية)',
      titleEn: 'Foreign Language Courses (ENG / FRA / DEU / ESP)',
      icon: BookOpen,
      msgAr: 'مرحباً، أود الاستفسار عن دورات اللغات الحية ومستويات الإطار الأوروبي CEFR المتاحة لديكم ومواعيد انطلاق الأفواج.',
      msgEn: 'Hello, I would like to inquire about your CEFR language courses and upcoming cohort starting dates.',
    },
    {
      id: 'academic',
      titleAr: 'الدعم المدرسي وتحضير شهادة البكالوريا (BAC / BEM)',
      titleEn: 'Academic Support & BAC/BEM Prep',
      icon: GraduationCap,
      msgAr: 'مرحباً، أود الاستفسار عن برنامج الدعم المدرسي لأقسام البكالوريا وشهادة التعليم المتوسط وتوقيت الحصص.',
      msgEn: 'Hello, I would like to ask about the Baccalaureate (BAC) and BEM academic support schedule and teachers.',
    },
  ];

  return (
    <>
      {/* 1. Branch Call & Navigation Selector Sheet */}
      {showCallSheet && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-end">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowCallSheet(false)}
            aria-hidden="true"
          />
          <div className="relative z-10 bg-white dark:bg-[#0B0F17] rounded-t-3xl border-t border-amber-500/30 p-5 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] space-y-4 shadow-2xl animate-in slide-in-from-bottom duration-200 text-start">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2 text-zinc-950 dark:text-white">
                <Phone className="w-4 h-4 text-amber-500" />
                <h3 className="text-base font-black">
                  {isRtl ? 'اختر الفرع للاتصال المباشر أو الملاحة' : 'Select Branch to Call or Map'}
                </h3>
              </div>
              <button
                onClick={() => setShowCallSheet(false)}
                className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 flex items-center justify-center cursor-pointer"
                aria-label="Close call sheet"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2.5">
              {branches.map((b) => (
                <div
                  key={b.id}
                  className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-amber-400/50 flex items-center justify-between gap-3 transition-colors"
                >
                  <div className="space-y-0.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-zinc-950 dark:text-white truncate">
                        {b.name}
                      </span>
                      {b.isMain && (
                        <span className="px-1.5 py-0.2 bg-amber-500 text-black text-[9px] font-black rounded shrink-0">
                          {isRtl ? 'الرئيسي' : 'MAIN'}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1">
                      {b.address}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        b.exactAddress
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-amber-600 dark:text-amber-400 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center transition-colors active:scale-95"
                      title={isRtl ? 'عرض الموقع على الخريطة' : 'View on Google Maps'}
                      aria-label={`${b.name} - Google Maps`}
                    >
                      <MapPin className="w-4 h-4" />
                    </a>

                    <a
                      href={`tel:${b.phone.replace(/\s/g, '')}`}
                      className="px-3 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-black text-xs shrink-0 flex items-center gap-1.5 font-sora shadow-sm active:scale-95 transition-transform"
                      dir="ltr"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{b.phone}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. WhatsApp Direct Inquiry Modal / Sheet */}
      {showWhatsAppSheet && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-end">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowWhatsAppSheet(false)}
            aria-hidden="true"
          />
          <div className="relative z-10 bg-white dark:bg-[#0B0F17] rounded-t-3xl border-t border-emerald-500/30 p-5 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] space-y-4 shadow-2xl animate-in slide-in-from-bottom duration-200 text-start max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2 text-zinc-950 dark:text-white">
                <div className="w-7 h-7 rounded-lg bg-[#25D366] text-white flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <h3 className="text-sm font-black">
                    {isRtl ? 'محادثة مباشرة عبر واتساب' : 'Chat Directly on WhatsApp'}
                  </h3>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400">
                    {isRtl ? 'اختر الفرع أو الموضوع لإرسال رسالة جاهزة' : 'Select branch or topic to send prefilled message'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowWhatsAppSheet(false)}
                className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 flex items-center justify-center cursor-pointer"
                aria-label="Close WhatsApp sheet"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick One-Tap Main Branch Contact */}
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-emerald-800 dark:text-emerald-300">
                  {isRtl ? 'المقر الرئيسي (عين الدفلى) — رد سريع' : 'Main HQ (Aïn Defla) — Fast Response'}
                </span>
                <span className="text-[10px] bg-emerald-500 text-white font-black px-1.5 py-0.5 rounded">
                  ONLINE
                </span>
              </div>
              <a
                href={buildWhatsAppUrl('213552404059')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] text-white font-black text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 active:scale-95 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>{isRtl ? 'إرسال الاستفسار الفوري عبر واتساب' : 'Send Instant Inquiry via WhatsApp'}</span>
                {isRtl ? <Send className="w-3.5 h-3.5 rotate-180" /> : <Send className="w-3.5 h-3.5" />}
              </a>
            </div>

            {/* Quick Topic Templates */}
            <div className="space-y-2">
              <span className="text-[11px] font-black text-zinc-600 dark:text-zinc-400 uppercase tracking-wider block">
                {isRtl ? 'أو اختر موضوع الاستفسار المخصص:' : 'Or Choose a Specific Topic:'}
              </span>

              <div className="space-y-2">
                {quickInquiryTopics.map((topic) => {
                  const TopicIcon = topic.icon;
                  const messageText = isRtl ? topic.msgAr : topic.msgEn;
                  const url = buildWhatsAppUrl('213552404059', messageText);

                  return (
                    <a
                      key={topic.id}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-400/50 flex items-center justify-between gap-3 text-start active:scale-98 transition-all group"
                    >
                      <div className="flex items-center gap-2.5 flex-1 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                          <TopicIcon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                          {isRtl ? topic.titleAr : topic.titleEn}
                        </span>
                      </div>
                      <ChevronLeft className={`w-4 h-4 text-zinc-400 group-hover:text-emerald-500 ${isRtl ? '' : 'rotate-180'} shrink-0`} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Branch-Specific WhatsApp Direct Links */}
            <div className="space-y-2 pt-1 border-t border-zinc-100 dark:border-zinc-800">
              <span className="text-[11px] font-black text-zinc-600 dark:text-zinc-400 uppercase tracking-wider block">
                {isRtl ? 'فروع الأكاديمية الأخرى عبر واتساب:' : 'Other Branch Numbers:'}
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {branches
                  .filter((b) => !b.isMain)
                  .map((b) => (
                    <a
                      key={b.id}
                      href={buildWhatsAppUrl(b.whatsappRaw, defaultInquiryMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center font-bold text-zinc-800 dark:text-zinc-200 hover:border-emerald-400 flex flex-col items-center gap-1 active:scale-95 transition-transform"
                    >
                      <span className="text-[11px] text-zinc-900 dark:text-white font-black truncate">{b.name}</span>
                      <span dir="ltr" className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                        {b.phone}
                      </span>
                    </a>
                  ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* =========================================================================
          FIXED MOBILE BOTTOM ACTION BAR (Touch target >= 44px)
         ========================================================================= */}
      <aside
        aria-label={isRtl ? 'شريط الإجراءات السريعة' : 'Mobile Quick Actions'}
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 dark:bg-[#0B0F17]/95 backdrop-blur-xl border-t border-amber-500/30 p-2 sm:p-2.5 px-3 sm:px-4 pb-[max(0.65rem,calc(0.5rem+env(safe-area-inset-bottom,0px)))] shadow-[0_-8px_25px_rgba(0,0,0,0.15)] transition-colors select-none"
      >
        <div className="flex items-center gap-2 max-w-md mx-auto">
          
          {/* 1. Direct Call Button with Branch Selector (Min 44px touch target) */}
          <button
            onClick={() => setShowCallSheet(true)}
            className="min-h-[44px] flex-1 py-2.5 px-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform cursor-pointer"
            id="mobile-sticky-call-btn"
            aria-label={isRtl ? 'اتصل بنا' : 'Call Us'}
          >
            <Phone className="w-4 h-4 text-amber-500 shrink-0" />
            <span className="whitespace-nowrap">{isRtl ? 'اتصال' : 'Call'}</span>
          </button>

          {/* 2. Direct "Chat on WhatsApp" Button with Predefined Template (Min 44px touch target) */}
          <button
            onClick={() => setShowWhatsAppSheet(true)}
            className="min-h-[44px] flex-[1.2] py-2.5 px-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/25 active:scale-95 transition-all cursor-pointer"
            id="mobile-sticky-whatsapp-btn"
            aria-label={isRtl ? 'محادثة عبر واتساب' : 'Chat on WhatsApp'}
            title={isRtl ? 'تواصل عبر واتساب بقالب جاهز' : 'Chat on WhatsApp with Predefined Template'}
          >
            <div className="w-4 h-4 flex items-center justify-center shrink-0">
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
            </div>
            <span className="whitespace-nowrap">{isRtl ? 'محادثة واتساب' : 'WhatsApp'}</span>
          </button>

          {/* 3. High-Contrast Register CTA (Min 44px touch target) */}
          <button
            onClick={onOpenRegister}
            className="min-h-[44px] flex-[1.3] py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-black font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/30 active:scale-95 transition-transform cursor-pointer"
            id="mobile-sticky-register"
          >
            <Sparkles className="w-3.5 h-3.5 fill-black shrink-0" />
            <span className="whitespace-nowrap">{t.common.registerNow}</span>
            {isRtl ? <ChevronLeft className="w-4 h-4 shrink-0" /> : <ChevronRight className="w-4 h-4 shrink-0" />}
          </button>

        </div>
      </aside>
    </>
  );
};
