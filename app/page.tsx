"use client";

import { useColorMode } from "@/context/ColorModeContext";
import Image from "next/image";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <main
      className={`flex flex-col items-center justify-between ${
        colorMode === "dark" ? "bg-[#131417]" : "bg-slate-50"
      } `}
    >
      Home
    </main>
  );
}
