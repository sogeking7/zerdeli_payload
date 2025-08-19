import Container from '@/components/custom/Container'
import * as React from 'react'

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
import getSchoolAbouts from '@/api/getSchoolAbouts'
import {useLocale} from "next-intl";
import { useRouter, useSearchParams } from 'next/navigation'



export default function SchoolAboutPage() {
    const locale = useLocale()
    const searchParams = useSearchParams()
    const tabId = searchParams.get('tabId') || null

    const getLocalizedTitle = (doc: any, currentLocale: string) => {
        switch (currentLocale) {
            case 'kk':
                return doc?.titleKk || doc?.title
            case 'en':
                return doc?.titleEn || doc?.title
            default:
                return doc?.title
        }
    }

  return (
    <>
      <section id="docs">
        <Container>
          <div className="pt-16">
            <Breadcrumb className="pt-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                    {getLocalizedTitle({ title: 'Главная', titleKk: 'Басты бет', titleEn: 'Home' }, locale)}
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    {getLocalizedTitle({ title: 'О школе', titleKk: 'Мектеп туралы', titleEn: 'About School' }, locale)}
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
              {getLocalizedTitle({ title: 'О школе', titleKk: 'Мектеп туралы', titleEn: 'About School' }, locale)}
            <Suspense fallback={<DocsListSkeleton />}>
              <DocsList getDocs={getSchoolAbouts}  />
            </Suspense>
          </div>
        </Container>
      </section>
      <ExamBanner />
    </>
  )
}
