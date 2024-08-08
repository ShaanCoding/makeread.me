'use client'
import React from 'react'
import { siteConfig } from "@/config/site"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion, useCycle } from "framer-motion"
import { buttonVariants } from './ui/button'
import { Icons } from './icons'


/**
 * Renders the mobile navigation component.
 */
export default function MobileNav() {
    const [open, cycleOpen] = useCycle(false, true)

    return (
        <div className="md:hidden">
            <button
                onClick={() => cycleOpen()}
                className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                })}
            >
                <Icons.menu className="size-5" />
                <span className="sr-only">Menu</span>
            </button>


            <AnimatePresence>
                {open && (
                    <motion.div className='fixed inset-0 z-50 bg-black/80'
                        initial={{opacity: 0}}
                        animate={{opacity: 100}}
                        exit={{opacity: 0}}
                        >
                        </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {open && (
                    <motion.div className="bg-background fixed inset-y-0 right-0 z-50 h-full w-3/4 gap-4 border-r p-6 pr-0 shadow-lg sm:max-w-sm"
                        initial={{ x: "100vw" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100vw" }}
                        transition={{  
                            type: "tween",  
                            duration: 0.4  
                        }}
                        >

                        <button
                            onClick={() => cycleOpen()}
                            className={buttonVariants({
                                size: "icon",
                                variant: "ghost",
                            }) + ' absolute top-3 right-6'}
                        >
                            <Icons.close className="size-5" />
                            <span className="sr-only">Close Menu</span>
                        </button>
                        <nav className="flex flex-col gap-6">
                            {siteConfig.mainNav.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    onClick={() => cycleOpen()}
                                    className={cn(
                                        "text-md flex items-center font-medium",
                                    )}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )

}