import { cacheLife } from "next/cache";
import React from "react";

async function Posts() {
  "use cache";
  cacheLife("hours");

  const res = await fetch("https://api.vercel.app/blog");
  const posts = await res.json();
  return (
    <section>
      <h3>Posts</h3>
      {posts.slice(0, 5).map((post: any) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </section>
  );
}

export default Posts;
