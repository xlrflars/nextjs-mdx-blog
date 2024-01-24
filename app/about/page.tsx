import { getPostsData } from "../lib/blog_functions";
import Link from "next/link";
import React from "react";

export default async function About() {
    return (

    
    <div >

        <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold mb-2">Welcome to my About Page</h1>
            <p className="mt-2 leading-relaxed justify-start mb-2">
                Some Kind Of Super Important About Information, clearly super interesting.
                Basically this again but different. Also Very important.Some Kind Of Super 
                Important About Information, clearly super interesting.Basically this again 
                but different. Also Very important.
            </p>

        <h3 className="font-medium mt-10 mb-2">Amazing Sub Title</h3>
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
