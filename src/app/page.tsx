import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllPosts } from "@/lib/api";
import { format } from "date-fns";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  const posts = getAllPosts();
  const topPosts = posts.slice(0, 3);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="pr-8">
        <h1 className="text-4xl lg:text-5xl mb-4 font-serif">Hi! My name is Calum.</h1>
        <p className="text-lg mb-4">
          I&apos;m a 23 year old tinkerer who grew up in the rural interior of BC, Canada. Nowadays, you&apos;ll find me in Victoria BC. I stumbled across machine learning in 2015 and LLMs in 2018. In 2021, I dropped out of Mount Allison University to build my startup, Trelent.
        </p>
        <p className="text-lg">Since then, I have become most known for:</p>
        <ul className="list-disc pl-2 list-inside mb-4 text-lg">
          <li>Having built AI-native products used by &gt;100k people.</li>
          <li>Building highly effective AI tools, extremely quickly.</li>
          <li>
            Technical diligence on ~$4Bn in AI M&A deals.
          </li>
        </ul>
        <p className="text-lg mb-4">
          What I am most proud of, though, is my growth as a person in the preceeding years. I have been incredibly fortunate to travel across North America and Europe for work and pleasure, making many friends along the way. This has helped me learn to be a better person, a better colleague, and a better friend.
        </p>
        <p className="text-lg mb-4">
          This website is an eventually-consistent collection of my learnings and experiences, mostly stemming from my work, but also sometimes in my life. Most of the posts I have written for this website have not yet been posted.
        </p>
      </div>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="font-serif text-2xl font-normal">Latest Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {topPosts.map((post) => (
              <Link
                href={`/posts/${post.slug}`}
                key={post.slug}
                className="group"
              >
                <span className="group-hover:underline">{post.title}</span>{" "}
                <span className="text-muted-foreground">
                  ({format(post.date, "LLLL Lo, yyyy")})
                </span>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-2xl font-normal">Contact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <SocialIcon
                url="https://github.com/calum-bird"
                className="mr-2"
                style={{ width: "32px", height: "32px" }}
              />
              <Link href="https://github.com/calum-bird" className="hover:underline">calum-bird</Link>
            </div>
            <div className="flex items-center">
              <SocialIcon
                url="https://www.linkedin.com/in/calum-bird/"
                className="mr-2"
                style={{ width: "32px", height: "32px" }}
              />
              <Link href="https://www.linkedin.com/in/calum-bird/" className="hover:underline">calum-bird</Link>
            </div>
            <div className="flex items-center">
              <SocialIcon
                url="https://twitter.com/calumbirdo"
                className="mr-2"
                style={{ width: "32px", height: "32px" }}
              />
              <Link href="https://twitter.com/calumbirdo" className="hover:underline">calumbirdo</Link>
            </div>
            <div className="flex items-center">
              <SocialIcon
                network="email"
                className="mr-2"
                style={{ width: "32px", height: "32px" }}
                as="span"
              />
              <Link href="mailto:calum@trelent.com" className="hover:underline">calum@trelent.com</Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
