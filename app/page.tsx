import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-medium">Welcome to my Next.js Blog</h2>
      <p className="mt-2 leading-relaxed justify-start mb-">
      
        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type 
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      
      </p>
    </div>
  );
}
