"use client"

import * as Dialog from "@radix-ui/react-dialog"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

export function MobileNav() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Open menu"
          className="md:hidden"
        >
          <FontAwesomeIcon icon={faBars} aria-hidden />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed right-0 top-0 z-50 h-full w-[82vw] max-w-[320px] bg-background border-l p-5 outline-none data-[state=open]:translate-x-0 data-[state=closed]:translate-x-full transition-transform duration-200 ease-out"
        >
          <Dialog.Title className="sr-only">Site navigation</Dialog.Title>
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold"></span>
            <Dialog.Close asChild>
              <Button variant="outline" size="icon" aria-label="Close menu">
                <FontAwesomeIcon icon={faXmark} aria-hidden />
              </Button>
            </Dialog.Close>
          </div>

          <nav className="grid gap-2 text-base">
            {[
              { href: "/#work", label: "Featured Work" },
              { href: "/#tools", label: "Tools of the Trade" },
              { href: "/#approach", label: "My Approach" },
              { href: "/#about", label: "About Me" },
              { href: "/#contact", label: "Get in Touch" },
            ].map((item) => (
              <Dialog.Close asChild key={item.href}>
                <Link
                  href={item.href}
                  className="px-2 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors focus-ring"
                >
                  {item.label}
                </Link>
              </Dialog.Close>
            ))}
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
