import prisma from "@/lib/prisma";
import { cacheLife } from "next/cache";

async function PostList() {
  "use cache";
  cacheLife("hours");

  const posts = await prisma.post.findMany();
  return (
    <div>
      <h1>Post List</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
