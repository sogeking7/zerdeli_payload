import type { CollectionConfig } from 'payload'
import { BlocksFeature, FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { TableOfContents } from '@/blocks/TableOfContents/config'

export const SchoolAbout: CollectionConfig = {
  slug: 'school-about',
  labels: {
    singular: 'School About',
    plural: 'School Abouts',
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
          name: 'titleKk',
          type: 'text',
          required: false,
      },
      {
          name: 'titleEn',
          type: 'text',
          required: false,
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
              name: 'titleKk',
              type: 'text',
              required: false,
          },
          {
              name: 'titleEn',
              type: 'text',
              required: false,
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
              name: 'contentKk',
              type: 'richText',
              required: false,
          },
          {
              name: 'contentEn',
              type: 'richText',
              required: false,
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
