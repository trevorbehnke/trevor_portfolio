"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"

export function MobileNav() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Open menu"
          className="md:hidden"
        >
          <FontAwesomeIcon icon={faBars} aria-hidden />
        </Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="fixed right-0 top-0 left-auto translate-x-0 translate-y-0 h-dvh w-[82vw] max-w-[320px] overflow-y-auto border-l bg-background pt-3 pb-4 px-4 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right duration-200 ease-out"
      >
        <DialogTitle className="sr-only">Site navigation</DialogTitle>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-end">
            <DialogClose asChild>
              <Button variant="outline" size="icon" aria-label="Close menu">
                <FontAwesomeIcon icon={faXmark} aria-hidden />
              </Button>
            </DialogClose>
          </div>

          <nav className="grid gap-1 text-base text-right">
            {[
              { href: "/#work", label: "Featured Work" },
              { href: "/#tools", label: "Tools of the Trade" },
              { href: "/#approach", label: "My Approach" },
              { href: "/#about", label: "About Me" },
              { href: "/#contact", label: "Get in Touch" },
            ].map((item) => (
              <DialogClose asChild key={item.href}>
                <Link
                  href={item.href}
                  className="px-2 py-1.5 min-h-[44px] rounded-md hover:bg-accent hover:text-accent-foreground transition-colors focus-ring"
                >
                  {item.label}
                </Link>
              </DialogClose>
            ))}
          </nav>
        </div>
      </DialogContent>
    </Dialog>
  )
}
