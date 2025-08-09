import Link from 'next/link'
import React from 'react'
import { News } from '@/payload-types'
import { formatDate } from '@/lib/utils'

const MoreNewsCard = ({ news }: { news: News }) => {
  // @ts-ignore
  const text = news.content?.root?.children?.[0]?.children?.[0]?.text ?? ''
  return (
    <Link href={`/news/${news.id}`} className="block group ">
      <div className="flex flex-col justify-start items-start rounded-xl self-stretch gap-2">
        <span className="text-sm text-left text-black/60">{formatDate(news.publishedDate)}</span>
        <h3 className="group-hover:underline self-stretch text-xl font-semibold">{news.title}</h3>
        <div className="text-black/60">{text}</div>
      </div>
    </Link>
  )
}

export default MoreNewsCard
