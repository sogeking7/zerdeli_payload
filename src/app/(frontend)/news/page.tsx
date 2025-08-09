import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import Container from '@/components/custom/Container'

import { getPayload } from 'payload'
import config from '@/payload.config'
import NewsLoadMore from '@/features/news/NewsLoadMore'
import type { News } from '@/payload-types'

// Server action to fetch a specific page (no API route)
async function loadMoreNews(page: number, limit: number) {
  'use server'
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const result = await payload.find({
    collection: 'news',
    sort: '-publishedDate',
    page,
    limit,
  })

  return {
    docs: result.docs as News[],
    total: result.totalDocs,
    page: result.page ?? page,
  }
}

export default async function NewsPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const limit = 6
  const initial = await payload.find({
    collection: 'news',
    sort: '-publishedDate',
    limit,
    page: 1,
  })

  return (
    <>
      <section id="news">
        <Container>
          <div className="pt-16">
            <Breadcrumb className="pt-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Новости</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="mt-8 md:mt-10 mb-10 md:text-4xl text-2xl">
              Новости, анонсы, мероприятия
            </h1>

            <NewsLoadMore
              initialDocs={initial.docs as News[]}
              total={initial.totalDocs}
              pageSize={limit}
              initialPage={initial.page ?? 1}
              loadMoreAction={loadMoreNews}
            />
          </div>
        </Container>
      </section>
      <div></div>
    </>
  )
}
