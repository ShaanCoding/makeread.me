import Image from 'next/image';
import Link from 'next/link';
import { allArticles  } from '@/.contentlayer/generated';

export default function Page() {
  return (
    <main className="flex items-center justify-center">
      <div className="flex max-w-screen-2xl flex-1 flex-col gap-4 p-4 xl:gap-6 xl:p-6">
    <div className="prose dark:prose-invert">
      <div className="grid gap-10 sm:grid-cols-2">
        {allArticles.map((post, index) => (
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
      </div>
    </div>
    </div>
    </main>
  );
}