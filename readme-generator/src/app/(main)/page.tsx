// "use client"

import Link from "next/link"

import Splashscreen from "@/components/Home/Splashscreen"
import { Button } from "@/components/ui/Button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Splashscreen />
      <Link href={"/generator"}>
        <Button variant={"defaultGreen"}>ReadME Generator</Button>
      </Link>
    </main>
  )
}
