import React from 'react';
import getRegulatoryFrameworkSidebarLinks from '@/actions/getRegulatoryFrameworkSidebarLinks';
import getRegulatoryFrameworkSections from '@/actions/getRegulatoryFrameworkSections';
import RegulatoryFrameworkClientPage from './RegulatoryFrameworkClientPage';

// Определяем типы для данных, которые мы ожидаем от Payload CMS
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
export default async function RegulatoryFrameworkPage() {
  // Получаем данные с сервера с помощью ваших экшенов
  const sidebarLinks: SidebarLink[] = await getRegulatoryFrameworkSidebarLinks();
  const sections: Section[] = await getRegulatoryFrameworkSections();

  // Передаем полученные данные в клиентский компонент для отображения
  return <RegulatoryFrameworkClientPage sidebarLinks={sidebarLinks} sections={sections} />;
}
