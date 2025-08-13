// src/app/admission/rules/page.tsx

import React from 'react';
// Предполагается, что вы создадите такие же серверные экшены, как для новостей
import getAdmissionSidebarLinks from '@/actions/getAdmissionSidebarLinks';
import getAdmissionSections from '@/actions/getAdmissionSection';
import AdmissionRulesClientPage from './AdmissionRulesClientPage'; // Наш новый клиентский компонент

// Типизация данных, которые мы ожидаем от Payload CMS
// Важно, чтобы она соответствовала вашим коллекциям в админке
export interface SidebarLink {
  label: string;
  href: string;
}

export interface Document {
  title: string;
  file: {
    url: string;
  };
}

export interface Section {
  id: string;
  title: string;
  description: string;
  documents: Document[];
}

// Это асинхронный Серверный Компонент
export default async function AdmissionRulesPage() {
  // 1. Получаем данные с сервера с помощью ваших экшенов
  const sidebarLinks: SidebarLink[] = await getAdmissionSidebarLinks();
  const sections: Section[] = await getAdmissionSections();

  // 2. Передаем полученные данные в клиентский компонент для отображения
  return <AdmissionRulesClientPage sidebarLinks={sidebarLinks} sections={sections} />;
}
