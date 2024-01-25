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
      <body className="bg-gray-300 dark:bg-gray-800 text-black dark:text-white min-h-full flex flex-col">
        
        <nav className="bg-gradient-to-r from-blue-900 to-gray-600 dark:bg-gray-600 shadow">
          
           
          
        <div className="container flex justify-start p-6 text-gray-200 dark:text-gray-100 ">
          <div className="flex px-20 ml-9">
          <h1 className="text-4xl font-bold text-amber-500 ">
            My Blog
          </h1>
          </div>
         
          <div className="flex mt-3">
          <Link href={"/"} className="border-b-2 border-transparent hover:text-gray-200 dark:hover:text-gray-100 hover:border-blue-500 mx-1.5 sm:mx-6">
            Home
          </Link>
          <Link href={"/blog"} className="border-b-2 border-transparent hover:text-gray-200 dark:hover:text-gray-100 hover:border-blue-500 mx-1.5 sm:mx-6">
            Blog
          </Link>

          <Link href={"/about"} className="border-b-2 border-transparent hover:text-gray-200 dark:hover:text-gray-100 hover:border-blue-500 mx-1.5 sm:mx-6">
            About
          </Link>
          </div>

          
          
        
          </div>
        </nav>
        
        <div className="flex flex-col flex-1">
          <main className=" mt-16 mb-20 flex-1">{children}</main>

          <footer className="bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-950 text-white py-8">
            <div className="container mx-auto px2">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-3 text-amber-500">
                    Links
                  </h2>
                  <ul>
                    <li>
                    <Link href={"https://github.com/xlrflars/nextjs-mdx-blog"} target="_blank" className="hover:text-blue-300">
                      - GitHub Repository
                    </Link>
                    </li>
                    <li>
                    <Link href={"https://www.secomea.com/"} target="_blank" className="hover:text-blue-300">
                      - Secomea
                    </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3 text-amber-500">
                    Learn More
                  </h2>
                  <ul>
                    <li>
                    <Link href={"/about"}  className="hover:text-blue-300">
                      - About
                    </Link>
                    </li>
                    <li>
                    <Link href={"/blog"} className="hover:text-blue-300">
                      - Blog
                    </Link>
                    </li>
                  </ul>
                </div>


                <div>
                  <h2 className="text-xl font-bold mb-3">
                    Logo
                  </h2>
                  
                </div>

              </div>

            </div>

        </footer> 
        </div>
        
        
        

      </body>
      



    </html>
 );
}


