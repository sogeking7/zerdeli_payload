import LifeAtZisCarousel from '@/features/main/LifeAtZisCarousel'
import config from '@payload-config'
import { getPayload } from 'payload'

export default async function LifeAtZisWrapper() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const limit = 6

  const news = await payload.find({
    collection: 'news',
    sort: '-publishedDate',
    limit,
    page: 1,
  })

  return (
    <>
      <LifeAtZisCarousel news={news.docs} />
    </>
  )
}
