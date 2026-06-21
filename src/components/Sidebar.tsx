import { Globe, GraduationCap, Link2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { Education, Language } from "../types";
import { useTranslation } from "react-i18next";
interface SidebarProps {
  contact: {
    email: string;
    location: string;
    github: string;
    website: string;
    phone: string;
  };
  expertise: string[];
  selectedSkill: string | null;
  onSelectSkill: (skill: string | null) => void;
  languages: Language[];
  education: Education[];
}

export default function Sidebar({
  contact,
  expertise,
  selectedSkill,
  onSelectSkill,
  languages,
  education,
}: SidebarProps) {
  const { t } = useTranslation();

  return (
    <aside className="md:w-[30%] bg-[#f2f4f6] p-6 flex flex-col gap-8 print:w-[30%] print:p-4 print:bg-white border-r border-[#e0e3e5] print:border-r">
      {/* Contact Info */}
      <section id="contact" className="flex flex-col gap-3">
        <h2 className="font-display font-bold text-lg text-[#091426] border-b border-[#e0e3e5] pb-2 uppercase tracking-wider">
          {t("sidebar.contact")}
        </h2>
        <div className="flex flex-col gap-3.5 mt-2">
          {/* Email */}
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2.5 group cursor-pointer text-[#45474c] hover:text-[#4b41e1] transition-colors"
          >
            <Mail size={16} className="text-[#4b41e1] shrink-0" />
            <span className="font-sans text-[13px] break-all leading-tight">
              {contact.email}
            </span>
          </a>

          {/* Location */}
          <div className="flex items-center gap-2.5 text-[#45474c]">
            <MapPin size={16} className="text-[#4b41e1] shrink-0" />
            <span className="font-sans text-[13px] leading-tight">
              {contact.location}
            </span>
          </div>

          {/* GitHub */}
          <a
            href={`https://${contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 group cursor-pointer text-[#45474c] hover:text-[#4b41e1] transition-colors"
          >
            <Link2 size={16} className="text-[#4b41e1] shrink-0" />
            <span className="font-sans text-[13px] break-all leading-tight">
              {contact.github}
            </span>
          </a>

          {/* Website */}
          <a
            href={`https://${contact.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 group cursor-pointer text-[#45474c] hover:text-[#4b41e1] transition-colors"
          >
            <Globe size={16} className="text-[#4b41e1] shrink-0" />
            <span className="font-sans text-[13px] break-all leading-tight">
              {contact.website}
            </span>
          </a>
          <a
            href={`tel:${contact.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 group cursor-pointer text-[#45474c] hover:text-[#4b41e1] transition-colors"
          >
            <Phone size={16} className="text-[#4b41e1] shrink-0" />
            <span className="font-sans text-[13px] break-all leading-tight">
              {contact.phone}
            </span>
          </a>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="flex flex-col gap-3">
        <div className="flex justify-between items-baseline border-b border-[#e0e3e5] pb-2">
          <h2 className="font-display font-bold text-lg text-[#091426] uppercase tracking-wider">
            {t("sidebar.expertise")}
          </h2>
          {selectedSkill && (
            <button
              onClick={() => onSelectSkill(null)}
              className="text-[10px] text-[#4b41e1] hover:underline cursor-pointer font-mono uppercase tracking-wider"
            >
              Clear filter
            </button>
          )}
        </div>
        <p className="text-[11px] text-[#75777d] mt-1 font-sans">
          Click any skill below to filter projects and experiences by stack.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {expertise.map((skill) => {
            const isSelected = selectedSkill === skill;
            return (
              <button
                key={skill}
                onClick={() => onSelectSkill(isSelected ? null : skill)}
                className={`font-mono text-[11px] px-2.5 py-1 rounded border transition-all duration-200 cursor-pointer text-left ${
                  isSelected
                    ? "bg-[#4b41e1] text-white border-[#4b41e1] shadow-sm"
                    : "bg-white text-[#45474c] border-[#e0e3e5] hover:bg-[#eceef0]"
                }`}
              >
                {skill}
              </button>
            );
          })}
        </div>
      </section>

      {/* Languages */}
      <section className="flex flex-col gap-3">
        <h2 className="font-display font-bold text-lg text-[#091426] border-b border-[#e0e3e5] pb-2 uppercase tracking-wider">
          {t("sidebar.languages")}
        </h2>
        <div className="flex flex-col gap-2.5 mt-2">
          {languages.map((lang) => (
            <div key={lang.name} className="flex justify-between items-center">
              <span className="font-sans text-[13px] text-[#45474c]">
                {lang.name}
              </span>
              <span
                className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded ${
                  lang.level === "NATIVE" || lang.level === "FLUENT"
                    ? "text-[#4b41e1] bg-[#e2dfff]/60"
                    : "text-[#45474c] bg-[#eceef0]"
                }`}
              >
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="flex flex-col gap-3">
        <h2 className="font-display font-bold text-lg text-[#091426] border-b border-[#e0e3e5] pb-2 uppercase tracking-wider">
          {t("sidebar.education")}
        </h2>
        <div className="flex flex-col gap-4 mt-2">
          {education.map((edu, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex items-start gap-1.5">
                <GraduationCap
                  size={16}
                  className="text-[#4b41e1] grow-0 shrink-0 mt-0.5"
                />
                <h3 className="font-sans font-semibold text-[14px] text-[#091426] leading-tight">
                  {edu.degree}
                </h3>
              </div>
              <p className="font-sans text-[13px] text-[#45474c] pl-5 mt-0.5">
                {edu.school}
              </p>
              <p className="font-mono text-[11px] text-[#75777d] pl-5 mt-1">
                {edu.period}
              </p>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}
