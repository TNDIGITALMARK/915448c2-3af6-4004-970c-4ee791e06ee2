import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { ProgramCard } from '@/components/program-card'
import { CoachProfile } from '@/components/coach-profile'
import { TestimonialCarousel } from '@/components/testimonial-carousel'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Shield, Users, Trophy, Heart } from 'lucide-react'

export const dynamic = 'force-dynamic'

const programs = [
  {
    title: 'MMA Fundamentals',
    description: 'Perfect for beginners. Learn striking, grappling, and self-defense basics.',
    price: '$129',
    features: [
      'Complete beginner friendly',
      'Basic striking & grappling',
      'Self-defense techniques',
      '3 classes per week',
      'Personal attention',
    ],
  },
  {
    title: 'Advanced MMA',
    description: 'Competitive training for experienced fighters looking to compete.',
    price: '$179',
    features: [
      'Competition preparation',
      'Advanced techniques',
      'Sparring sessions',
      'Unlimited classes',
      'Fight strategy coaching',
    ],
  },
  {
    title: 'Kids MMA',
    description: 'Build confidence, discipline, and fitness for ages 6-14.',
    price: '$89',
    features: [
      'Ages 6-14 welcome',
      'Character development',
      'Anti-bullying focus',
      'Fun & engaging',
      'Safe environment',
    ],
  },
]

const coaches = [
  {
    name: 'Joey Santos',
    title: 'Head Coach',
    experience: '15 years coaching experience',
    specialties: ['Brazilian Jiu-Jitsu', 'MMA', 'Competition Training'],
    bio: 'Multiple championship titles and a passion for developing champions at all levels.',
  },
  {
    name: 'Jason Rivera',
    title: 'Youth Development Coach',
    experience: '12 years coaching experience',
    specialties: ['Youth Training', 'Striking', 'Character Development'],
    bio: 'Specializes in building confidence and discipline in young athletes.',
  },
]

const testimonials = [
  {
    name: 'Sarah Martinez',
    review: 'House Of Lions transformed my confidence completely. I went from never throwing a punch to competing in amateur tournaments within two years. The coaches treat everyone like family.',
    rating: 5,
  },
  {
    name: 'Mike Thompson',
    review: 'The coaches treat everyone like family whether you are a complete beginner or have been training for decades. Best gym I have ever trained at.',
    rating: 5,
  },
  {
    name: 'Jessica Chen',
    review: 'My son has grown so much here. Not just physically, but mentally and emotionally. The discipline and respect taught here have changed his life.',
    rating: 5,
  },
  {
    name: 'David Rodriguez',
    review: 'Amazing results physically and mentally. The perfect balance for beginners and advanced fighters. The atmosphere is welcoming yet pushes you to be your best.',
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <HeroSection
        title="Train With Pride. Fight With Purpose."
        subtitle="Elite MMA coaching in a welcoming family atmosphere. From complete beginners to advanced fighters, we build confidence, discipline, and strength."
        primaryCta={{ text: 'Book Free Trial', href: '/book-trial' }}
        secondaryCta={{ text: 'Join The Pride', href: '/programs' }}
        backgroundImage="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2000"
        overlay={true}
      />

      {/* Why House Of Lions Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why Choose <span className="text-primary">House Of Lions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another gym. We're a family dedicated to helping you become the strongest version of yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Expert Coaches</h3>
              <p className="text-muted-foreground">Experienced, respected mentors who care about your journey</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Family Atmosphere</h3>
              <p className="text-muted-foreground">You're not just a number - you're part of the pride</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">All Levels Welcome</h3>
              <p className="text-muted-foreground">From complete beginners to advanced fighters</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Personal Attention</h3>
              <p className="text-muted-foreground">Individual focus to help you reach your goals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-primary">Training Programs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're starting your journey or taking your skills to the next level, we have a program for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} ctaHref="/book-trial" ctaText="Start Training" />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/programs">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8">
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Meet Your <span className="text-primary">Coaches</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our coaches are more than instructors - they're mentors dedicated to your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coaches.map((coach, index) => (
              <CoachProfile key={index} {...coach} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What Our <span className="text-primary">Members Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear from the pride.
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready To <span className="text-primary">Start Your Journey?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join House Of Lions MMA today and discover your strength. We welcome everyone, regardless of experience level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-trial">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg shadow-gold">
                Book Your Free Trial
              </Button>
            </Link>
            <Link href="/programs">
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 py-6 text-lg">
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}