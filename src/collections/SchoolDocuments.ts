import type { CollectionConfig } from 'payload'

export const SchoolDocuments: CollectionConfig = {
  slug: 'school-documents', // Новое общее API-имя
  admin: {
    useAsTitle: 'title',
    description: 'Все загружаемые документы для сайта (PDF).',
  },
  upload: {
    staticDir: 'school_docs',
    mimeTypes: ['application/pdf'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Название документа',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      label: 'Категория документа',
      // ИСПРАВЛЕНО: Добавлены все категории в один список
      options: [
        {
          label: 'Правила приема: Грант',
          value: 'grantRules',
        },
        {
          label: 'Правила приема: Платное',
          value: 'paidEducation',
        },
        {
          label: 'Норм. база: Основные документы',
          value: 'mainDocuments',
        },
        {
          label: 'Норм. база: Безопасность',
          value: 'safety',
        },
        {
          label: 'Норм. база: Образовательный процесс',
          value: 'educationalProcess',
        },
        {
          label: 'Норм. база: Права и обязанности',
          value: 'rights',
        },
      ],
    },
  ],
}
