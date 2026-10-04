import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpecialOfferBanner } from './components/SpecialOfferBanner';
import { LanguagePrograms } from './components/LanguagePrograms';
import { StudentAdvancementLevels } from './components/StudentAdvancementLevels';
import { AcademicSupport } from './components/AcademicSupport';
import { AcademicCalendarSection } from './components/AcademicCalendarSection';
import { PillarsSection } from './components/PillarsSection';
import { HappyStudentsCounter } from './components/HappyStudentsCounter';
import { Testimonials } from './components/Testimonials';
import { AcademyLocationAndContact } from './components/AcademyLocationAndContact';
import { FaqSection } from './components/FaqSection';
import { CommunityNewsletter } from './components/CommunityNewsletter';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FadeInUpSection } from './components/FadeInUpSection';

function AcademyApp() {
  const { isRtl } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>(undefined);

  const handleOpenRegister = (programName?: string) => {
    setSelectedProgram(programName);
    setIsModalOpen(true);
  };

  const handleCloseRegister = () => {
    setIsModalOpen(false);
    setSelectedProgram(undefined);
  };

  return (
    <div
      className={`min-h-screen bg-[#F8FAFC] text-zinc-900 dark:bg-[#0B0F17] dark:text-white flex flex-col ${
        isRtl ? 'font-cairo' : 'font-plus-jakarta'
      } selection:bg-amber-400 selection:text-black antialiased transition-colors duration-200`}
    >
      {/* Website Entry / Splash Screen */}
      <SplashScreen />

      {/* Navigation Header */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* Main Content Sections with Subtle Fade-In-Up Viewport Entrance */}
      <main className="flex-grow pb-20 md:pb-0">
        <Hero onOpenRegister={handleOpenRegister} />
        
        <FadeInUpSection>
          <SpecialOfferBanner onOpenRegister={handleOpenRegister} />
        </FadeInUpSection>

        <FadeInUpSection>
          <LanguagePrograms onOpenRegister={handleOpenRegister} />
        </FadeInUpSection>

        <FadeInUpSection>
          <StudentAdvancementLevels onOpenRegister={handleOpenRegister} />
        </FadeInUpSection>

        <FadeInUpSection>
          <AcademicSupport onOpenRegister={handleOpenRegister} />
        </FadeInUpSection>

        <FadeInUpSection>
          <AcademicCalendarSection onOpenRegister={handleOpenRegister} />
        </FadeInUpSection>

        <FadeInUpSection>
          <PillarsSection />
        </FadeInUpSection>

        <FadeInUpSection>
          <HappyStudentsCounter onOpenRegister={handleOpenRegister} />
        </FadeInUpSection>

        <FadeInUpSection>
          <Testimonials onOpenRegister={handleOpenRegister} />
        </FadeInUpSection>

        <FadeInUpSection>
          <AcademyLocationAndContact onOpenRegister={() => handleOpenRegister()} />
        </FadeInUpSection>

        <FadeInUpSection>
          <FaqSection />
        </FadeInUpSection>
        
        {/* Join Our Academic Community Newsletter Component */}
        <FadeInUpSection>
          <CommunityNewsletter onOpenRegister={handleOpenRegister} />
        </FadeInUpSection>
      </main>

      {/* Footer */}
      <Footer onOpenRegister={() => handleOpenRegister()} />

      {/* Mobile Bottom Sticky Bar for rapid contact & registration */}
      <MobileStickyBar onOpenRegister={() => handleOpenRegister()} />

      {/* Registration & Pre-enrollment Dialog */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={handleCloseRegister}
        preselectedProgram={selectedProgram}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AcademyApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}

