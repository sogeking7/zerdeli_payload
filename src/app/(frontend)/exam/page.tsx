'use client'

import { Button } from '@/components/ui/button'
import Container from '@/components/custom/Container'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import postRegistration from '@/app/(frontend)/exam/postRegistration'
import { useActionState } from 'react'
import { useTranslations } from 'next-intl'

export default function ExamPage() {
  const t = useTranslations('ExamPage')
  const [state, formAction, pending] = useActionState(postRegistration, null)

  if (state?.success) {
    return (
      <section id="exam-registration">
        <Container className="max-sm:px-0">
          <div className="min-h-screen pt-32">
            <div className="mx-auto max-w-md bg-[#4AA30A]/10 p-10 md:rounded-2xl">
              <h2 className="font-semibold text-xl md:text-2xl text-[#4AA30A] text-center">
                {t('success')}
              </h2>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section id="exam-registration">
      <Container className="max-sm:px-0">
        <div className="min-h-screen pt-32">
          <div className="mx-auto max-w-md border bg-white md:rounded-2xl px-6 md:px-10 py-8 md:py-12">
            <h1 className="text-xl md:text-2xl text-center font-semibold mb-6 md:mb-8">
              {t('title')}
            </h1>
            <form action={formAction} className="flex flex-col gap-4">
              <div>
                <label className="required">{t('labels.fioChild')}</label>
                <Input required className="mt-2" type="text" placeholder="" name="fio_child" />
              </div>
              <div>
                <label className="required">{t('labels.fioParent')}</label>
                <Input required className="mt-2" type="text" placeholder="" name="fio_parent" />
              </div>
              <div>
                <label className="required">{t('labels.className')}</label>
                <Input required className="mt-2" type="text" placeholder="" name="class_name" />
              </div>
              <div>
                <label className="required">{t('labels.parentWhatsappPhone')}</label>
                <Input
                  required
                  className="mt-2"
                  type="tel"
                  maxLength={12}
                  placeholder={t('placeholders.whatsapp')}
                  pattern="\+7[0-9]{10}"
                  name="parent_whatsapp_phone"
                />
              </div>
              <div>
                <label className="required">{t('labels.city')}</label>
                <Select required name="city">
                  <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value={t('cities.astana')}>{t('cities.astana')}</SelectItem>
                    <SelectItem value={t('cities.zhezkazgan')}>{t('cities.zhezkazgan')}</SelectItem>
                    <SelectItem value={t('cities.shymkent')}>{t('cities.shymkent')}</SelectItem>
                    <SelectItem value={t('cities.atyrau')}>{t('cities.atyrau')}</SelectItem>
                    <SelectItem value={t('cities.taraz')}>{t('cities.taraz')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="pt-6">
                <Button disabled={pending} size="lg" className="w-full">
                  {pending ? t('buttons.loading') : t('buttons.submit')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
