import { allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import Image from '@/components/Image'
import SocialIcon from '@/components/social-icons'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'About',
})

export default function Page() {
  return (
    <>
      {/* Existing About Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-6xl dark:text-gray-100">
              About Us
            </h1>

            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
              Australian Based Digital Design and Development Studio
            </span>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Sproutling Studios is an indie game studio based in Australia that specializes in
              exploring the realms of visual art and animation, along with creative Minecraft
              content creation to bring innovative gameplay to craft unique experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Meet Our Team</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              The people behind Sproutling Studios.
            </p>
          </div>

          <div className="space-y-20">
            {allAuthors.map((author) => (
              <div key={author.slug} className="items-start xl:grid xl:grid-cols-3 xl:gap-x-10">
                {/* Author Card */}
                <div className="flex flex-col items-center">
                  {author.avatar && (
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      width={192}
                      height={192}
                      className="h-48 w-48 rounded-full"
                    />
                  )}

                  <h3 className="pt-4 text-2xl font-bold">{author.name}</h3>

                  {author.occupation && (
                    <p className="text-gray-500 dark:text-gray-400">{author.occupation}</p>
                  )}

                  {author.company && (
                    <p className="text-gray-500 dark:text-gray-400">{author.company}</p>
                  )}

                  <div className="mt-4 flex space-x-3">
                    {author.email && <SocialIcon kind="mail" href={`mailto:${author.email}`}/>}

                    {author.github && <SocialIcon kind="github" href={author.github}/>}

                    {author.linkedin && <SocialIcon kind="linkedin" href={author.linkedin}/>}

                    {author.twitter && <SocialIcon kind="x" href={author.twitter}/>}

                    {author.bluesky && <SocialIcon kind="bluesky" href={author.bluesky}/>}
                  </div>
                </div>

                {/* Author MDX Content */}
                <div className="prose dark:prose-invert mt-8 max-w-none xl:col-span-2 xl:mt-0">
                  <MDXLayoutRenderer code={author.body.code} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
