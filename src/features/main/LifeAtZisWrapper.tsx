import LifeAtZisCarousel from '@/features/main/LifeAtZisCarousel'
import getNews from '@/api/getNews'

export default async function LifeAtZisWrapper() {
  const news = await getNews(1, 6)
  return (
    <>
      <LifeAtZisCarousel news={news.docs} />
    </>
  )
}
