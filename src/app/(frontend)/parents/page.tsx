import Container from '@/components/custom/Container'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import ExamBanner from '@/components/exambanner-section'
import { Suspense } from 'react'
import DocsList from '@/features/docs/DocsList'
import DocsListSkeleton from '@/features/docs/DocsListSkeletons'
import getSchoolParents from '@/api/getSchoolParents'

export default function SchoolParentsPage() {
    return (
    <>
      <section id="docs">
        <Container>
          <div className="pt-16">
            <Breadcrumb className="pt-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Родителям</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
              <h1 className="mt-8 md:mt-10 mb-10 md:text-4xl text-2xl font-semibold">Родилетям</h1>
              <Suspense fallback={<DocsListSkeleton />}>
                  <DocsList getDocs={getSchoolParents}  />
            </Suspense>
          </div>
        </Container>
      </section>
      <ExamBanner />
    </>
  )
}
