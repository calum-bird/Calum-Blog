import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllPosts } from "@/lib/api";
import { type Post } from "@/types/post";
import { format } from "date-fns";

import Image from "next/image";
import Link from "next/link";

export default function Posts() {
  const posts = getAllPosts();

  const Post = ({ post }: { post: Post }) => {
    return (
      <Link
        key={post.slug}
        href={`/posts/${post.slug}`}
        className="cursor-pointer"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{post.title}</CardTitle>
            <CardDescription>
              <span className="border-l-2 border-primary pl-2 italic text-muted-foreground">
                {post.excerpt}
              </span>
              <span className="text-muted-foreground mt-4">
                Written on {format(new Date(post.date), "LLLL Lo, yyyy")}
              </span>
            </CardDescription>
          </CardHeader>
          {post.coverImage && (
            <CardContent>
              <Image
                src={post.coverImage}
                alt={post.title}
                width={500}
                height={500}
              />
            </CardContent>
          )}
        </Card>
      </Link>
    );
  };

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">My Posts</h1>
        <p className="text-muted-foreground">
          I write about my experiences and learnings as a Founder, but also as
          an engineer, and as a person in this complicated world. Posts are
          infrequent, but I try to make the wait worthwhile.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-4">
        {posts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
