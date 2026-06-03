import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const mainContent = allAuthors.map((author) => coreContent(author as Authors))

  return (
    <>
    <section className="py-2">
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
              exploring the realms of visual art and animation, along with creative Minecraft
              content creation to bring innovative gameplay to craft unique experiences.
            </p>
          </div>
        </div>
      </section>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}
