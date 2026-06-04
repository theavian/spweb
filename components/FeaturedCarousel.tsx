'use client'

import { useEffect, useState } from 'react'
import Link from '@/components/Link'
import projectsData from '@/data/projectsData'

export default function FeaturedCarousel() {
  const [current, setCurrent] = useState(0)

  const cards = [
    {
      title: 'About Sproutling Studios',
      description:
        'Australian-based digital design and development studio creating websites, games, digital experiences and creative content.',
      href: '/about',
      imgSrc: '/static/images/twitter-card.png',
    },
    ...projectsData.slice(0, 2),
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [cards.length])

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % cards.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length)
  }

  return (
    <section className="relative py-16">

      <div className="relative mx-auto max-w-6xl">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 z-20 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition hover:scale-110 dark:bg-gray-800"
        >
          ←
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 z-20 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition hover:scale-110 dark:bg-gray-800"
        >
          →
        </button>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {cards.map((card) => (
              <div key={card.title} className="w-full flex-shrink-0 px-4">
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
                  {card.imgSrc && (
                    <img src={card.imgSrc} alt={card.title} className="h-64 w-full object-cover" />
                  )}

                  <div className="p-8">
                    <h3 className="mb-3 text-3xl font-bold">{card.title}</h3>

                    <p className="mb-6 text-gray-600 dark:text-gray-400">{card.description}</p>

                    <Link
                      href={card.href || '/projects'}
                      className="bg-primary-500 hover:bg-primary-600 inline-flex rounded-lg px-5 py-3 font-medium text-white"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-3">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 transition-all ${
                current === index
                  ? 'bg-primary-500 w-8 rounded-full'
                  : 'w-3 rounded-full bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
