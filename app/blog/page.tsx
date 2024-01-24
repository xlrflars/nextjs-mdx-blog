import { getPostsData } from "../lib/blog_functions";
import Link from "next/link";
import React from "react";

export default async function Blogs() {
    const blogs = await getPostsData();
    
    //Case: no posts
    if (blogs.length === 0) {
        return (
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-2xl m-4">
                There are no posts yet...
            </div>
        );
    }
    //Display all posts
    return (
        <div className="max-w-md mx-auto bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden md:max-w-2xl m-4">
            <p className="text-blue-800 dark:text-blue-400 p-4 font-bold">Latest Blog Posts</p>

            <ul className="border-t border-b border-gray-200 divide-y">
                {blogs.map((blog) => {
                    return (
                        <li key={blog.id} className="py-4 px-6">
							
                            <Link prefetch={false} href={`../blog/${blog.id}`}>
                                <a className="text-gray-900 dark:text-gray-300 hover:underline font-bold text-sm">{blog.title}</a>
                                <span className="block text-gray-500 text-sm mt-1">
                                    {blog.date.toLocaleDateString()}
                                </span>
                            </Link>
							
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
