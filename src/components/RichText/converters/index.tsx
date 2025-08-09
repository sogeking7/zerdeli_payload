import { type TableOfContents as TableOfContentsProps } from '@/payload-types'
import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import { JSXConvertersFunction, LinkJSXConverter } from '@payloadcms/richtext-lexical/react'
import { TableOfContents } from '@/blocks/TableOfContents/Component'
import { internalDocToHref } from '@/components/RichText/converters/internalLink'
import { headingConverter } from '@/components/RichText/converters/headingConverter'

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<TableOfContentsProps>

export const jsxConverter: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  ...headingConverter,
  blocks: {
    tableOfContents: ({ node }) => <TableOfContents {...node.fields} />,
  },
})
