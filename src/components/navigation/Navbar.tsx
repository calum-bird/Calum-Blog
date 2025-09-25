"use client";

import { Post } from "@/types/post";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const NavLinks = () => (
    <>
      <Link href="/posts" className="hover:underline">
        All Posts
      </Link>
    </>
  );

  const Breadcrumb = () => {
    const breadcrumbItems = useMemo(() => {
      const pathSegments = pathname.split("/").filter(Boolean);
      const items = [
        { label: "Calum Bird", href: "/" },
        ...pathSegments.map((segment, index) => ({
          label: segment.charAt(0).toUpperCase() + segment.slice(1),
          href: `/${pathSegments.slice(0, index + 1).join("/")}`,
        })),
      ];

      const isPostPage =
        pathSegments[0] === "posts" && pathSegments.length === 2;
      if (isPostPage) {
        fetch(`/api/post/${pathSegments[1]}`)
          .then((response) => response.json())
          .then((post: Post) => {
            items[items.length - 1].label = post.title;
          })
          .catch((error) => console.error("Error fetching post:", error));
      }

      return items;
    }, []);

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
          <div className="flex items-center space-x-8">
            {(pathname === "/" ||
              (pathname.startsWith("/posts/") &&
                pathname.split("/").length === 3)) && <NavLinks />}
          </div>
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
