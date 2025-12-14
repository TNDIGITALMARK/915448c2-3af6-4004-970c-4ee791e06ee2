'use client'

import { Card, CardContent } from '@/components/ui/card'

interface CoachProfileProps {
  name: string
  title: string
  experience: string
  specialties: string[]
  image?: string
  bio?: string
}

export function CoachProfile({
  name,
  title,
  experience,
  specialties,
  image,
  bio
}: CoachProfileProps) {
  return (
    <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-lg border-border bg-card overflow-hidden">
      <div className="relative">
        {/* Coach Image */}
        {image ? (
          <div
            className="h-80 w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        ) : (
          <div className="h-80 w-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <div className="text-6xl font-bold text-primary/30">{name.charAt(0)}</div>
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Name & Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-3xl font-bold mb-1">{name}</h3>
          <p className="text-primary font-semibold uppercase text-sm tracking-wide">{title}</p>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Experience */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">Experience</p>
          <p className="text-base font-semibold text-foreground">{experience}</p>
        </div>

        {/* Specialties */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Specialties</p>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* Bio */}
        {bio && (
          <div>
            <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
