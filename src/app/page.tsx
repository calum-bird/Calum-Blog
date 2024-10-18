import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllPosts } from "@/lib/api";

export default function Home() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl lg:text-5xl font-bold mb-8">My name is Calum</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card className="bg-primary text-primary-foreground md:col-span-2 lg:col-span-2">
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Passionate entrepreneur with a vision to change the world.</p>
          </CardContent>
        </Card>
        <Card className="md:col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>My Startup</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Innovating in the field of AI and sustainable technology.</p>
          </CardContent>
        </Card>
        <Card className="bg-secondary text-secondary-foreground md:col-span-2 lg:col-span-1 lg:row-span-2">
          <CardHeader>
            <CardTitle>Latest Blog</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{heroPost.title}</p>
            <CardDescription>
              {new Date(heroPost.date).toLocaleDateString()}
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="md:col-span-3 lg:col-span-2">
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Raised $1M in seed funding</li>
              <li>Featured in TechCrunch</li>
              <li>10,000+ users</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-accent text-accent-foreground md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Creating a sustainable future through innovative technology.</p>
          </CardContent>
        </Card>
        <Card className="md:col-span-1 lg:col-span-1">
          <CardHeader>
            <CardTitle>Connect</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Let&apos;s build the future together. Reach out and connect!</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
