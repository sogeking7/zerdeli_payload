'use server'

import { News } from '@/payload-types'
import config from '@payload-config'
import { getPayload } from 'payload'

export default async function getOtherNewsById(id: News['id']) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  return await payload.find({
    collection: 'news',
    where: {
      id: {
        not_in: [id],
      },
    },
    limit: 3,
    sort: '-publishedDate',
  })
}
