'use client'

import { useEffect, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from '@/components/Link'
import projectsData from '@/data/projectsData'

export default function FeaturedCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
    },
    [Autoplay({ delay: 5000 })]
  )

  const [cards, setCards] = useState<any[]>([])

  useEffect(() => {
    const shuffled = [...projectsData].sort(() => Math.random() - 0.5)

    setCards([
      {
        title: 'About Sproutling Studios',
        description:
          'Australian-based digital design and development studio creating games, websites, animations, branding, and unique digital experiences.',
        href: '/about',
        imgSrc: '/static/images/about-banner.jpg',
      },
      ...shuffled.slice(0, 2),
    ])
  }, [])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  if (!cards.length) return null

  return (
    <section className="relative py-16">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold">Featured</h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Learn more about us and explore some of our projects.
        </p>
      </div>

      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute top-1/2 left-0 z-20 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-3 shadow-lg transition hover:scale-110 dark:border-gray-700 dark:bg-gray-800"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Carousel */}
        <div className="overflow-hidden px-12" ref={emblaRef}>
          <div className="flex">
            {cards.map((card) => (
              <div
                key={card.title}
                className="min-w-full flex-none px-4 md:min-w-[50%] lg:min-w-[33.333%]"
              >
                <div className="h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
                  {card.imgSrc && (
                    <img
                      src={card.imgSrc}
                      alt={card.title}
                      className="h-56 w-full object-cover"
                    />
                  )}

                  <div className="p-6">
                    <h3 className="mb-3 text-2xl font-bold">
                      {card.title}
                    </h3>

                    <p className="mb-6 line-clamp-4 text-gray-600 dark:text-gray-400">
                      {card.description}
                    </p>

                    <Link
                      href={card.href}
                      className="inline-flex rounded-lg bg-primary-500 px-5 py-3 font-medium text-white transition hover:bg-primary-600"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute top-1/2 right-0 z-20 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-3 shadow-lg transition hover:scale-110 dark:border-gray-700 dark:bg-gray-800"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-3">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              selectedIndex === index
                ? 'w-8 bg-primary-500'
                : 'w-3 bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </section>
  )
}