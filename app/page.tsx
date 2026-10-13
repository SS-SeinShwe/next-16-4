import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        Click me
      </button>
      <Button className="mt-4">Click me</Button>
    </div>
  );
}
