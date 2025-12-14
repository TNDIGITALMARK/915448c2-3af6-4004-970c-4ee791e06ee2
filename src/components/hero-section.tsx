'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface HeroSectionProps {
  title: string
  subtitle: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  backgroundImage?: string
  overlay?: boolean
}

export function HeroSection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage,
  overlay = true
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image/Video */}
      {backgroundImage && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      {/* Gradient Overlay */}
      {overlay && (
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
      )}

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground drop-shadow-lg animate-fade-in">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-muted-foreground font-light animate-fade-in-delay">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
          {primaryCta && (
            <Link href={primaryCta.href}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg shadow-gold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {primaryCta.text}
              </Button>
            </Link>
          )}
          {secondaryCta && (
            <Link href={secondaryCta.href}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                {secondaryCta.text}
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  )
}
