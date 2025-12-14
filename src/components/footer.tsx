'use client'

import Link from 'next/link'
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">HOUSE OF</span>
              <span className="text-foreground"> LIONS</span>
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Elite MMA training in a welcoming family atmosphere. Train with pride, fight with purpose.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4 uppercase text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/book-trial" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Book Free Trial
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-foreground mb-4 uppercase text-sm tracking-wide">Our Programs</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">MMA Training</li>
              <li className="text-muted-foreground text-sm">Striking</li>
              <li className="text-muted-foreground text-sm">Grappling</li>
              <li className="text-muted-foreground text-sm">Fitness & Conditioning</li>
              <li className="text-muted-foreground text-sm">Kids MMA</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4 uppercase text-sm tracking-wide">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>123 Fighter Street, Gym City, ST 12345</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>info@houseoflionsmma.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} House Of Lions MMA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
