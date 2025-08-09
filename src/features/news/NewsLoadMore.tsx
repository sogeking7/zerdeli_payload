'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import NewsCard from '@/features/news/NewsCard'
import type { News } from '@/payload-types'

type Props = {
  initialDocs: News[]
  total: number
  pageSize: number
  initialPage?: number
  // Server action provided by the page (calls Payload directly)
  loadMoreAction: (page: number, limit: number) => Promise<{
    docs: News[]
    total: number
    page: number
  }>
}

export default function NewsLoadMore({
  initialDocs,
  total,
  pageSize,
  initialPage = 1,
  loadMoreAction,
}: Props) {
  const [items, setItems] = React.useState<News[]>(initialDocs)
  const [page, setPage] = React.useState<number>(initialPage)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const allLoaded = items.length >= total

  const onLoadMore = async () => {
    if (loading || allLoaded) return
    setLoading(true)
    setError(null)
    try {
      const nextPage = page + 1
      const data = await loadMoreAction(nextPage, pageSize)
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
      </div>

      {!allLoaded && (
        <div className="mt-20 flex justify-center">
          <Button
            size="lg"
            variant="secondary_green"
            onClick={onLoadMore}
            disabled={loading}
          >
            {loading ? 'Загрузка...' : 'Еще новости'}
          </Button>
        </div>
      )}

      {error && (
        <p className="mt-4 text-center text-sm text-red-600">{error}</p>
      )}
    </>
  )
}
