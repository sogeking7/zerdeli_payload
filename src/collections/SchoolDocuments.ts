import type { CollectionConfig } from 'payload'
import { BlocksFeature, FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { TableOfContents } from '@/blocks/TableOfContents/config'

export const SchoolDocuments: CollectionConfig = {
  slug: 'school-documents',
  labels: {
    singular: 'School Document',
    plural: 'School Documents',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
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
