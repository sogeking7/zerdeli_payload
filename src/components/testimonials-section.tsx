'use client'

import React, { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export const TestimonialsSection = ({
  reviews,
}: {
  reviews: {
    title: string
    description: string
  }[]
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [testimonialsPerView, setTestimonialsPerView] = useState(4)

  useEffect(() => {
    const updateTestimonialsPerView = () => {
      const width = window.innerWidth
      if (width < 640) {
        setTestimonialsPerView(1) // Mobile
      } else if (width < 1024) {
        setTestimonialsPerView(2) // Tablet
      } else {
        setTestimonialsPerView(4) // Desktop
      }
    }

    updateTestimonialsPerView() // Set on load
    window.addEventListener('resize', updateTestimonialsPerView)

    return () => window.removeEventListener('resize', updateTestimonialsPerView)
  }, [])
  const maxIndex = Math.max(0, reviews.length - testimonialsPerView)

  const nextTestimonials = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevTestimonials = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto  sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-sm:px-4 text-center mb-8 md:mb-16 relative">
          <h2 className=" font-normal max-md:text-left text-2xl md:text-5xl">
            Почему <span>Zerdeli</span>?
          </h2>
          <div className="flex pb-2 space-x-2 absolute top-0 right-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonials}
              disabled={currentIndex === 0}
              className="shadow-sm bg-white border-none rounded-full"
            >
              <ArrowLeft className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonials}
              disabled={currentIndex >= maxIndex}
              className="shadow-sm bg-white border-none rounded-full"
            >
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / testimonialsPerView)}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className={cn('w-full md:w-1/4 px-4 flex-shrink-0')}>
                  <Card className="shadow-none transition-all !py-0  duration-200 border-0 group">
                    <CardContent className="!p-0 space-y-4">
                      <Image
                        src={`/review-${index + 1}.webp`}
                        alt={'review'}
                        width={600}
                        height={300}
                      />
                      <h3 className="text-black font-normal">{review.title}</h3>
                      <p className="text-black/60 text-sm">{review.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
