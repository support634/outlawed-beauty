import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Browse all services at Outlawed on Main — hair color, cuts, extensions, lash services, waxing, brow lamination, and more. Book online today.',
}

const serviceCategories = [
  {
    title: 'Hair Color',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=900&q=85&fit=crop',
    objectPosition: 'center',
    services: [
      { name: 'One Color Roots to Ends', duration: '90 min', note: 'Single-process color from roots through ends' },
      { name: 'Bleach & Tone', duration: '105 min', note: 'Full root bleach service' },
      { name: 'Partial Highlight', duration: '105 min', note: 'Focused highlighting through the hairline and crown' },
      { name: 'Full Highlight', duration: '150 min', note: 'Full head highlighting with toner/gloss' },
      { name: 'Root Color & Partial Foil', duration: '120 min', note: 'Root coverage with partial highlights' },
      { name: 'Root Color & Full Foil', duration: '180 min', note: 'Combined root coverage with complete highlighting' },
      { name: 'Full Blonding Service', duration: '180 min', note: 'All-over blonde; may require bond builder' },
    ],
  },
  {
    title: 'Cuts & Styling',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=900&q=85&fit=crop',
    objectPosition: 'center top',
    services: [
      { name: "Woman's Haircut", duration: '45 min', note: 'Precision cut customized to your lifestyle' },
      { name: 'Kids Cut', duration: '30 min' },
      { name: 'Blow Out', duration: '40 min' },
      { name: 'Formal Updo', duration: '60 min', note: 'Half or full updos' },
    ],
  },
  {
    title: 'Extensions & Treatments',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=900&q=85&fit=crop',
    objectPosition: 'center top',
    services: [
      { name: 'Beaded Weft Extension Install', duration: '60 min', note: 'Three rows available; free adjustments within 7 days' },
      { name: 'Beaded Weft Mini Move Up', duration: '35 min', note: 'Four-week maintenance' },
      { name: 'Brazilian Blowout', duration: '90 min', note: 'Lasts up to 12 weeks' },
    ],
  },
  {
    title: 'Lash Extensions',
    image: 'https://images.pexels.com/photos/5128220/pexels-photo-5128220.jpeg?auto=compress&cs=tinysrgb&w=900',
    objectPosition: 'center',
    services: [
      { name: 'Classic Lashes — Full Set', duration: '180 min' },
      { name: 'Hybrid Lashes — Full Set', duration: '180 min' },
      { name: 'Volume Lashes — Full Set', duration: '180 min' },
      { name: 'Lash Fill In — Classic', duration: '120 min' },
      { name: 'Lash Fill In — Hybrid', duration: '120 min' },
      { name: 'Lash Fill In — Volume', duration: '120 min' },
      { name: 'Lash Extension Removal', duration: '30 min' },
    ],
  },
  {
    title: 'Brow & Lash Services',
    image: 'https://images.pexels.com/photos/19348316/pexels-photo-19348316.jpeg?auto=compress&cs=tinysrgb&w=900',
    objectPosition: 'center top',
    services: [
      { name: 'Brow Lamination — No Tint', duration: '60 min' },
      { name: 'Brow Lamination — With Tint', duration: '75 min' },
      { name: 'Brow Tint', duration: '30 min' },
      { name: 'Lash Tint', duration: '45 min' },
    ],
  },
  {
    title: 'Waxing',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85&fit=crop',
    objectPosition: 'center',
    services: [
      { name: 'Brazilian Wax', duration: '30 min' },
      { name: 'Bikini Wax', duration: '30 min' },
      { name: 'Full Face Wax', duration: '25 min', note: 'Includes brows, lip, cheeks & chin' },
      { name: 'Brow Wax', duration: '15 min' },
      { name: 'Lip Wax', duration: '10 min' },
      { name: 'Chin Wax', duration: '10 min' },
      { name: 'Cheek Wax', duration: '10 min' },
      { name: 'Full Leg Wax', duration: '75 min' },
      { name: 'Upper Leg Wax', duration: '45 min', note: 'Knee up' },
      { name: 'Lower Leg Wax', duration: '45 min', note: 'Knee down' },
      { name: 'Under Arm Wax', duration: '15 min' },
      { name: 'Back Wax', duration: '75 min' },
      { name: 'Shoulder Wax', duration: '30 min' },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ─── Hero ───────────────────────────────────────────────────────────── */}
      <section className="bg-brand-black pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-brand-mauve mb-5">
            What We Offer
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] text-brand-cream leading-none font-light">
            Our<br />
            <span className="italic">Services</span>
          </h1>
        </div>
      </section>

      {/* ─── Service Categories ─────────────────────────────────────────────── */}
      <section className="bg-brand-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {serviceCategories.map((category) => (
              <div
                key={category.title}
                className="border border-[#E8E3DC] rounded-2xl overflow-hidden flex flex-col"
              >
                {/* Category image */}
                <div className="relative aspect-[16/7] w-full">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: category.objectPosition ?? 'center' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Gradient + title overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="font-display text-3xl text-brand-cream font-light leading-none">
                      {category.title}
                    </h2>
                  </div>
                </div>

                {/* Service rows */}
                <div className="divide-y divide-[#E8E3DC] px-6 flex-1">
                  {category.services.map((service) => (
                    <div
                      key={service.name}
                      className="flex items-center justify-between gap-4 py-4"
                    >
                      <div>
                        <p className="font-body text-sm text-brand-black font-medium leading-snug">
                          {service.name}
                        </p>
                        {service.note && (
                          <p className="font-body text-xs text-brand-muted mt-0.5">
                            {service.note}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <span className="font-body text-xs text-brand-muted tabular-nums">
                          {service.duration}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom padding */}
                <div className="h-4" />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─────────────────────────────────────────────────────── */}
      <CTABanner />
    </>
  )
}
