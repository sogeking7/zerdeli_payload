import NewsLoadMore from '@/features/news/NewsLoadMore'
import type { News } from '@/payload-types'
import getNews from '@/api/getNews'

export default async function NewsList() {
  const limit = 6
  const initial = await getNews(1, limit)

  return (
    <NewsLoadMore
      initialDocs={initial.docs as News[]}
      total={initial.totalDocs}
      pageSize={limit}
      initialPage={initial.page ?? 1}
    />
  )
}
