import React from "react";
import { ISocialMedia, SocialMedia } from "../Home/Footer";
import Link from "next/link"

export default function SocialMediaLinks({ links }: { links: ISocialMedia[] }) {
  return (
    <div className="flex justify-center">
      {links.map((link) => {
        return (
          <Link href={link.url}>
            <img className="size-[50px] m-2" src={link.icon} alt={link.name} />
          </Link>
        )
      })}
    </div>
  )
}
