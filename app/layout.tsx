
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";


export const metadata: Metadata = {
 title: "The Blog",
 description: "A Next.js 14 & MDX blog starter project.",
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
    <html lang="en" className="h-full">
      <body className=" bg-gray-300 dark:bg-gray-800 text-black dark:text-white min-h-full flex flex-col">
        
       <Navbar/>
      
        
        <div className="flex flex-col flex-1">
          <main className=" mt-36 mb-20 flex-1">{children}</main>

          <footer className="bg-gradient-to-r from-gray-950 via-blue-950 via-black via-blue-950 to-gray-950 text-white py-8">
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


