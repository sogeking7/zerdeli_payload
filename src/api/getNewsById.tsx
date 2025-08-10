'use server'

import { News } from '@/payload-types'
import config from '@payload-config'
import { getPayload } from 'payload'

export default async function getNewsById(id: News['id']) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  return await payload.findByID({
    collection: 'news',
    id: id,
  })
}
