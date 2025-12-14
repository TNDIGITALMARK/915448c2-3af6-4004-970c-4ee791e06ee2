'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'
import { CheckCircle2, Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function BookTrialPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'MMA Fundamentals',
    experience: 'beginner',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to an API
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-32">
          <Card className="max-w-2xl mx-auto text-center border-primary/20">
            <CardContent className="pt-12 pb-12">
              <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4 text-foreground">Trial Class Booked!</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Thank you for choosing House Of Lions MMA. We've received your trial class request and will contact you within 24 hours to confirm your preferred time.
              </p>
              <p className="text-muted-foreground mb-8">
                Check your email for confirmation details and what to bring to your first class.
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
              >
                Book Another Class
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Book Your <span className="text-primary">Free Trial</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience world-class MMA training with no commitment. Your first class is completely free.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Trial Class Information</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours to schedule your free trial class.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="mt-2"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="mt-2"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(555) 123-4567"
                        className="mt-2"
                      />
                    </div>

                    {/* Program Interest */}
                    <div>
                      <Label htmlFor="program">Which Program Interests You? *</Label>
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                        className="w-full mt-2 px-3 py-2 bg-input border border-border rounded-md text-foreground"
                      >
                        <option value="MMA Fundamentals">MMA Fundamentals</option>
                        <option value="Advanced MMA">Advanced MMA</option>
                        <option value="Striking">Striking (Boxing/Muay Thai)</option>
                        <option value="Grappling">Grappling (BJJ/Wrestling)</option>
                        <option value="Fitness & Conditioning">Fitness & Conditioning</option>
                        <option value="Kids MMA">Kids MMA</option>
                        <option value="Private Lessons">Private Lessons</option>
                        <option value="Women's Self-Defense">Women's Self-Defense</option>
                      </select>
                    </div>

                    {/* Experience Level */}
                    <div>
                      <Label htmlFor="experience">Experience Level *</Label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className="w-full mt-2 px-3 py-2 bg-input border border-border rounded-md text-foreground"
                      >
                        <option value="beginner">Complete Beginner</option>
                        <option value="some-experience">Some Experience (1-2 years)</option>
                        <option value="intermediate">Intermediate (3-5 years)</option>
                        <option value="advanced">Advanced (5+ years)</option>
                      </select>
                    </div>

                    {/* Additional Message */}
                    <div>
                      <Label htmlFor="message">Questions or Preferred Time? (Optional)</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Let us know your preferred day/time or any questions you have..."
                        className="mt-2 min-h-32"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-gold"
                    >
                      Book My Free Trial
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* What to Expect */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl">What To Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Before Your Class</h4>
                    <p className="text-sm text-muted-foreground">
                      Arrive 10 minutes early. Wear comfortable athletic clothing and bring a water bottle.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">During Class</h4>
                    <p className="text-sm text-muted-foreground">
                      We'll introduce you to the basics, ensure proper form, and make sure you feel comfortable and welcome.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">After Class</h4>
                    <p className="text-sm text-muted-foreground">
                      We'll answer any questions and help you choose the right program for your goals.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">123 Fighter Street<br />Gym City, ST 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">info@houseoflionsmma.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Mon-Fri: 6am - 9pm<br />
                        Sat-Sun: 8am - 6pm
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Guarantee */}
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">✓</div>
                    <h4 className="font-bold text-foreground mb-2">No Pressure Guarantee</h4>
                    <p className="text-sm text-muted-foreground">
                      Try your first class with absolutely no commitment or obligation. We want you to experience our gym and community before making any decisions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
