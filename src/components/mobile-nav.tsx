"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark, faTableCells, faWrench, faDiagramProject, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const [activeHash, setActiveHash] = useState<string>("")

  // Sync hash on mount and change
  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash)
    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
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
          variant="ghost"
          size="icon"
          aria-label="Open menu"
          className="md:hidden hover:bg-transparent"
        >
          <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="fixed inset-y-0 right-0 left-auto z-50 h-full w-3/4 max-w-sm gap-4 border-l bg-background p-6 shadow-xl transition-transform duration-300 data-[state=open]:translate-x-0 data-[state=closed]:translate-x-full sm:max-w-sm"
      >
        <DialogTitle className="sr-only">Main Menu</DialogTitle>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold tracking-tight">Menu</span>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" aria-label="Close menu">
                <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
              </Button>
            </DialogClose>
          </div>

          <nav className="flex flex-col gap-2">
            {items.map((item) => {
              const isActive = activeHash === item.hash
              return (
                <DialogClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/50",
                      isActive ? "bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-300" : "text-foreground/80"
                    )}
                  >
                    <div className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-md border text-muted-foreground transition-colors",
                      isActive ? "border-brand-200 bg-brand-100 text-brand-600 dark:border-brand-800 dark:bg-brand-900 dark:text-brand-400" : "bg-muted/30"
                    )}>
                      <FontAwesomeIcon icon={item.icon} className="h-4 w-4" />
                    </div>
                    {item.label}
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
