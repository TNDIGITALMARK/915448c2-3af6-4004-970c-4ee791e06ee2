import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProgramCard } from '@/components/program-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

const allPrograms = [
  {
    title: 'MMA Fundamentals',
    description: 'Perfect for complete beginners. Learn the basics of striking, grappling, and self-defense in a supportive environment.',
    price: '$129',
    features: [
      'Complete beginner friendly',
      'Basic striking techniques',
      'Fundamental grappling',
      'Self-defense essentials',
      '3 classes per week',
      'Personal coaching attention',
      'Equipment provided',
    ],
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800',
  },
  {
    title: 'Advanced MMA',
    description: 'Competitive training for experienced fighters preparing for tournaments and professional fights.',
    price: '$179',
    features: [
      'Competition preparation',
      'Advanced striking combos',
      'Advanced grappling techniques',
      'Sparring sessions',
      'Unlimited class access',
      'Fight strategy coaching',
      'Video analysis',
    ],
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800',
  },
  {
    title: 'Striking (Boxing/Muay Thai)',
    description: 'Master the art of striking with world-class boxing and Muay Thai training.',
    price: '$119',
    features: [
      'Boxing fundamentals',
      'Muay Thai techniques',
      'Pad work & mitt training',
      'Footwork & defense',
      '3-4 classes per week',
      'Cardio conditioning',
      'All levels welcome',
    ],
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800',
  },
  {
    title: 'Grappling (BJJ/Wrestling)',
    description: 'Learn Brazilian Jiu-Jitsu and wrestling techniques from submission specialists.',
    price: '$119',
    features: [
      'Brazilian Jiu-Jitsu',
      'Wrestling techniques',
      'Submission training',
      'Takedowns & control',
      '3-4 classes per week',
      'Gi and No-Gi training',
      'All belt levels',
    ],
    image: 'https://images.unsplash.com/photo-1555597408-26bc8e548a46?q=80&w=800',
  },
  {
    title: 'Fitness & Conditioning',
    description: 'Get in the best shape of your life with MMA-inspired functional fitness training.',
    price: '$99',
    features: [
      'High-intensity workouts',
      'Functional strength training',
      'MMA-style cardio',
      'Core strengthening',
      'Unlimited classes',
      'No sparring required',
      'All fitness levels',
    ],
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=800',
  },
  {
    title: 'Kids MMA (Ages 6-14)',
    description: 'Build confidence, discipline, and fitness in a fun, safe environment designed for youth.',
    price: '$89',
    features: [
      'Ages 6-14 welcome',
      'Character development',
      'Anti-bullying training',
      'Self-defense skills',
      'Fitness & coordination',
      'Discipline & respect',
      'Fun, engaging classes',
    ],
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800',
  },
  {
    title: 'Private Lessons',
    description: 'One-on-one training with expert coaches tailored to your specific goals and schedule.',
    price: '$150',
    features: [
      'Personalized training plan',
      'Flexible scheduling',
      'Individual attention',
      'Rapid skill development',
      'Per session pricing',
      'All disciplines available',
      'Perfect for busy schedules',
    ],
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800',
  },
  {
    title: 'Women\'s Self-Defense',
    description: 'Empowering self-defense training specifically designed for women in a supportive environment.',
    price: '$99',
    features: [
      'Women-only classes',
      'Practical self-defense',
      'Situational awareness',
      'Confidence building',
      'Safe environment',
      '2 classes per week',
      'All experience levels',
    ],
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=800',
  },
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Training Programs</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From complete beginners to professional fighters, we offer comprehensive training programs designed to help you achieve your goals.
          </p>
          <Link href="/book-trial">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg shadow-gold">
              Book Your Free Trial
            </Button>
          </Link>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPrograms.map((program, index) => (
              <ProgramCard
                key={index}
                {...program}
                ctaHref="/book-trial"
                ctaText="Book Free Trial"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Every Membership <span className="text-primary">Includes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-4xl mb-4">🥋</div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Equipment Access</h3>
              <p className="text-muted-foreground">Full access to all training equipment including bags, mats, and protective gear.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Community Support</h3>
              <p className="text-muted-foreground">Join a welcoming family atmosphere where everyone supports each other's growth.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Online Resources</h3>
              <p className="text-muted-foreground">Access to training videos, technique breakdowns, and workout plans.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Progress Tracking</h3>
              <p className="text-muted-foreground">Regular assessments and feedback to monitor your development.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Personal Coaching</h3>
              <p className="text-muted-foreground">Individual attention and coaching tailored to your specific goals.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Open Gym Time</h3>
              <p className="text-muted-foreground">Extended hours for additional practice and training outside of classes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-foreground">Do I need prior experience?</h3>
              <p className="text-muted-foreground">Not at all! We welcome complete beginners and design our fundamentals programs specifically for people with zero experience. Our coaches will guide you every step of the way.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-foreground">What should I bring to my first class?</h3>
              <p className="text-muted-foreground">Just wear comfortable athletic clothing and bring a water bottle. We provide all training equipment for your trial class. Once you join, we'll help you get the gear you need.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-foreground">Can I try multiple programs?</h3>
              <p className="text-muted-foreground">Absolutely! Many members cross-train in multiple disciplines. We encourage trying different programs to find what you enjoy most and develop well-rounded skills.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-foreground">Are there contracts or commitments?</h3>
              <p className="text-muted-foreground">We offer both month-to-month and discounted annual memberships. No pressure - choose what works best for your situation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready To <span className="text-primary">Get Started?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your free trial class today and experience the House Of Lions difference. No commitment required.
          </p>
          <Link href="/book-trial">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg shadow-gold">
              Book Your Free Trial Class
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
