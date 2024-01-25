import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-blue-600 dark:text-amber-500">Welcome to my Next.js Blog</h2>
      <p className="mt-2 leading-relaxed  mb-10">
      
      Welcome to my blog! I'm thrilled to share with you the journey of 
      creating this platform using Next.js 14 and Tailwind CSS. This blog 
      is built to handle markdown files, allowing me to present my thoughts 
      and ideas in a structured and readable format. Next.js 14 provides a robust 
      framework for developing server-side rendered (SSR) and static websites. 
      It offers features such as automatic routing, 
      API routes, and optimized performance out of the box. With Next.js, I've been
       able to create a seamless browsing experience, ensuring that your reading time 
       is smooth and enjoyable 1.
       <h3 className="text-xl font-bold mt-10 text-blue-600 dark:text-amber-500">  Some Other Heading</h3>
      On the other hand, Tailwind CSS is a utility-first CSS framework that I've 
      leveraged to style this blog. It provides low-level utility classes that allow 
      me to build custom designs without leaving my HTML 3. Tailwind's utility classes 
      have made it incredibly easy to create a clean, modern, and responsive design for
       this blog.

      The combination of Next.js and Tailwind CSS has allowed me to create a platform 
      where I can freely express my thoughts and ideas, while also providing a visually 
      appealing and intuitive interface for readers. I hope you find the content here 
      informative and engaging. Please feel free to explore and let me know if you have 
      any feedback or questions.
      
      </p>
      
    </div>
  );
}
