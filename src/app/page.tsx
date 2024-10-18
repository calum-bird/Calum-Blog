import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  const posts = getAllPosts();
  const topPosts = posts.slice(0, 3);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl lg:text-5xl font-bold mb-4">My name is Calum</h1>
      <p className="text-lg mb-4">
        I am a 23 year old tinkerer who grew up in a rural area outside a town
        called Summerland in the southern-interior of British Columbia, Canada.
        I stumbled across machine learning in 2015 and LLMs in 2018. In 2021, I
        dropped out of Mount Allison University to work on my startup, Trelent,
        full time.
      </p>
      <p className="text-lg">Since then, I have become most known for:</p>
      <ul className="list-disc pl-2 list-inside mb-4 text-lg">
        <li>
          Technical dilligence on a billion-dollar AI M&A deal (plus a few
          9-figure ones).
        </li>
        <li>Raising venture backing for my startup, Trelent.</li>
        <li>Building products used by thousands of people.</li>
      </ul>
      <p className="text-lg mb-4">
        But what I am most proud of is my growth as a person. I have been
        incredibly fortunate to travel across North America and Europe for both
        work and pleasure, making many friends along the way. It has helped me
        learn to be a better person, a better colleague, and a better friend.
      </p>
      <p className="text-lg mb-4">
        This website is an eventually-consistent collection of my learnings and
        experiences, in work, but also in my life. Most of the posts I have
        written for this website have not yet been posted.
      </p>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Latest Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {topPosts.map((post) => (
              <Link href={`/posts/${post.slug}`} key={post.slug}>
                {post.title}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Socials</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Link href="https://github.com/calum-bird">
              <SocialIcon
                url="https://github.com/calum-bird"
                className="mr-2"
                style={{ width: "32px", height: "32px" }}
              />
              calum-bird
            </Link>
            <Link
              href="https://www.linkedin.com/in/calum-bird/"
              className="flex items-center"
            >
              <SocialIcon
                url="https://www.linkedin.com/in/calum-bird/"
                className="mr-2"
                style={{ width: "32px", height: "32px" }}
              />
              calum-bird
            </Link>
            <Link
              href="https://twitter.com/calumbirdo"
              className="flex items-center"
            >
              <SocialIcon
                url="https://twitter.com/calumbirdo"
                className="mr-2"
                style={{ width: "32px", height: "32px" }}
              />
              calumbirdo
            </Link>
            <Link
              href="mailto:calum@calumbird.com"
              className="flex items-center"
            >
              <SocialIcon
                network="email"
                className="mr-2"
                style={{ width: "32px", height: "32px" }}
                as="span"
              />
              calum@calumbird.com
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
