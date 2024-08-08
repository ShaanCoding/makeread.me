import Image from "next/image"
import Link from "next/link"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"
import { CardDescription } from "@/components/ui/card"

import { allArticles } from ".contentlayer/generated"

export const metadata = {
  title: "Blog",
}

export default async function BlogPage() {
  const posts = allArticles
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <main className="flex items-center justify-center">
      <div className="flex max-w-screen-2xl flex-1 flex-col gap-4 p-4 xl:gap-6 xl:p-6">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-semibold text-white">Blog</h1>
            <CardDescription>
              A blog built using Contentlayer. Posts are written in MDX.
            </CardDescription>
          </div>
        </div>
        <hr className="my-6" />
        {posts?.length ? (
          <div className="grid gap-10 sm:grid-cols-2">
            {posts.map((post, index) => (
              <article
                key={post._id}
                className="group relative flex flex-col space-y-2"
              >
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={804}
                    height={452}
                    className="rounded-md border bg-muted transition-colors"
                    priority={index <= 1}
                  />
                )}
                <h2 className="text-2xl font-extrabold">{post.title}</h2>
                {post.description && (
                  <p className="text-muted-foreground">{post.description}</p>
                )}
                {post.date && (
                  <p className="text-sm text-muted-foreground">
                    {formatDate(post.date)}
                  </p>
                )}
                <Link href={post.slug} className="absolute inset-0">
                  <span className="sr-only">View Article</span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p>No posts published.</p>
        )}
      </div>
    </main>
  )
}
