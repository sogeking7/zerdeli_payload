"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

// -- Типы для данных, полученных от серверного компонента --
interface SidebarLink {
  label: string;
  href: string;
}
interface Document {
  title: string;
  file: {
    url: string;
  };
}
interface Section {
  id: string;
  title: string;
  description: string;
  documents: Document[];
}
interface PageProps {
  sidebarLinks: SidebarLink[];
  sections: Section[];
}

// -- Иконки (можно вынести в отдельные файлы) --
const BreadcrumbSeparator = () => ( <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 6" stroke="black" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const PlusIcon = () => ( <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 16H27M16 5V27" stroke="black" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const MinusIcon = () => ( <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 16H27" stroke="black" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> );
const PDFIcon = () => ( <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 flex-shrink-0"><rect width={48} height={48} rx={8} fill="white" /><path d="M32.5537 37.9175H15.4466C14.2609 37.9175 13.2998 36.9565 13.2998 35.7708V12.1468C13.2998 10.9611 14.2609 10 15.4466 10H25.8261L34.7004 18.8743V35.7697C34.7004 36.9554 33.7393 37.9165 32.5537 37.9165V37.9175Z" fill="#292929" /><path d="M34.7004 18.8743H27.3067C26.4892 18.8743 25.8262 18.2112 25.8262 17.3938V10L34.7004 18.8743Z" fill="#656565" /><path d="M27.1274 23.5976H30.3388V24.4903H28.0201V25.82H29.8943V26.7089H28.0201V28.9313H27.1274V23.5976Z" fill="white" /><path d="M21.9409 23.5976H23.641C24.7016 23.6791 25.3486 24.0717 25.8696 25.0088C26.1758 25.3891 26.2523 25.8077 26.2523 26.2645C26.2523 26.7238 26.1758 27.1435 26.0227 27.5238C25.8696 27.9041 25.3486 28.4609 24.2892 28.9017C23.9102 28.9313 23.641 28.9313H21.9409V23.5976ZM23.641 28.0905H22.8484V24.4384H23.641C25.3078 24.4384 25.3078 28.0905 23.641 28.0905Z" fill="white" /><path d="M17.2095 23.5976H19.4133C20.2887 23.6964 20.8542 24.1903 21.0838 24.494C21.1986 24.8755 21.1986 25.3348 21.0468 26.1423C20.7961 26.5793 20.1381 26.9917 19.8393 27.0386C19.5763 27.0682 19.4133 27.0682H18.1021V28.9313H17.2095V23.5976ZM19.3763 26.2349H18.1021V24.4347H19.3763C20.2986 24.4347 20.2986 26.2349 19.3763 26.2349Z" fill="white" /></svg> );

// -- Компонент для ссылки на документ --
const DocumentLink = ({ title, href }: { title: string, href: string }) => (
  <Link href={href} target="_blank" className="flex items-center w-full sm:w-auto max-w-sm gap-6 p-3 rounded-lg bg-[#4aa30a]/[0.08] hover:bg-[#4aa30a]/[0.15] transition-colors">
    <PDFIcon />
    <p className="text-sm font-medium text-black">{title}</p>
  </Link>
);

// -- Компонент для секции-аккордеона --
interface AccordionSectionProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}
const AccordionSection = ({ title, isOpen, onClick, children }: AccordionSectionProps) => (
  <div className="flex flex-col border-b border-black/10 pb-8">
    <div onClick={onClick} className="flex items-center justify-between w-full cursor-pointer">
      <p className="text-2xl md:text-[28px] font-semibold text-black pr-4">{title}</p>
      <button aria-label={isOpen ? "Свернуть" : "Развернуть"}>{isOpen ? <MinusIcon /> : <PlusIcon />}</button>
    </div>
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] pt-8' : 'max-h-0'}`}>{children}</div>
  </div>
);

// -- Основной компонент страницы --
export default function AdmissionRulesClientPage({ sidebarLinks, sections }: PageProps) {
  const t = useTranslations('AdmissionRulesPage');
  const pathname = usePathname();
  const [openSectionId, setOpenSectionId] = useState<string | null>(sections[0]?.id || null);

  const handleToggleSection = (id: string) => {
    setOpenSectionId(openSectionId === id ? null : id);
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-2 text-sm pt-8 mb-8">
          <Link href="/" className="text-black/30 hover:text-black/60">{t('breadcrumb.home')}</Link>
          <BreadcrumbSeparator />
          <span className="text-black/80">{t('breadcrumb.admission')}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-12">{t('pageTitle')}</h1>
        <div className="w-full h-px bg-black/10 mb-12"></div>
        <div className="flex flex-col lg:flex-row gap-16">
          <aside className="w-full lg:w-1/4">
            <nav className="flex flex-col gap-6">
              {sidebarLinks.map(link => (
                <Link key={link.href} href={link.href} className={`text-base ${pathname === link.href ? 'text-[#4aa30a] font-semibold' : 'text-black/80 hover:text-black'}`}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </aside>
          <main className="w-full lg:w-3/4">
            <div className="flex flex-col gap-8">
              <h2 className="text-[40px] font-semibold text-black">{t('title')}</h2>
              <div className="flex flex-col gap-8">
                {sections.map(section => (
                  <AccordionSection
                    key={section.id}
                    title={section.title}
                    isOpen={openSectionId === section.id}
                    onClick={() => handleToggleSection(section.id)}
                  >
                    <div className="flex flex-col gap-8">
                      <p className="text-base text-black">{section.description}</p>
                      {section.documents.length > 0 && (
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                          {section.documents.map((doc, index) => (
                            <DocumentLink key={index} title={doc.title} href={doc.file.url} />
                          ))}
                        </div>
                      )}
                    </div>
                  </AccordionSection>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
