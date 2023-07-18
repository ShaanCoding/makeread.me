// "use client"

import Link from "next/link"

import { Button } from "@/components/ui/Button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/generator"}>
        <Button variant={"defaultGreen"}>ReadME Generator</Button>
      </Link>
    </main>
  )
}
