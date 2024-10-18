import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getPostBySlug } from "@/lib/api";
import { Menu } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";

const Navbar = () => {
  const pathname = headers().get("x-pathname") as string;
  const NavLinks = () => (
    <>
      <Link href="/posts" className="hover:underline">
        All Posts
      </Link>
    </>
  );

  const Breadcrumb = () => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const isPostPage = pathSegments[0] === "posts" && pathSegments.length === 2;
    const breadcrumbItems = [
      { label: "Calum Bird", href: "/" },
      ...pathSegments.map((segment, index) => ({
        label: segment.charAt(0).toUpperCase() + segment.slice(1),
        href: `/${pathSegments.slice(0, index + 1).join("/")}`,
      })),
    ];

    if (isPostPage) {
      const post = getPostBySlug(pathSegments[1]);
      if (post) {
        breadcrumbItems[breadcrumbItems.length - 1].label = post.title;
      }
    }

    return (
      <ul className="flex items-center">
        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index < breadcrumbItems.length - 1 ? (
              <>
                <Link href={item.href}>{item.label}</Link>
                <span className="mx-2 text-muted-foreground text-2xl">/</span>
              </>
            ) : (
              item.label
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="bg-card border-b relative">
      <div className="max-w-[90ch] mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">
          <Breadcrumb />
          {(pathname === "/" ||
            (pathname.startsWith("/posts/") &&
              pathname.split("/").length === 3)) && (
            <>
              <div className="hidden sm:flex items-center space-x-8">
                <NavLinks />
              </div>
              <div className="sm:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <button className="p-2">
                      <Menu className="h-6 w-6" />
                    </button>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <div className="mt-6 flex flex-col space-y-4">
                      <NavLinks />
                    </div>
                    <Breadcrumb />
                  </SheetContent>
                </Sheet>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-[90ch] mx-auto flex justify-between z-50 pointer-events-none">
        <div className="w-px h-screen bg-border"></div>
        <div className="w-px h-screen bg-border"></div>
      </div>
    </nav>
  );
};

export default Navbar;
