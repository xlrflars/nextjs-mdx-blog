import dynamic from "next/dynamic";
import React from "react";

/**
 * return all possible blogId values in an array like [{blogId: 'first_blog'}, {blogId: 'second_blog'}]
 */
export async function generateStaticParams() {
    const blogPosts = ["first_blog", "second_blog","third_blog","fourth_blog"];
    return blogPosts.map((post) => ({
        blogId: post,
    }));
}

type BlogPageProps = {
    params: { blogId: string };
};

export default async function BlogPage({ params }: BlogPageProps) {
    const BlogPost = dynamic(() => import("../../blogs/" + params.blogId + ".mdx"));

    return (
        <div className="container mx-auto p-4">
            <article>
                <BlogPost />
            </article>
        </div>
    );
}

