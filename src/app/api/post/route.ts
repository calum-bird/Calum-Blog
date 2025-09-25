import { getAllPosts } from "@/lib/api";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = getAllPosts();

  if (!posts || posts.length === 0) {
    return NextResponse.json({ error: "No posts found" }, { status: 404 });
  }

  return NextResponse.json(posts);
}
