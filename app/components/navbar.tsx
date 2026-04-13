'use client'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import AnimatedWrapper from './AnimatedWrapper'

const MAPS_URL = 'https://maps.google.com/?q=J+Coffee'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (contactRef.current && !contactRef.current.contains(e.target as Node)) {
        setContactOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'About' },
  ]

  return (
    <AnimatedWrapper direction="down" className="sticky top-0 z-50">
      <nav className="bg-white text-slate-900 border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 pt-3 pb-1">

          {/* Row 1 — Logo */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-slate-900 hover:text-slate-700 transition-all duration-200 inline-block"
          >
           JJ COFFEE
          </Link>
        </div>

        {/* Row 2 — Sub-bar */}
        <div className="hidden md:flex justify-between items-center mt-2 pb-2">

          {/* Kiri: Kunjungi Kami */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-sm border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] font-medium text-slate-700 hover:bg-slate-100 transition-all duration-200"
          >
            <svg className="w-3 h-3 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            Kunjungi Kami
          </a>

          {/* Kanan: Nav links + Contact dropdown */}
          <div className="flex items-center gap-5 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="relative text-slate-700 hover:text-slate-900 transition-colors duration-200 group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}

            {/* Contact Dropdown */}
            <div className="relative" ref={contactRef}>
              <button
                onClick={() => setContactOpen((v) => !v)}
                className="flex items-center gap-1 text-sm text-slate-700 hover:text-slate-900 transition-colors duration-200"
              >
                Contact
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${contactOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`absolute right-0 top-full mt-3 w-56 bg-white rounded-sm shadow-lg border border-slate-200 transition-all duration-200 origin-top-right ${
                  contactOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <div className="p-4 flex flex-col gap-3 text-sm">
                  <p className="text-slate-900 font-semibold border-b border-slate-200 pb-2">
                    Hubungi Kami
                  </p>
                  <a href="tel:+6281234567890" className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    +62 812-3456-7890
                  </a>
                  <a href="mailto:hello@jcoffee.id" className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    hello@jcoffee.id
                  </a>
                  
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                    Lihat di Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Row 2 */}
        <div className="md:hidden flex justify-between items-center mt-2 pb-2">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-sm border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 transition-all duration-200"
          >
            <svg className="w-3 h-3 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            Kunjungi Kami
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 transition-transform duration-200 hover:text-slate-900 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-60 opacity-100 pb-3' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-3 text-sm font-medium py-3">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setIsOpen(false)} className="text-slate-700 hover:text-slate-900 transition-colors">
                {label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-slate-700 hover:text-slate-900 transition-colors">
              Contact
            </Link>
          </div>
        </div>

      </div>
      </nav>
    </AnimatedWrapper>
  )
}