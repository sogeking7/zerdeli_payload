'use client'

import Container from '@/components/custom/Container'
import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

const faqData = [
  {
    question: 'В какое время проводятся занятия?',
    answer: 'Занятие начинается в 8:45 утра и заканчивается в 5:00 вечера.',
  },
  {
    question: 'Какова квалификация преподавателей? Могут ли они дать качественное образование?',
    answer:
      'Все наши преподаватели имеют высшую квалификационную категорию и многолетний опыт работы. Мы тщательно отбираем лучших специалистов, чтобы обеспечить высокое качество образования.',
  },
  {
    question: 'Каково качество школьного питания?',
    answer:
      'Мы предлагаем сбалансированное трехразовое питание, разработанное совместно с диетологами. Все блюда готовятся на нашей кухне из свежих и качественных продуктов.',
  },
  {
    question:
      'Есть ли гарантия качества образования? Через сколько времени у ученика будет прогресс?',
    answer:
      'Мы гарантируем индивидуальный подход к каждому ученику. Прогресс зависит от многих факторов, но первые результаты, как правило, заметны уже через 2-3 месяца регулярных занятий.',
  },
  {
    question: 'В чем отличие от других школ?',
    answer:
      'Наше ключевое отличие — это углубленное изучение IT-дисциплин, проектная деятельность и развитие soft skills, что готовит учеников к профессиям будущего.',
  },
]

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

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Container>
      <div className="my-12">
        <h2 className="text-2xl md:text-4xl text-center mb-12">
          Часто задаваемые
          <br />
          вопросы
        </h2>

        <div className="w-full flex flex-col gap-4">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}
