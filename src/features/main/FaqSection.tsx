'use client'

import Container from '@/components/custom/Container'
import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'

interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
  return (
    <div className="self-stretch flex-grow-0 flex-shrink-0 rounded-2xl bg-[#f6f6f6] transition-all duration-300">
      <div
        onClick={onClick}
        className="flex justify-between items-center w-full p-5 cursor-pointer"
      >
        <p className="md:text-xl font-medium text-left text-black pr-4">{question}</p>
        <button className="flex-shrink-0 size-8 md:size-10 flex items-center justify-center bg-white rounded-full">
          {isOpen ? <Minus className="size-5" /> : <Plus className="size-5" />}
        </button>
      </div>
      {/* Анимированное появление ответа */}
      <div
        className={`overflow-hidden transition-all ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="px-5 pb-5 md:text-lg text-left text-black/80">{answer}</p>
      </div>
    </div>
  )
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const t = useTranslations('HomePage')

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const items = Array.from({ length: 5 }).map((_, index) => ({
    question: t(`faq.items.${index}.q`),
    answer: t(`faq.items.${index}.a`),
  }))

  return (
    <section id="faq">
      <Container>
        <h2 className="text-2xl md:text-4xl text-center mb-10">
          {t('faq.headingTop')}
          <br />
          {t('faq.headingBottom')}
        </h2>

        <div className="w-full flex flex-col gap-4">
          {items.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
