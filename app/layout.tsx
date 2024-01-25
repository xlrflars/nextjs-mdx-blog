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
          <div className="ml-10">
          <img
                className="h-10"
                src="https://icon-library.com/images/logo-icon/logo-icon-8.jpg" 
                alt="Logo"
                />
          </div>
          <div className="flex mx-8">
          <h1 className="navtext ">
            My Blog
          </h1>
          </div>
         
          <div className="flex mt-3">
          <Link href={"/"} className="navlink">
            Home
          </Link>
          <Link href={"/blog"} className="navlink">
            Blog
          </Link>

          <Link href={"/about"} className="navlink">
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
                  <h2 className="footertext">
                    Links
                  </h2>
                  <ul>
                    <li>
                    <Link href={"https://github.com/xlrflars/nextjs-mdx-blog"} target="_blank" className="footerlink">
                      - GitHub Repository
                    </Link>
                    </li>
                    <li>
                    <Link href={"https://www.secomea.com/"} target="_blank" className="footerlink">
                      - Secomea
                    </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="footertext">
                    Learn More
                  </h2>
                  <ul>
                    <li>
                    <Link href={"/about"}  className="footerlink">
                      - About
                    </Link>
                    </li>
                    <li>
                    <Link href={"/blog"} className="footerlink">
                      - Blog
                    </Link>
                    </li>
                  </ul>
                </div>


                <div>
                <img
                className="h-20"
                src="https://icon-library.com/images/logo-icon/logo-icon-8.jpg" 
                alt="Logo"
                />
                </div>

              </div>

            </div>

        </footer> 
        </div>
        
        
        

      </body>
      



    </html>
 );
}


