'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface ProgramCardProps {
  title: string
  description: string
  price: string
  features: string[]
  image?: string
  ctaText?: string
  ctaHref?: string
}

export function ProgramCard({
  title,
  description,
  price,
  features,
  image,
  ctaText = 'Learn More',
  ctaHref = '/programs'
}: ProgramCardProps) {
  return (
    <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-lg border-border bg-card overflow-hidden h-full flex flex-col">
      {/* Image */}
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-2xl text-primary">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        {/* Price */}
        <div className="mb-4">
          <p className="text-3xl font-bold text-foreground">{price}</p>
          <p className="text-sm text-muted-foreground">per month</p>
        </div>

        {/* Features List */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Link href={ctaHref} className="w-full">
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
          >
            {ctaText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
