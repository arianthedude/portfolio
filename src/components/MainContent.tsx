import { ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ExperienceItem, ProjectItem } from '../types';

interface MainContentProps {
  professionalSummary: string;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  selectedSkill: string | null;
}

export default function MainContent({
  professionalSummary,
  experience,
  projects,
  selectedSkill,
}: MainContentProps) {

  // Helper to check if item is active/relevant for the filter
  const isExperienceHighlighted = (item: ExperienceItem) => {
    if (!selectedSkill) return false;
    return item.tags.some(tag => tag.toLowerCase() === selectedSkill.toLowerCase());
  };

  const isProjectHighlighted = (item: ProjectItem) => {
    if (!selectedSkill) return false;
    return item.tags.some(tag => tag.toLowerCase() === selectedSkill.toLowerCase());
  };

  return (
    <div className="md:w-[70%] p-6 flex flex-col gap-12 bg-white print:w-[70%] print:p-4">
      {/* Professional Summary */}
      <section id="summary" className="scroll-mt-24 flex flex-col gap-3">
        <h2 className="font-display font-bold text-lg text-[#091426] border-b border-[#e0e3e5] pb-2 uppercase tracking-wider">
          Professional Summary
        </h2>
        <p className="font-sans text-[15px] leading-relaxed text-[#45474c] mt-2">
          {professionalSummary}
        </p>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="scroll-mt-24 flex flex-col gap-3">
        <h2 className="font-display font-bold text-lg text-[#091426] border-b border-[#e0e3e5] pb-2 uppercase tracking-wider">
          Experience
        </h2>
        <div className="flex flex-col gap-8 mt-4 relative">
          {experience.map((exp, index) => {
            const isHighlighted = isExperienceHighlighted(exp);
            return (
              <div
                key={exp.id}
                className={`relative pl-8 timeline-line transition-all duration-300 ${
                  selectedSkill && !isHighlighted ? 'opacity-40 blur-[0.5px]' : 'opacity-100'
                }`}
              >
                {/* Timeline Dot & Line Connectors */}
                <span className="timeline-dot" />
                
                <div className="flex flex-col gap-1">
                  {/* Title and Period */}
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="font-sans font-semibold text-[17px] text-[#4b41e1]">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-[11px] text-[#45474c] bg-[#f2f4f6] px-2 py-0.5 rounded border border-[#e0e3e5]">
                      {exp.period}
                    </span>
                  </div>

                  {/* Company & Location */}
                  <h4 className="font-sans font-semibold text-[14px] text-[#091426] mt-0.5">
                    {exp.company} • {exp.location}
                  </h4>

                  {/* Bullets List */}
                  <ul className="list-disc list-outside ml-4 mt-2.5 font-sans text-[14px] text-[#45474c] flex flex-col gap-2 leading-relaxed">
                    {exp.bullets.map((bullet, bIdx) => {
                      // Highlight matching words if a skill is selected
                      if (selectedSkill && bullet.toLowerCase().includes(selectedSkill.toLowerCase())) {
                        const regex = new RegExp(`(${selectedSkill})`, 'gi');
                        const parts = bullet.split(regex);
                        return (
                          <li key={bIdx}>
                            {parts.map((part, pIdx) => 
                              part.toLowerCase() === selectedSkill.toLowerCase() ? (
                                <mark key={pIdx} className="bg-[#e2dfff] text-[#4b41e1] font-medium px-1 rounded-sm">
                                  {part}
                                </mark>
                              ) : (
                                part
                              )
                            )}
                          </li>
                        );
                      }
                      return <li key={bIdx}>{bullet}</li>;
                    })}
                  </ul>

                  {/* Role Tags Footer for filter transparency */}
                  <div className="flex flex-wrap gap-1.5 mt-3 print:hidden">
                    {exp.tags.map(tag => (
                      <span
                        key={tag}
                        className={`font-mono text-[9px] px-2 py-0.5 rounded-full border ${
                          selectedSkill === tag
                            ? 'bg-[#4b41e1]/10 text-[#4b41e1] border-[#4b41e1]/30 font-bold'
                            : 'bg-white text-[#75777d] border-[#e0e3e5]'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="scroll-mt-24 flex flex-col gap-3">
        <h2 className="font-display font-bold text-lg text-[#091426] border-b border-[#e0e3e5] pb-2 uppercase tracking-wider">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {projects.map((proj) => {
            const isHighlighted = isProjectHighlighted(proj);
            return (
              <div
                key={proj.id}
                className={`border rounded-lg p-5 flex flex-col gap-3.5 transition-all duration-300 relative bg-white ${
                  selectedSkill && !isHighlighted
                    ? 'opacity-40 border-[#e0e3e5] blur-[0.5px]'
                    : isHighlighted
                    ? 'border-[#4b41e1] shadow-md ring-1 ring-[#4b41e1]/20 scale-[1.02]'
                    : 'border-[#e0e3e5] hover:border-[#4b41e1]/80 hover:shadow-sm'
                }`}
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-sans font-semibold text-[16px] text-[#4b41e1]">
                    {proj.title}
                  </h3>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#75777d] hover:text-[#4b41e1] transition-colors p-0.5 cursor-pointer"
                    title="View project source"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <p className="font-sans text-[13px] leading-relaxed text-[#45474c]">
                  {proj.description}
                </p>

                {/* Tech footers */}
                <div className="mt-auto pt-3 border-t border-[#f2f4f6] flex flex-wrap gap-1 items-center text-[11px] font-mono text-[#75777d]">
                  {proj.tags.map((tag, idx) => (
                    <span key={tag} className="inline-flex items-center">
                      <span className={`${selectedSkill === tag ? 'text-[#4b41e1] font-bold' : ''}`}>
                        {tag}
                      </span>
                      {idx < proj.tags.length - 1 && <span className="mx-1.5 text-[#c5c6cd]">•</span>}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
