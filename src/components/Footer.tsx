import { useTranslation } from "react-i18next";

interface FooterProps {
  github: string;
  website: string;
  name: string;
  title: string;
}

export default function Footer({ github, website, name, title }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { i18n, t } = useTranslation();
  const changeLanguage = (lang: string) => {
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };

  return (
    <footer className="bg-[#f2f4f6] w-full py-8 px-6 text-center flex flex-col gap-3.5 items-center mt-auto border-t border-[#e0e3e5] print:hidden">
      <div className="flex gap-8 mb-1">
        <a
          href={`https://${github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs uppercase tracking-widest text-[#45474c] hover:text-[#4b41e1] transition-all"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/arianthedude-undefined-678597418/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs uppercase tracking-widest text-[#45474c] hover:text-[#4b41e1] transition-all"
        >
          LinkedIn
        </a>
        <a
          href={`https://${website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs uppercase tracking-widest text-[#45474c] hover:text-[#4b41e1] transition-all"
        >
          Portfolio
        </a>
      </div>
      <div className="flex gap-8 mb-1">
        <span
          className="font-mono text-xs uppercase tracking-widest text-[#45474c] hover:text-[#4b41e1] transition-all cursor-pointer "
          onClick={() => changeLanguage("fa")}
        >
          فارسی
        </span>
        <span
          className="font-mono text-xs uppercase tracking-widest text-[#45474c] hover:text-[#4b41e1] transition-all cursor-pointer"
          onClick={() => changeLanguage("en")}
        >
          english
        </span>
        <span
          className="font-mono text-xs uppercase tracking-widest text-[#45474c] hover:text-[#4b41e1] transition-all cursor-pointer"
          onClick={() => changeLanguage("de")}
        >
          deutsch
        </span>
      </div>
      <p className="font-sans text-[13px] pb-10 text-[#75777d]">
        © {currentYear} {name} • {title}
      </p>
    </footer>
  );
}
