import Image from "next/image";
import { Inter } from "next/font/google";
import { Pill } from "@/components/atoms/pills-input/pill";
import { USERS } from "@/constants";
import { UserInput } from "@/components/atoms/pills-input/user-input";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <h1 className="text-2xl font-semibold mb-4">Zepto&apos;s assignment</h1>
      <div>
        <UserInput />
      </div>
    </main>
  );
}
