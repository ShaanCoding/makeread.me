import { notFound } from "next/navigation"
import { allAuthors, allArticles } from ".contentlayer/generated"

import { Mdx } from "@/components/mdx-components"

import "@/styles/mdx.css"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { absoluteUrl, formatDate } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { CardDescription } from "@/components/ui/card"

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allArticles.find((post) => post.slugAsParams === slug)

  if (!post) {
    return null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  const url = process.env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", post.title)
  ogUrl.searchParams.set("type", "Blog Post")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allArticles.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  const authors = post.authors.map((author) =>
    allAuthors.find(({ slug }) => slug === `/authors/${author}`)
  )

  return (
    <main className="flex items-center justify-center">
      <div className="flex max-w-screen-2xl flex-1 flex-col gap-4 p-4 xl:gap-6 xl:p-6">
      <div>
        <div className="flex w-full flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-semibold text-white">
          {post.title}
        </h1>
        {authors?.length ? (
          <div className="mt-4 flex space-x-4">
            {authors.map((author) =>
              author ? (
                <Link
                key={author._id}
                href={`https://twitter.com/${author.twitter}`}
                className="flex items-center space-x-2 text-sm"
                >
                  <Image
                    src={author.avatar}
                    alt={author.title}
                    width={42}
                    height={42}
                    className="rounded-full bg-white"
                    />
                  <div className="flex-1 text-left leading-tight">
                    <p className="font-medium">{author.title}</p>
                    <p className="text-muted-foreground text-[12px]">
                      @{author.twitter}
                    </p>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        ) : null}
      
      {post.image && (
        <Image
        src={post.image}
        alt={post.title}
        width={720}
        height={405}
        className="bg-muted my-8 rounded-md border transition-colors"
        priority
        />
      )}
       {post.date && (
          <CardDescription>
          <time dateTime={post.date}>
            Published on {formatDate(post.date)}
          </time>
          </CardDescription>
        )}
      </div>
      </div>
      <hr className="mt-6" />

      <Mdx code={post.body.code} />

      <hr className="mt-6" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/articles">
        <Button variant={"outline"} className="flex items-center">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Articles
        </Button>
        </Link>
      </div>
    </div>
    </main>
  )
}