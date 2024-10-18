export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row h-full">
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
