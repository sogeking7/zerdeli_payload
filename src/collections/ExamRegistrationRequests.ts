import type { CollectionConfig } from 'payload'

export const ExamRegistrationRequests: CollectionConfig = {
  slug: 'exam_registration_requests',
  labels: {
    singular: 'Exam Registration Request',
    plural: 'Exam Registration Requests',
  },
  fields: [
    {
      name: 'fio_child',
      type: 'text',
      required: true,
    },
    {
      name: 'fio_parent',
      type: 'text',
      required: true,
    },
    {
      name: 'class_name',
      type: 'text',
      required: true,
    },
    {
      name: 'parent_whatsapp_phone',
      type: 'text',
      required: true,
    },
    {
      name: 'city',
      type: 'text',
      required: true,
    },
  ],
}
