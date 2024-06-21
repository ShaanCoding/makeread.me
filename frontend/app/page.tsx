import CallToAction from "@/components/Home/CallToAction"
import Demo from "@/components/Home/Demo"
import KeyFeatures from "@/components/Home/KeyFeatures"
import Splashscreen from "@/components/Home/Splashscreen"
import Testimonials from "@/components/Home/Testimonials"
import TopThreeTemplates from "@/components/Home/TopThreeTemplates"

import Image from 'next/image';
import Link from 'next/link';

// Tempiorary
import { allPosts } from '@/.contentlayer/generated';

export default function IndexPage() {
  return (
    <section className="grid items-center gap-6 px-[5%] pb-8 pt-6 md:py-10">
      <Splashscreen />
      <Demo />
      <TopThreeTemplates />
      <KeyFeatures />
      <Testimonials />
      <CallToAction />

      {allPosts.map((post, index) => (
          <article key={post._id} className="group relative flex flex-col space-y-2">
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
            {post.description && <p className="text-muted-foreground">{post.description}</p>}
            <Link href={post.slug} className="absolute inset-0">
              <span className="sr-only">View Article</span>
            </Link>
          </article>
        ))}
    </section>
  )
}
