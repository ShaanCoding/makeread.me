import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allArticles } from 'contentlayer/generated';

import { Mdx } from '@/components/mdx-components';

import '@/styles/mdx.css';

import Image from 'next/image';

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps['params']) {
  const slug = params?.slug?.join('/');
  const post = allArticles.find((post) => post.slugAsParams === slug);

  if (!post) {
    return null;
  }

  return post;
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps['params'][]> {
  return allArticles.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex items-center justify-center">
      <div className="flex max-w-screen-2xl flex-1 flex-col gap-4 p-4 xl:gap-6 xl:p-6">
    <article className="py-6 prose dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      {post.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">{post.description}</p>
      )}
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article>
    </div>
    </main>
  );
}