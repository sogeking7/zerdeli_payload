import type { CollectionConfig } from 'payload'
import { BlocksFeature, FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { TableOfContents } from '@/blocks/TableOfContents/config'

export const SchoolAdmission: CollectionConfig = {
  slug: 'school-admission',
  labels: {
    singular: 'School Admission',
    plural: 'School Admissions',
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'accordions',
      type: 'array',
      label: 'Accordions',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [
              ...defaultFeatures,
              BlocksFeature({
                blocks: [TableOfContents],
              }),
              FixedToolbarFeature(),
            ],
          }),
        },
        {
          name: 'files',
          type: 'array',
          label: 'Google Drive Files',
          fields: [
            {
              name: 'fileName',
              type: 'text',
              label: 'Google Drive File Name',
              required: true,
            },
            {
              name: 'fileId',
              type: 'text',
              label: 'Google Drive File ID',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
