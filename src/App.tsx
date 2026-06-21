import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { Briefcase, Code, Mail, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import type {
  Education,
  Language,
  ExperienceItem,
  ProjectItem,
  ContactInfo,
} from "./types";

export default function App() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const { t } = useTranslation();
  const isRTL = document.documentElement.dir === "rtl";

  // SAFE ARRAY EXTRACTION (this prevents .map crashes)
  const expertise = (t("expertise", { returnObjects: true }) ?? []) as string[];
  const languages = (t("languages", { returnObjects: true }) ??
    []) as Language[];
  const education = (t("education", { returnObjects: true }) ??
    []) as Education[];
  const experience = (t("experience", { returnObjects: true }) ??
    []) as ExperienceItem[];
  const projects = (t("projects", { returnObjects: true }) ??
    []) as ProjectItem[];

  const contact = (t("contact", { returnObjects: true }) ?? {}) as ContactInfo;

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });

    if (sectionId === "contact") {
      element.classList.add("ring-2", "ring-[#4b41e1]/30", "rounded-md");
      setTimeout(() => {
        element.classList.remove("ring-2", "ring-[#4b41e1]/30", "rounded-md");
      }, 2000);
    }
  };

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col mt-10 bg-[#f7f9fb] text-[#191c1e] antialiased">
      <Header
        name={t("name")}
        title={t("title")}
        avatarUrl="/assets/img.jpeg"
        onScrollToSection={handleScrollToSection}
        onPrintResume={handlePrintResume}
      />

      <main className="w-full max-w-[850px] mx-auto mt-16 flex flex-col md:flex-row min-h-screen border-x border-[#e0e3e5] bg-white">
        <Sidebar
          contact={contact}
          expertise={expertise}
          selectedSkill={selectedSkill}
          onSelectSkill={setSelectedSkill}
          languages={languages}
          education={education}
        />

        <MainContent
          professionalSummary={t("professionalSummary")}
          experience={experience}
          projects={projects}
          selectedSkill={selectedSkill}
        />
      </main>

      <Footer
        github={contact.github}
        website={contact.website}
        name={t("name")}
        title={t("title")}
      />

      <nav className="md:hidden fixed bottom-0 left-0 w-full z-40 flex justify-around items-center h-16 bg-white border-t">
        <button onClick={() => handleScrollToSection("summary")}>
          <User />
        </button>
        <button onClick={() => handleScrollToSection("experience")}>
          <Briefcase />
        </button>
        <button onClick={() => handleScrollToSection("projects")}>
          <Code />
        </button>
        <button onClick={() => handleScrollToSection("contact")}>
          <Mail />
        </button>
      </nav>
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: isRTL ? ["0%", "100%"] : ["0%", "-100%"],
          }}
          transition={{
            duration: 60,

            ease: "linear",

            repeat: Infinity,
          }}
        >
          <div className="flex shrink-0 bg-amber-300 py-5">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className="mx-4">
                {t("footer.notice")}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
