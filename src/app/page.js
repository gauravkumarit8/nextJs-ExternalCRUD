import Image from "next/image";
import AllPost from "./(blog)/allPost/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to blog application</h1>
      <AllPost />
    </main>
  );
}
