'use server'

import config from '@payload-config'
import { getPayload } from 'payload'

export default async function getSchoolAbouts(minimal: boolean = false) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

    return await payload.find({
    collection: 'school-about',
    ...(minimal && {
      select: {
        slug: true,
        title: true,
          titleKk: true,
          titleEn: true,
      },
    }),
  })
}
