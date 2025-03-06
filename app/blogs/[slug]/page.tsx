import React from "react";

interface SearchparamsProps {
  params: {
    slug: string;
  };
}

interface Post {
  title: string;
  content: string;
  slug: string;
}

// Generating static params for the dynamic content which let pageload or performance speed of our website.
export const revalidate = 420;
export const generateStaticParams = async () => {
  const posts: Post[] = await fetch("http://localhost:300/api/content").then(
    (res) => res.json(),
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const Blogs = async ({ params }: SearchparamsProps) => {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json(),
  );

  const post = posts.find((post) => post.slug === params.slug)!; // NOTE:: This is not good practice in production level project, as we have to check for null value, but for practice, here we are using ! sign to tell compiler that we are not going to use a null value.
  console.log("posts", post);
  return (
    <div className="w-full h-full">
      <div className=" h-full bg-white p-6 rounded-lg shadow-lg">
        <h1 id="blog-title" className="text-2xl font-bold text-gray-800">
          {post.title}
        </h1>
        <p id="blog-content" className="mt-4 text-gray-600 leading-relaxed">
          {post.content}
        </p>
      </div>
    </div>
  );
};

export default Blogs;
