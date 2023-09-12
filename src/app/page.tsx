import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <Image src="/main.png" alt="main" height={240} width={240} />
    </main>
  );
}
