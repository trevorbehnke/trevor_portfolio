"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark, faTableCells, faWrench, faDiagramProject, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"

export function MobileNav() {
  const [activeHash, setActiveHash] = useState<string>("")

  useEffect(() => {
    const setFromLocation = () => setActiveHash(typeof window !== 'undefined' ? window.location.hash : "")
    setFromLocation()
    window.addEventListener("hashchange", setFromLocation)
    return () => window.removeEventListener("hashchange", setFromLocation)
  }, [])

  const items = [
    { href: "/#work", label: "Featured Work", icon: faTableCells, hash: "#work" },
    { href: "/#tools", label: "Tools of the Trade", icon: faWrench, hash: "#tools" },
    { href: "/#approach", label: "My Approach", icon: faDiagramProject, hash: "#approach" },
    { href: "/#about", label: "About Me", icon: faUser, hash: "#about" },
    { href: "/#contact", label: "Get in Touch", icon: faEnvelope, hash: "#contact" },
  ] as const

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
        className="fixed right-0 top-0 left-auto translate-x-0 translate-y-0 h-dvh w-[66vw] max-w-[320px] overflow-y-auto border-l bg-background pt-3 pb-4 px-4 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right duration-200 ease-out"
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

          <nav className="grid gap-1 text-base justify-items-end">
            {items.map((item) => {
              const isActive = activeHash === item.hash
              return (
                <DialogClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={[
                      "group relative flex items-center px-2 py-1.5 min-h-[44px] rounded-md transition-colors focus-ring",
                      "hover:bg-accent hover:text-accent-foreground",
                      // isActive ? "text-primary font-medium bg-accent/40 rounded-l-md" : "",
                      // isActive ? "before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary/70" : "",
                      // isActive ? "after:content-[''] after:ml-2 after:size-1.5 after:rounded-full after:bg-primary/80" : "",
                    ].join(' ')}
                  >
                    <FontAwesomeIcon icon={item.icon} className="size-4 mr-2 text-primary/80" aria-hidden />
                    <span className="transition-transform duration-150 group-hover:translate-x-0.5">{item.label}</span>
                  </Link>
                </DialogClose>
              )
            })}
          </nav>
        </div>
      </DialogContent>
    </Dialog>
  )
}
