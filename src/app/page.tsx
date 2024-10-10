import { redirect } from "next/navigation";

export default function Home() {
  redirect("/space-tourism");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>CSS showcase</h1>
      <div> If you don't see anything, go to /space-tourism</div>
    </main>
  );
}
