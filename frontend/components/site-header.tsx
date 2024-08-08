import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import Image from "next/image"
import MobileNav from "./mobile-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/35">
      <div className="mx-6 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
      <Link href="/" className="flex items-center space-x-2 pr-6 md:pr-10">
          <Image src="/logo.svg" alt="Logo" width={30} height={30} />
          <span className="inline-block font-bold">{siteConfig.name}</span>
        </Link>
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
        <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="size-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="size-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>

            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  )
}
