import { getPostsData } from "../lib/blog_functions";
import Link from "next/link";
import React from "react";

export default async function About() {
    return (

    
    <div >

        <div className="container mx-auto p-4">
        <h1 className="text-3xl text-blue-600 dark:text-amber-500 font-bold mb-2">Welcome to my About Page</h1>
            <p className="mt-2 leading-relaxed justify-start mb-2">
                This blog was created with the help of a nextjs guide, 
                the goal was to create a static Nextjs blog that would 
                be able to show markdown files.

                In the process I would learn some basic Nextjs, while also
                having a place to show what ive learned.
            </p>

        <h3 className="font-medium mt-10 mb-2 text-blue-600 dark:text-amber-500">Amazing Sub Title</h3>
            <p className="mt-2 leading-relaxed justify-start mb-">
                Some Kind Of Super Nice ready Information, clearly super interesting.
                Basically this again but different. Also Very Nice.Some Kind Of Super 
                Nice ready Information, clearly super interesting.Basically this again 
                but different. Also Very Nice.
            </p>
        </div>

      
    </div>

        
    );
}
