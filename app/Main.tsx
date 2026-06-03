import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import FeaturedCarousel from '@/components/FeaturedCarousel'

const MAX_DISPLAY = 2

export default function Home({ posts }) {
  return (
    <>
      <FeaturedCarousel />
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            About Us
          </h1>
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Australian Based Digital Design and Development Studio
          </span>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Sproutling Studios is an indie game studio based in Australia that specializes in
            exploring the realms of visual art and animation, along with creative Minecraft content
            creation to bring innovative gameplay to craft unique experiences.
          </p>
          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            What's New
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            The latest news on games, development updates, and major announcements.
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      <br />
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2] via-[#7C5CFC] to-[#EB459E]" />

        {/* Glow Effects */}
        <div className="left absolute top-1/4 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[350px] max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Join Our Discord Server
          </h2>

          <p className="mb-8 max-w-2xl text-base text-white/90 sm:text-lg md:text-xl">
            Connect with fellow members, discuss projects, get support, and stay updated with the
            latest sproutling studios news.
          </p>

          <a
            href="https://discord.gg/QQDFjZ5f9E"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#5865F2] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl sm:text-lg"
          >
            Join Discord
          </a>
        </div>
      </section>
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
