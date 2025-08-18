import DocsListClient from './DocsListClient'
import { PaginatedDocs } from 'payload'
import type { SchoolAbout, SchoolAdmission, SchoolParent } from '@/payload-types'

export default async function DocsList({
  getDocs,
}: {
  getDocs: (
    minimal?: boolean | undefined,
  ) => Promise<
    PaginatedDocs<
      SchoolParent | SchoolAbout | SchoolAdmission | { id: number; slug: string; title: string }
    >
  >
}) {
  const docs = await getDocs()
  if (docs?.docs) {
    // @ts-ignore
    return <DocsListClient docs={docs.docs} />
  }
  return null
}
