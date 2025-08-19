'use client'

import * as React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ScrollArea } from '@/components/ui/scroll-area'
import type { SchoolAbout, SchoolAdmission, SchoolParent } from '@/payload-types'
import Link from 'next/link'
import { RichText } from '@/components/RichText'
import { FileText } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useLocale } from 'next-intl'

type DocsListClientProps = {
  docs: SchoolAbout[] | SchoolAdmission[] | SchoolParent[]
}

export default function DocsListClient({ docs }: DocsListClientProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
    const locale = useLocale()

    const handleSetParam = (key: string, newVal: string) => {
        const newSearchParams = new URLSearchParams(searchParams.toString())
        newSearchParams.set(key, newVal)
        router.push(`${pathname}?${newSearchParams.toString()}`)
    }

  const searchTabId = searchParams.get('tabId')

  const [activeTab, setActiveTab] = React.useState(searchTabId || '')

  if (!docs || docs.length === 0) {
    return <p className="text-muted-foreground">Документы пока отсутствуют.</p>
  }
    const getLocalizedTitle = (doc: any, currentLocale: string) => {
        switch (currentLocale) {
            case 'kk':
                return doc.titleKk || doc.title
            case 'en':
                return doc.titleEn || doc.title
            default:
                return doc.title
        }
    }

    const getLocalizedContent = (doc: any, currentLocale: string) => {
        switch (currentLocale) {
            case 'kk':
                return doc.contentKk || doc.content
            case 'en':
                return doc.contentEn || doc.content
            default:
                return doc.content
        }
    }
  return (
    <Tabs
      value={activeTab}
      onValueChange={(v) => {
        setActiveTab(v)
        handleSetParam('tabId', v)
      }}
      orientation="vertical"
      className="w-full"
    >
      <div className="flex flex-col lg:flex-row gap-12 w-full">
        {/* Sidebar - Mobile: horizontal scroll, Desktop: vertical */}
        <div className="lg:w-1/4 w-full">
          <TabsList className="!p-0 flex-col items-start space-y-2 space-x-0 bg-transparent shadow-none w-full pr-4 h-fit overflow-x-auto pb-0">
            {docs.map((doc) => (
              <TabsTrigger
                key={doc.id}
                value={doc.id.toString()}
                className="lg:w-full text-left !px-0 w-auto flex-shrink-0 lg:flex-shrink justify-start data-[state=inactive]:!text-black/80 data-[state=active]:!text-[#4AA30A] data-[state=active]:bg-muted whitespace-nowrap lg:whitespace-normal text-sm lg:text-base py-2"
              >
                  {getLocalizedTitle(doc, locale)}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Content */}
        <div className="lg:w-3/4 w-full min-h-0">
          <h2 className="md:text-3xl mb-8 text-xl font-semibold">
              {getLocalizedTitle(docs.find((d) => d.id.toString() === activeTab), locale)}
          </h2>
          {docs.map((doc) => (
            <TabsContent key={doc.id} value={doc.id.toString()} className="mt-0 h-full">
              <ScrollArea className="h-[400px] lg:h-[600px] pr-2 lg:pr-4">
                <Accordion type="single" collapsible className="w-full">
                  {doc.accordions?.map((accordion, i) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger className="border-b text-left">
                          {getLocalizedTitle(accordion, locale)}
                      </AccordionTrigger>
                      <AccordionContent>
                        <article className="prose prose-sm lg:prose text-black max-w-none">
                            {getLocalizedContent(accordion, locale)  && (
                                <RichText data={getLocalizedContent(accordion, locale)} />
                            )}
                        </article>

                        {accordion.files && accordion.files?.length > 0 && (
                          <ul className="!p-0 !list-none space-y-2 lg:space-y-3 mt-4">
                            {accordion.files.map((file, idx) => (
                              <li key={idx}>
                                <Link
                                  href={`https://drive.google.com/file/d/${file.fileId}/view`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline block"
                                >
                                  <div className="flex gap-2 lg:gap-4 w-max pl-2 lg:pl-3 pr-3 lg:pr-6 py-2 lg:py-3 items-center rounded-sm bg-[#4AA30A]/10 hover:bg-[#4AA30A]/20 transition-colors">
                                    <div className="bg-white p-1.5 lg:p-2 rounded-sm flex-shrink-0">
                                      <FileText className="size-3 lg:size-4" />
                                    </div>
                                    <span className="text-xs lg:text-sm text-black truncate">
                                      {file.fileName}
                                    </span>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ScrollArea>
            </TabsContent>
          ))}
        </div>
      </div>
    </Tabs>
  )
}
