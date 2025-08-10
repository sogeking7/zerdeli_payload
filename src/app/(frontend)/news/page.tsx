import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import Container from '@/components/custom/Container'

import { useTranslations } from 'next-intl'
import NewsList from '@/features/news/NewsList'
import NewsListSkeleton from '@/features/news/NewsListSkeletons'
import { Suspense } from 'react'

export default function NewsPage() {
  const t = useTranslations('NewsPage')

  return (
    <>
      <section id="news">
        <Container>
          <div className="pt-16">
            <Breadcrumb className="pt-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">{t('breadcrumb.home')}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{t('breadcrumb.news')}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="mt-8 md:mt-10 mb-10 md:text-4xl text-2xl">{t('listPage.title')}</h1>
            <Suspense fallback={<NewsListSkeleton />}>
              <NewsList />
            </Suspense>
          </div>
        </Container>
      </section>
      <div></div>
    </>
  )
}
