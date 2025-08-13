'use server';

import config from '@payload-config';
import { getPayload } from 'payload';
import { SchoolDocument } from '@/payload-types'; // Используем общий тип для документов

export default async function getAdmissionSections() {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });

  // 1. Получаем все документы из общей коллекции 'school-documents'
  const { docs } = await payload.find({
    collection: 'school-documents',
    limit: 100,
  });

  const documents = docs as SchoolDocument[];

  // 2. Фильтруем документы по нужным категориям
  const grantDocs = documents
    .filter((doc) => doc.category === 'grantRules')
    .map((doc) => ({ title: doc.title, file: { url: doc.url } }));

  const paidDocs = documents
    .filter((doc) => doc.category === 'paidEducation')
    .map((doc) => ({ title: doc.title, file: { url: doc.url } }));

  // 3. Формируем данные для секций-аккордеонов
  const sectionsData = [
    {
      id: 'grantRules',
      title: 'Правила присуждения и размеров образовательного гранта',
      description: 'Основной документ, регулирующий деятельность образовательного учреждения.',
      documents: grantDocs,
    },
    {
      id: 'paidEducation',
      title: 'Правила приема на платное обучение',
      description: 'Здесь описаны условия и порядок приема учащихся на платной основе.',
      documents: paidDocs,
    },
  ];

  return sectionsData;
}
