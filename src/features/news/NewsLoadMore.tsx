'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import NewsCard from '@/features/news/NewsCard'
import type { News } from '@/payload-types'
import { useTranslations } from 'next-intl'
import getNews from '@/api/getNews'
import { Skeleton } from '@/components/ui/skeleton'

type Props = {
  initialDocs: News[]
  total: number
  pageSize: number
  initialPage?: number
}

export default function NewsLoadMore({ initialDocs, total, pageSize, initialPage = 1 }: Props) {
  const [items, setItems] = React.useState<News[]>(initialDocs)
  const [page, setPage] = React.useState<number>(initialPage)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const t = useTranslations('NewsPage')

  const allLoaded = items.length >= total

  const onLoadMore = async () => {
    if (loading || allLoaded) return
    setLoading(true)
    setError(null)
    try {
      const nextPage = page + 1
      const data = await getNews(nextPage, pageSize)
      setItems((prev) => [...prev, ...data.docs])
      setPage(nextPage)
    } catch (e: any) {
      setError(e?.message ?? 'Failed to load more news')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {items.map((article) => (
          <NewsCard key={article.id} news={article} />
        ))}

        {/* Show skeleton placeholders while loading next page */}
        {loading &&
          Array.from({ length: pageSize }).map((_, i) => (
            <div key={`skeleton-${i}`} className="space-y-4">
              <Skeleton className="w-full h-48 rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
      </div>

      {!allLoaded && !loading && (
        <div className="mt-20 flex justify-center">
          <Button size="lg" variant="secondary_green" onClick={onLoadMore}>
            {t('buttons.loadMore')}
          </Button>
        </div>
      )}

      {error && <p className="mt-4 text-center text-sm text-red-600">{error}</p>}
    </>
  )
}
