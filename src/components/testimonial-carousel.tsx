'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Testimonial {
  name: string
  review: string
  rating: number
  image?: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export function TestimonialCarousel({
  testimonials,
  autoPlay = true,
  autoPlayInterval = 5000
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(nextTestimonial, autoPlayInterval)
    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="border-border bg-card/50 backdrop-blur">
        <CardContent className="p-8 md:p-12">
          {/* Stars */}
          <div className="flex gap-1 mb-6 justify-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 ${
                  i < currentTestimonial.rating
                    ? 'fill-primary text-primary'
                    : 'fill-muted text-muted'
                }`}
              />
            ))}
          </div>

          {/* Review Text */}
          <blockquote className="text-lg md:text-xl text-center mb-6 text-foreground italic leading-relaxed">
            "{currentTestimonial.review}"
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            {currentTestimonial.image ? (
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-primary"
                style={{ backgroundImage: `url(${currentTestimonial.image})` }}
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <span className="text-primary font-bold text-lg">
                  {currentTestimonial.name.charAt(0)}
                </span>
              </div>
            )}
            <p className="font-semibold text-foreground">{currentTestimonial.name}</p>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        onClick={prevTestimonial}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        onClick={nextTestimonial}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary w-8'
                : 'bg-muted hover:bg-primary/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
