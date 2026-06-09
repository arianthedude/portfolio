/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { portfolioData } from './data';
import { Briefcase, Code, Mail, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      if (sectionId === 'contact') {
        // If "contact" is requested, scroll to sidebar contact region
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Highlight it briefly for context
          contactSection.classList.add('ring-2', 'ring-[#4b41e1]/30', 'rounded-md');
          setTimeout(() => {
            contactSection.classList.remove('ring-2', 'ring-[#4b41e1]/30', 'rounded-md');
          }, 2000);
          return;
        }
      }
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col mt-10 bg-[#f7f9fb] text-[#191c1e] antialiased selection:bg-[#e2dfff] selection:text-[#4b41e1]">
      {/* Scrollable contents anchor at top */}
      <Header
        name={portfolioData.name}
        avatarUrl={portfolioData.avatarUrl}
        onScrollToSection={handleScrollToSection}
        onPrintResume={handlePrintResume}
      />

      {/* Main Resume Container */}
      <main className="w-full max-w-[850px] mx-auto mt-16 flex flex-col md:flex-row min-h-screen border-x border-[#e0e3e5] bg-white shadow-sm mb-16 md:mb-0 print:border-none print:mt-0 print:mb-0 print:shadow-none print:bg-white">
        {/* Left Sidebar (30% width) */}
        <Sidebar
          contact={portfolioData.contact}
          expertise={portfolioData.expertise}
          selectedSkill={selectedSkill}
          onSelectSkill={setSelectedSkill}
          languages={portfolioData.languages}
          education={portfolioData.education}
        />

        {/* Right Main Details (70% width) */}
        <MainContent
          professionalSummary={portfolioData.professionalSummary}
          experience={portfolioData.experience}
          projects={portfolioData.projects}
          selectedSkill={selectedSkill}
        />
      </main>

      {/* Footer Details */}
      <Footer
        github={portfolioData.contact.github}
        website={portfolioData.contact.website}
        name={portfolioData.name}
        title={portfolioData.title}
      />

      {/* Mobile Sticky Bottom Tab Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-40 flex justify-around items-center h-16 px-4 bg-white/95 backdrop-blur-md border-t border-[#e0e3e5] shadow-lg print:hidden">
        <button
          onClick={() => handleScrollToSection('summary')}
          className="flex flex-col items-center justify-center text-[#45474c] hover:text-[#4b41e1] active:scale-95 transition-all cursor-pointer"
        >
          <User size={20} />
          <span className="font-mono text-[9px] font-bold mt-1">Summary</span>
        </button>

        <button
          onClick={() => handleScrollToSection('experience')}
          className="flex flex-col items-center justify-center text-[#45474c] hover:text-[#4b41e1] active:scale-95 transition-all cursor-pointer"
        >
          <Briefcase size={20} />
          <span className="font-mono text-[9px] font-bold mt-1">Experience</span>
        </button>

        <button
          onClick={() => handleScrollToSection('projects')}
          className="flex flex-col items-center justify-center text-[#45474c] hover:text-[#4b41e1] active:scale-95 transition-all cursor-pointer"
        >
          <Code size={20} />
          <span className="font-mono text-[9px] font-bold mt-1">Projects</span>
        </button>

        <button
          onClick={() => handleScrollToSection('contact')}
          className="flex flex-col items-center justify-center text-[#45474c] hover:text-[#4b41e1] active:scale-95 transition-all cursor-pointer"
        >
          <Mail size={20} />
          <span className="font-mono text-[9px] font-bold mt-1">Contact</span>
        </button>
      </nav>
    </div>
  );
}
