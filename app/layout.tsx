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
    <html lang="en" className="h-full">
      <body className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white min-h-full flex flex-col">
        
        <nav className="bg-white dark:bg-gray-600 shadow">
          
           
          
        <div className="container flex items-center justify-start p-6 mx-auto text-gray-600 dark:text-gray-100 capitalize">
          <h1 className="text-2xl font-bold justify-content-left ">
            My Blog
          </h1>


          <Link href={"/"} className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-100 hover:border-blue-500 mx-1.5 sm:mx-6">
            Home
          </Link>
          <Link href={"/blog"} className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-100 hover:border-blue-500 mx-1.5 sm:mx-6">
            Blog
          </Link>

          <Link href={"/about"} className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-100 hover:border-blue-500 mx-1.5 sm:mx-6">
            About
          </Link>
          
        
          </div>
        </nav>
        
        <div className="flex flex-col flex-1">
          <main className="ml-30 mt-16 flex-1">{children}</main>

          <footer className="bg-black text-white py-5">
          
          <ul className="flex flex-row justify-center">
            <li className="mx-5">
            <Link href={"https://github.com/xlrflars/nextjs-mdx-blog"} target="_blank" className="underline hover:text-blue-300">
            GitHub Repository
            </Link>
            </li>
            <li>
            <Link href={"https://www.secomea.com/"} target="_blank" className="underline hover:text-blue-300">
            Secomea
            </Link>
            </li>
            
            <li>
              
            </li>
  
          </ul>
        </footer> 
        </div>
        
        
        

      </body>
      



    </html>
 );
}


