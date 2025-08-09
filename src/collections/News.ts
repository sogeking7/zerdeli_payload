import type { CollectionConfig } from 'payload'
import { BlocksFeature, FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { TableOfContents } from '@/blocks/TableOfContents/config'

export const News: CollectionConfig = {
  slug: 'news',

  fields: [
    {
      name: 'googleDriveImageId',
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
      name: 'publishedDate',
      type: 'date',
      required: true,
    },
  ],
}
