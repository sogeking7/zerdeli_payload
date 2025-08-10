'use server'

import config from '@payload-config'
import { getPayload } from 'payload'

export default async function getNews(page: number, limit: number) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  return await payload.find({
    collection: 'news',
    sort: '-publishedDate',
    page,
    limit,
  })
}
