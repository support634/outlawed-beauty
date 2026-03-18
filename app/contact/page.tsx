import type { Metadata } from 'next'
import { MapPin, Phone, Clock } from 'lucide-react'
import CTABanner from '@/components/sections/CTABanner'
import { BOOKING_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Find Outlawed on Main at 211 S Main St, Monroe, NC 28112. Call us at (704) 774-3134 or book online.',
}

const hours = [
  { day: 'Monday', hours: 'Closed' },
  { day: 'Tuesday', hours: '10 AM – 5:30 PM' },
  { day: 'Wednesday', hours: '10 AM – 5:30 PM' },
  { day: 'Thursday', hours: '10 AM – 5:30 PM' },
  { day: 'Friday', hours: '10 AM – 5:30 PM' },
  { day: 'Saturday', hours: '10 AM – 4 PM' },
  { day: 'Sunday', hours: 'Closed' },
]

export default function ContactPage() {
  return (
    <>
      {/* ─── Hero ───────────────────────────────────────────────────────────── */}
      <section className="bg-brand-black pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-brand-mauve mb-5">
            Get in Touch
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] text-brand-cream leading-none font-light">
            Contact<br />
            <span className="italic">Us</span>
          </h1>
        </div>
      </section>

      {/* ─── Contact Details + Map ───────────────────────────────────────────── */}
      <section className="bg-brand-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — info cards */}
            <div className="flex flex-col gap-8">

              {/* Address */}
              <div className="border border-[#E8E3DC] rounded-2xl p-8 flex gap-5">
                <div className="w-10 h-10 rounded-full bg-brand-black flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-brand-cream" />
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-[0.15em] text-brand-mauve mb-2">
                    Address
                  </p>
                  <p className="font-display text-2xl text-brand-black font-light leading-snug mb-3">
                    211 S Main St<br />Monroe, NC 28112
                  </p>
                  <a
                    href="https://maps.google.com/?q=211+S+Main+St+Monroe+NC+28112"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-brand-mauve hover:underline"
                  >
                    Get directions →
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="border border-[#E8E3DC] rounded-2xl p-8 flex gap-5">
                <div className="w-10 h-10 rounded-full bg-brand-black flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-brand-cream" />
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-[0.15em] text-brand-mauve mb-2">
                    Phone
                  </p>
                  <a
                    href="tel:+17047743134"
                    className="font-display text-2xl text-brand-black font-light hover:opacity-70 transition-opacity"
                  >
                    (704) 774-3134
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="border border-[#E8E3DC] rounded-2xl p-8 flex gap-5">
                <div className="w-10 h-10 rounded-full bg-brand-black flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-brand-cream" />
                </div>
                <div className="w-full">
                  <p className="font-body text-xs uppercase tracking-[0.15em] text-brand-mauve mb-4">
                    Hours
                  </p>
                  <div className="divide-y divide-[#E8E3DC]">
                    {hours.map(({ day, hours: h }) => (
                      <div key={day} className="flex justify-between py-2.5">
                        <span className="font-body text-sm text-brand-black font-medium">
                          {day}
                        </span>
                        <span className={`font-body text-sm tabular-nums ${h === 'Closed' ? 'text-brand-muted' : 'text-brand-black'}`}>
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Book CTA */}
            </div>

            {/* Right — embedded map */}
            <div className="rounded-2xl overflow-hidden border border-[#E8E3DC] aspect-[4/5] lg:aspect-auto lg:min-h-[700px]">
              <iframe
                title="Outlawed on Main location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.123!2d-80.5496!3d34.9854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88569b4e1b1b1b1b%3A0x0!2s211+S+Main+St%2C+Monroe%2C+NC+28112!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─────────────────────────────────────────────────────── */}
      <CTABanner />
    </>
  )
}
