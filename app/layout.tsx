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
      <body className="bg-gray-100 text-black">
        
        <nav className="bg-white shadow">
          
           
          
        <div className="container flex items-center justify-start p-6 mx-auto text-gray-600 capitalize">
          <h1 className="text-2xl font-bold justify-content-left ">
            My Blog
          </h1>


          <Link href={"/"} className="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6">
            Home
          </Link>
          <Link href={"/blog"} className="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6">
            Blog
          </Link>

          <Link href={"/about"} className="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6">
            About
          </Link>
          

        
          </div>
        </nav>
        
        
        <main className="ml-30 mt-16">{children}</main>
      </body>
    </html>
 );
}


