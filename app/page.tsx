import { Suspense } from "react";
import Posts from "./ui/posts";
import DateShow from "./ui/show-date";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>this is the home page</h1>
      <Posts />
      <Suspense fallback={<div>Loading posts...</div>}>
        <DateShow />
      </Suspense>

      <DateShow />
    </div>
  );
}
