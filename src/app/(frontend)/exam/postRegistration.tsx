'use server'

import config from '@payload-config'
import { getPayload } from 'payload'

export default async function postRegistration(initialState: any, formData: FormData) {
  const fio_child = formData.get('fio_child')?.toString()
  const fio_parent = formData.get('fio_parent')?.toString()
  const class_name = formData.get('class_name')?.toString()
  const parent_whatsapp_phone = formData.get('parent_whatsapp_phone')?.toString()
  const city = formData.get('city')?.toString()

  if (!fio_child || !fio_parent || !class_name || !parent_whatsapp_phone || !city) {
    return {
      success: false,
      message: 'not ok',
    }
  }

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  try {
    const examRegistrationRequest = await payload.create({
      collection: 'exam_registration_requests',
      data: {
        fio_child,
        fio_parent,
        class_name,
        parent_whatsapp_phone,
        city,
      },
    })
    return {
      success: true,
      message: 'ok',
    }
  } catch (e) {
    return {
      success: false,
      message: 'Internal server error',
    }
  }
}
