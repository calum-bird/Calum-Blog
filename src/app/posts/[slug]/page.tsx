import ElevenLabsAudioNative from "@/components/ElevenLabsAudioNative";
import { getAllPosts, getPostBySlug } from "@/lib/api";

import { format } from "date-fns";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="max-w-[80ch] mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
        <blockquote className="text-lg text-foreground italic border-l-4 border-primary pl-4 py-2 my-4">
          {post.excerpt}
        </blockquote>
        <p className="text-sm text-muted-foreground my-2">
          Written by {post.author.name} on{" "}
          {format(new Date(post.date), "LLLL Lo, yyyy")}
        </p>
        {post.coverImage && (
          <Image
            src={post.coverImage}
            alt={`Cover image for ${post.title}`}
            className="w-full h-auto object-cover rounded-lg mb-4"
            layout="responsive"
            width={1200}
            height={630}
          />
        )}
      </header>
      <ElevenLabsAudioNative publicUserId="cfc6aa362c2cda2bae56e3f8cdef25a076d87b4e3291d92daaf9e22d36beba2f" />
      <section className="prose dark:prose-invert prose-lg mx-auto mt-8 max-w-[80ch]">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </section>
      {post.preview && (
        <p className="mt-8 bg-secondary text-secondary-foreground p-4 rounded-lg">
          This is a preview
        </p>
      )}
    </article>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Calum Bird`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
