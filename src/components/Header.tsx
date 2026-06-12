import { FileText, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
  onPrintResume: () => void;
  avatarUrl: string;
  name: string;
}

export default function Header({
  onScrollToSection,
  onPrintResume,
  avatarUrl,
  name,
}: HeaderProps) {
  const [activeSection, setActiveSection] = useState("summary");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "summary", name: "Summary" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" },
  ];
  const { i18n, t } = useTranslation();

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    onScrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#f8fafc]/95 backdrop-blur-md z-50 border-b  border-[#e0e3e5] h-fit print:hidden">
      <div className="flex justify-between items-center px-4 md:px-6 w-full max-w-[850px] mx-auto h-full">
        {/* Profile Info */}
        <div
          className="flex items-center gap-3 cursor-pointer py-2"
          onClick={() => handleNavClick("summary")}
        >
          <img
            src={avatarUrl}
            alt={name}
            className="w-20 h-20 rounded-full object-center border border-[#c5c6cd]"
            referrerPolicy="no-referrer"
          />
          <h1 className="font-display font-extrabold text-[22px] text-[#091426] tracking-tight leading-none">
            {name}
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-mono text-xs font-bold transition-all uppercase tracking-wider relative py-1 cursor-pointer ${
                activeSection === item.id
                  ? "text-[#4b41e1]"
                  : "text-[#45474c] hover:text-[#4b41e1]"
              }`}
            >
              {item.name}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4b41e1]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
          <button
            onClick={onPrintResume}
            className="text-[#45474c] hover:text-[#4b41e1] transition-colors p-1 cursor-pointer flex items-center justify-center"
            title="Download/Print PDF Resume"
          >
            <FileText size={20} />
          </button>
          <div className="group">
            <img src="/assets/language.svg"  alt="" className="w-5 cursor-pointer" />
            <div className="hidden absolute top-14   bg-gray-200 z-10  group-hover:flex flex-col rounded-lg ">
              <button className="hover:bg-gray-300 p-2 rounded-lg" onClick={() => i18n.changeLanguage("en")}>{t('language.english')}</button>

              <button className="hover:bg-gray-300 p-2 rounded-lg" onClick={() => i18n.changeLanguage("fa")}>{t('language.persian')}</button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Actions */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={onPrintResume}
            className="text-[#45474c] hover:text-[#4b41e1] transition-colors p-1 cursor-pointer"
            title="Download/Print PDF Resume"
          >
            <FileText size={20} />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#091426] p-1 cursor-pointer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 w-full bg-[#f8fafc] border-b border-[#e0e3e5] px-6 py-4 flex flex-col gap-4 shadow-sm md:hidden z-40"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-mono text-xs font-bold text-left uppercase tracking-widest py-2 border-b border-[#eceef0] ${
                activeSection === item.id ? "text-[#4b41e1]" : "text-[#45474c]"
              }`}
            >
              {item.name}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  );
}
