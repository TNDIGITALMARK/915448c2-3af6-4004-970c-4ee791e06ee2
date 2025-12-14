import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CoachProfile } from '@/components/coach-profile'
import { TestimonialCarousel } from '@/components/testimonial-carousel'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Target, Heart, Award, Users } from 'lucide-react'

export const dynamic = 'force-dynamic'

const coaches = [
  {
    name: 'Joey Santos',
    title: 'Head Coach & Founder',
    experience: '15 years coaching experience',
    specialties: ['Brazilian Jiu-Jitsu', 'MMA', 'Competition Training', 'Striking'],
    bio: 'Multiple championship titles and a passion for developing champions at all levels. Joey believes that MMA training is about more than fighting - it\'s about building character, confidence, and community.',
  },
  {
    name: 'Jason Rivera',
    title: 'Youth Development Coach',
    experience: '12 years coaching experience',
    specialties: ['Youth Training', 'Striking', 'Character Development', 'Self-Defense'],
    bio: 'Specializes in building confidence and discipline in young athletes. Jason\'s approach focuses on respect, growth, and creating a positive training environment where kids thrive.',
  },
  {
    name: 'Maria Chen',
    title: 'Striking Coach',
    experience: '10 years coaching experience',
    specialties: ['Muay Thai', 'Boxing', 'Women\'s Training', 'Conditioning'],
    bio: 'Former professional fighter with a focus on technique and power. Maria creates an empowering atmosphere for all students, especially women entering combat sports.',
  },
  {
    name: 'Marcus Thompson',
    title: 'Grappling Specialist',
    experience: '8 years coaching experience',
    specialties: ['Brazilian Jiu-Jitsu', 'Wrestling', 'Submissions', 'Competition Prep'],
    bio: 'Black belt in BJJ with extensive wrestling background. Marcus makes grappling accessible and fun for beginners while pushing advanced students to new levels.',
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
  {
    name: 'Emily Foster',
    review: 'I was nervous about trying MMA as a complete beginner, but the community here is so supportive. Everyone genuinely wants to see you succeed.',
    rating: 5,
  },
]

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from coaching quality to facility maintenance.',
  },
  {
    icon: Heart,
    title: 'Family',
    description: 'We treat every member like family, creating a supportive community where everyone belongs.',
  },
  {
    icon: Award,
    title: 'Growth',
    description: 'We are committed to continuous improvement - both for our students and our gym.',
  },
  {
    icon: Users,
    title: 'Respect',
    description: 'Mutual respect is the foundation of our training environment and community culture.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            About <span className="text-primary">House Of Lions MMA</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            More than just a gym - we're a family dedicated to building strength, confidence, and character through the art of mixed martial arts.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
            Our <span className="text-primary">Story</span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              House Of Lions MMA was founded with a simple but powerful vision: create an elite training facility where anyone, regardless of experience level, can learn, grow, and become the strongest version of themselves.
            </p>
            <p>
              We saw too many gyms that either catered exclusively to professional fighters or treated beginners as an afterthought. We knew there had to be a better way - a place where world-class coaching meets genuine community support.
            </p>
            <p>
              Today, House Of Lions is proud to be a home for complete beginners taking their first steps into martial arts, dedicated athletes preparing for competition, parents seeking character development for their children, and fitness enthusiasts looking to get in the best shape of their lives.
            </p>
            <p>
              What sets us apart isn't just our experienced coaches or state-of-the-art facility - it's our commitment to treating every member like family. When you walk through our doors, you're not just joining a gym. You're joining a pride.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-primary">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do at House Of Lions MMA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Meet Our <span className="text-primary">Coaching Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our coaches are more than instructors - they're mentors, motivators, and dedicated professionals committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              Hear From <span className="text-primary">The Pride</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - here's what our members have to say.
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Community & Culture Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-primary">Community & Culture</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Support System</h3>
              <p className="text-muted-foreground">
                Every member supports each other. We celebrate victories together and push through challenges as a team.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Continuous Learning</h3>
              <p className="text-muted-foreground">
                From white belts to black belts, everyone is always learning and improving. Growth mindset is our culture.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">🏋️</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Dedication to Excellence</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards in coaching, facility cleanliness, and member experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Join The <span className="text-primary">Pride</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the House Of Lions difference for yourself. Book a free trial class and see why we're more than just a gym - we're a family.
          </p>
          <Link href="/book-trial">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg shadow-gold">
              Book Your Free Trial
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
