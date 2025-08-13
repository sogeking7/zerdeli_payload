'use server';

import config from '@payload-config';
import { getPayload } from 'payload';
import { SchoolDocument } from '@/payload-types'; // Используем новый тип

export default async function getRegulatoryFrameworkSections() {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });

  const { docs } = await payload.find({
    // ИСПРАВЛЕНО: Обращаемся к единой коллекции 'school-documents'
    collection: 'school-documents',
    limit: 100,
  });

  const documents = docs as SchoolDocument[];

  // Группируем документы по категориям
  const sectionsData = [
    {
      id: 'mainDocuments',
      title: 'Основные документы школы',
      description: 'Здесь вы можете ознакомиться с основными документами...',
      documents: documents.filter(doc => doc.category === 'mainDocuments').map(doc => ({ title: doc.title, file: { url: doc.url } })),
    },
    {
      id: 'safety',
      title: 'Безопасность и охрана здоровья',
      description: 'Документы, касающиеся обеспечения безопасности...',
      documents: documents.filter(doc => doc.category === 'safety').map(doc => ({ title: doc.title, file: { url: doc.url } })),
    },
    {
      id: 'educationalProcess',
      title: 'Документы, регламентирующие образовательный процесс',
      description: 'Правила и положения, которые определяют порядок обучения...',
      documents: documents.filter(doc => doc.category === 'educationalProcess').map(doc => ({ title: doc.title, file: { url: doc.url } })),
    },
    {
      id: 'rights',
      title: 'Права и обязанности',
      description: 'Документы, определяющие права и обязанности...',
      documents: documents.filter(doc => doc.category === 'rights').map(doc => ({ title: doc.title, file: { url: doc.url } })),
    },
  ];

  return sectionsData;
}
