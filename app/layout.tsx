import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
 title: "Next.js Mdx Static Blog",
 description: "A Next.js 14 & MDX blog starter project.",
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
    <html lang="en">
      <body className="bg-gray-100 text-black dark:text-white">
        {/* Sidebar */}
        <aside className="fixed top-0 left-0 h-full w-64 overflow-auto bg-gray-300">
          <div className="p-4">
            <h1 className="text-2xl font-bold">NextBlog</h1>
          </div>
          <nav className="p-4 space-y-4">
            <Link href={"/"} className="block px-6 py-4 text-black hover:bg-gray-400">
              Home
            </Link>
            <Link href={"/blog"} className="block px-6 py-4 text-black hover:bg-gray-400">
              Blog
            </Link>
          </nav>
        </aside>
        {/* Main Content */}
        <main className="ml-64 mt-16">{children}</main>
      </body>
    </html>
 );
}
