import React, { useState } from 'react';
import { ACADEMY_INFO, academyLocations, khemisMilianaLocation, getGoogleMapsIntentUrl } from '../data/academyData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Copy,
  ExternalLink,
  Building2,
  CalendarCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AcademyLocationAndContactProps {
  onOpenRegister: () => void;
}

export const AcademyLocationAndContact: React.FC<AcademyLocationAndContactProps> = ({ onOpenRegister }) => {
  const { language } = useLanguage();
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [copiedAddressId, setCopiedAddressId] = useState<string | null>(null);
  const isAr = language === 'ar';

  const handleCopyPhone = (phone: string) => {
    navigator.clipboard?.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  const handleCopyAddress = (id: string, address: string) => {
    navigator.clipboard?.writeText(address);
    setCopiedAddressId(id);
    setTimeout(() => setCopiedAddressId(null), 2000);
  };

  const khemisExactAddress = isAr
    ? (khemisMilianaLocation.exactAddressAr || 'تحت محل وزير القلايل مقابل زواق المصور، خميس مليانة، الجزائر 44000')
    : (khemisMilianaLocation.exactAddressEn || 'Under Wazir El Qlayel store, opposite Zouak Photographer, Khemis Miliana, Algeria, 44000');

  const khemisGoogleMapsUrl = getGoogleMapsIntentUrl(khemisExactAddress);

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-[#0B0F17] relative border-t border-zinc-200 dark:border-zinc-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-800 dark:text-amber-400 text-xs font-bold">
            <Building2 className="w-3.5 h-3.5" />
            <span>{isAr ? 'فروع الأكاديمية ومعلومات التواصل' : 'Academy Locations & Official Contact'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 dark:text-white tracking-tight">
            {isAr ? 'تجدوننا في' : 'Find Us In'}{' '}
            <span className="text-amber-600 dark:text-amber-400">
              {isAr ? 'عين الدفلى (الرئيسي)، البليدة، وخميس مليانة' : 'Aïn Defla (Main), Blida & Khemis Miliana'}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {isAr
              ? 'تسعد أكاديمية Your Academy باستقبالكم في فروعها المعتمدة: المقر الرئيسي بعين الدفلى، فرع البليدة، وفرع خميس مليانة. أبواب التسجيل والاستفسار مفتوحة في كافة المقرات.'
              : 'Your Academy is proud to welcome you at our official branches: Main Branch in Aïn Defla, Blida Branch, and Khemis Miliana Branch. Registration and inquiries are open at all locations.'}
          </p>
        </div>

        {/* TWO PREMIUM LOCATION CARDS */}
        <div className="mb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {academyLocations.map((location) => {
              const branchTitle = isAr
                ? location.nameAr || location.name
                : location.name;

              const addressLine = isAr ? location.address : (location.addressEn || location.address);
              const cityLine = isAr
                ? (location.cityFullAr || location.city)
                : (location.cityFullEn || location.locationEn);

              const tagText = location.isMain
                ? (isAr ? 'المقر الرئيسي • MAIN LOCATION' : 'Main Branch • MAIN LOCATION')
                : (isAr ? 'فرع ولاية البليدة' : 'Blida Branch');

              const exactAddressString = isAr
                ? (location.exactAddressAr || `${addressLine}، ${cityLine}`)
                : (location.exactAddressEn || `${addressLine}, ${cityLine}`);

              const googleMapsUrl = getGoogleMapsIntentUrl(exactAddressString);

              return (
                <div
                  key={location.id}
                  className={`rounded-3xl bg-zinc-50 dark:bg-zinc-900/90 border-2 ${
                    location.isMain
                      ? 'border-amber-500/60 dark:border-amber-400/50 ring-2 ring-amber-500/20 shadow-xl'
                      : 'border-amber-400/30 dark:border-amber-400/25 shadow-lg'
                  } p-6 sm:p-8 flex flex-col justify-between hover:shadow-2xl hover:border-amber-400/80 transition-all text-start relative overflow-hidden group`}
                >
                  {/* Subtle decorative glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-400/15 transition-all" />

                  <div className="space-y-5 relative z-10">
                    {/* Top Branch Header Badge & Location Icon */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                        <MapPin className="w-7 h-7 stroke-[2.2]" />
                      </div>

                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                          location.isMain
                            ? 'bg-amber-500 text-black border-amber-400 shadow-sm font-black'
                            : 'bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-500/30'
                        }`}
                      >
                        <span>{tagText}</span>
                      </span>
                    </div>

                    {/* Branch Title & Exact Address */}
                    <div className="space-y-2 pt-1">
                      <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white tracking-tight">
                        {branchTitle}
                      </h3>

                      <div className="p-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2 shadow-sm">
                        <div className="flex items-start justify-between gap-2.5">
                          <div className="flex items-start gap-2.5">
                            <span className="text-lg leading-none mt-0.5 select-none" aria-hidden="true">📍</span>
                            <div>
                              <p className="text-base sm:text-lg font-extrabold text-zinc-900 dark:text-zinc-100 leading-snug">
                                {addressLine}
                              </p>
                              <p className="text-sm font-bold text-amber-600 dark:text-amber-400 mt-1">
                                {cityLine}
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={() => handleCopyAddress(location.id, exactAddressString)}
                            className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs transition-colors shrink-0"
                            title={isAr ? 'نسخ العنوان الكامل' : 'Copy exact address'}
                            aria-label={`Copy ${branchTitle} address`}
                          >
                            {copiedAddressId === location.id ? (
                              <CheckCircle2 className="w-4 h-4 text-green-500 dark:text-green-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>

                        {/* Direct Branch Phone Link */}
                        <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
                          <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                            {isAr ? 'الهاتف المباشر:' : 'Direct Phone:'}
                          </span>
                          <a
                            href={`tel:${location.phone.replace(/\s/g, '')}`}
                            className="text-sm font-black text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1.5"
                            dir="ltr"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>{location.phone}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Action: عرض الموقع (View Location on Google Maps) */}
                  <div className="pt-6 relative z-10 space-y-2">
                    <div className="flex flex-col sm:flex-row gap-2.5">
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-h-[48px] py-3.5 px-6 rounded-2xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-black font-black text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-amber-500/20 active:scale-[0.98] touch-manipulation cursor-pointer select-none"
                        id={`view-location-btn-${location.id}`}
                        aria-label={isAr ? `عرض موقع ${branchTitle} على الخريطة في تطبيق Google Maps (${exactAddressString})` : `View ${branchTitle} on Google Maps (${exactAddressString})`}
                        title={isAr ? `فتح ${branchTitle} على خريطة Google: ${exactAddressString}` : `Open ${branchTitle} in Google Maps: ${exactAddressString}`}
                        data-intent-url={googleMapsUrl}
                      >
                        <MapPin className="w-4 h-4 text-black shrink-0 stroke-[2.5]" />
                        <span>{isAr ? 'عرض الموقع على الخريطة' : 'View on Map'}</span>
                        <ExternalLink className="w-4 h-4 text-black shrink-0 stroke-[2.5]" />
                      </a>
                      <a
                        href={`tel:${location.phone.replace(/\s/g, '')}`}
                        className="min-h-[48px] py-3.5 px-5 rounded-2xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-bold text-sm transition-all flex items-center justify-center gap-1.5 active:scale-[0.98] touch-manipulation"
                        id={`call-branch-btn-${location.id}`}
                      >
                        <Phone className="w-4 h-4 text-amber-500" />
                        <span>{isAr ? 'اتصال بالفرع' : 'Call Branch'}</span>
                      </a>
                    </div>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 text-center sm:text-start flex items-center gap-1">
                      <span className="text-amber-500">📍</span>
                      <span>{isAr ? 'يفتح تطبيق Google Maps مباشرة بالعنوان الدقيق للملاحة' : 'Opens Google Maps directly with exact address for turn-by-turn navigation'}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* OFFICIAL BRANCHES & WORKING HOURS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* KHÉMIS MILIANA / خميس مليانة Branch Card */}
          <div className="lg:col-span-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/90 border-2 border-amber-400/40 dark:border-amber-400/30 p-6 sm:p-8 flex flex-col justify-between hover:shadow-2xl hover:border-amber-400/80 transition-all text-start relative overflow-hidden group shadow-lg">
            
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-400/20 transition-all" />

            <div className="space-y-6 relative z-10">
              
              {/* Header with Icon, Title & Badge */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0 shadow-inner">
                    <MapPin className="w-7 h-7 text-amber-500 dark:text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 font-sora tracking-wide uppercase block">
                      KHÉMIS MILIANA • {isAr ? 'مدرسة خاصة' : 'Private School'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white tracking-tight">
                      {isAr ? 'فرع خميس مليانة' : 'Khemis Miliana Branch'}
                    </h3>
                  </div>
                </div>

                <span className="text-xs bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full font-bold shrink-0">
                  {isAr ? 'فرع خميس مليانة' : 'Khemis Miliana'}
                </span>
              </div>

              {/* Compact Information Rows */}
              <div className="p-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3.5 shadow-sm">
                
                {/* Address Row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 block">
                        {isAr ? 'العنوان المعتمد' : 'Official Address'}
                      </span>
                      <p className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100 leading-snug">
                        {isAr
                          ? 'تحت محل وزير القلايل مقابل زواق المصور، خميس مليانة'
                          : 'Under Wazir El Qlayel store, opposite Zouak Photographer, Khemis Miliana'}
                      </p>
                      <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">
                        Khemis Miliana, Algeria, 44000
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopyAddress('khemis', khemisExactAddress)}
                    className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs transition-colors shrink-0"
                    title={isAr ? 'نسخ العنوان الكامل' : 'Copy exact address'}
                    aria-label="Copy address"
                  >
                    {copiedAddressId === 'khemis' ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500 dark:text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Row */}
                <div className="flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                    <div>
                      <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 block">
                        {isAr ? 'الهاتف المباشر للفرع' : 'Branch Direct Phone'}
                      </span>
                      <a
                        href="tel:0551404059"
                        className="text-base font-black text-amber-700 dark:text-amber-400 hover:underline tracking-wider font-sora block"
                        dir="ltr"
                      >
                        0551 40 40 59
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleCopyPhone('0551 40 40 59')}
                      className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs transition-colors"
                      title={isAr ? 'نسخ الرقم' : 'Copy number'}
                      id="copy-phone-khemis-miliana"
                      aria-label="Copy phone 0551 40 40 59"
                    >
                      {copiedPhone === '0551 40 40 59' ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500 dark:text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Email Row */}
                <div className="flex items-center gap-3 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                  <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                  <div className="text-xs">
                    <span className="text-zinc-500 dark:text-zinc-400 block font-medium">
                      {isAr ? 'البريد الإلكتروني للفرع' : 'Branch Email'}
                    </span>
                    <a
                      href="mailto:youracademykn@gmail.com"
                      className="font-bold text-zinc-900 dark:text-zinc-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                      dir="ltr"
                    >
                      youracademykn@gmail.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-6 relative z-10 space-y-2">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={khemisGoogleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-h-[48px] py-3.5 px-6 rounded-2xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-black font-black text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-amber-500/20 active:scale-[0.98] touch-manipulation cursor-pointer select-none"
                  id="view-location-btn-khemis-miliana"
                  aria-label={isAr ? `عرض موقع فرع خميس مليانة على الخريطة في تطبيق Google Maps (${khemisExactAddress})` : `View Khemis Miliana Branch on Google Maps (${khemisExactAddress})`}
                  title={isAr ? `فتح فرع خميس مليانة على خريطة Google: ${khemisExactAddress}` : `Open Khemis Miliana Branch in Google Maps: ${khemisExactAddress}`}
                  data-intent-url={khemisGoogleMapsUrl}
                >
                  <MapPin className="w-4 h-4 text-black shrink-0 stroke-[2.5]" />
                  <span>{isAr ? 'عرض الموقع على الخريطة' : 'View on Map'}</span>
                  <ExternalLink className="w-4 h-4 text-black shrink-0 stroke-[2.5]" />
                </a>
                <a
                  href="tel:0551404059"
                  className="min-h-[48px] py-3.5 px-5 rounded-2xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-bold text-sm transition-all flex items-center justify-center gap-1.5 active:scale-[0.98] touch-manipulation"
                  id="call-branch-btn-khemis-miliana"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>{isAr ? 'اتصال بالفرع' : 'Call Branch'}</span>
                </a>
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 text-center sm:text-start flex items-center gap-1">
                <span className="text-amber-500">📍</span>
                <span>{isAr ? 'يفتح تطبيق Google Maps مباشرة بالعنوان الدقيق للملاحة' : 'Opens Google Maps directly with exact address for turn-by-turn navigation'}</span>
              </p>
            </div>

          </div>

          {/* Working Hours & Immediate Pre-Registration / Visit Booking */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md text-start flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-zinc-950 dark:text-white">
                    {isAr ? 'أوقات العمل والاستقبال' : 'Working & Reception Hours'}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                    {isAr ? 'في كافة فروع الأكاديمية (عين الدفلى، البليدة، خميس مليانة)' : 'Across all academy branches (Aïn Defla, Blida, Khemis Miliana)'}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2 shadow-sm">
                <p className="text-sm sm:text-base font-extrabold text-zinc-900 dark:text-zinc-100">
                  {isAr ? 'السبت إلى الخميس: من 08:30 إلى 18:00' : 'Saturday to Thursday: 08:30 to 18:00'}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {isAr
                    ? 'يوم الجمعة: مغلق (أو مخصص للحصص الاستدراكية المبرمجة مسبقاً).'
                    : 'Friday: Closed (or reserved for pre-scheduled makeup sessions).'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-zinc-700 dark:text-zinc-300 space-y-1">
                <p className="font-bold text-amber-800 dark:text-amber-300">
                  {isAr ? '📌 ملاحظة هامة للمترشحين والأولياء:' : '📌 Important Note for Applicants:'}
                </p>
                <p className="leading-relaxed">
                  {isAr
                    ? 'يمكنكم اختيار الفرع الأقرب إليكم (المقر الرئيسي بعين الدفلى، فرع البليدة، أو فرع خميس مليانة) عند تعبئة استمارة التسجيل الإلكتروني لتحديد الفوج والتوقيت الملائمين.'
                    : 'You can select your preferred branch (Aïn Defla Main Branch, Blida Branch, or Khemis Miliana Branch) in the online registration form to pick your optimal cohort and timing.'}
                </p>
              </div>
            </div>

            {/* Direct Register / Book Visit Action */}
            <div className="pt-2">
              <button
                onClick={onOpenRegister}
                className="w-full py-4 px-6 rounded-2xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-black font-black text-sm sm:text-base shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                id="book-visit-or-register-btn"
              >
                <CalendarCheck className="w-5 h-5 text-black shrink-0" />
                <span>{isAr ? 'سجل الآن أو احجز موعد زيارة' : 'Register Now or Book a Visit'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
