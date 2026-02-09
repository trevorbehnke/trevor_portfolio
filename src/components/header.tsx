"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { useEffect, useState } from "react"

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [activeSection, setActiveSection] = useState("")

  // Simple scroll spy for active section
  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const sections = ["work", "tools", "approach", "about", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for sticky header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
          return;
        }
      }
      setActiveSection("");
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const navItems = [
    { name: "Work", href: "/#work", id: "work" },
    { name: "Tools", href: "/#tools", id: "tools" },
    { name: "Approach", href: "/#approach", id: "approach" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="mr-8 flex items-center space-x-2 transition-transform hover:scale-105">
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-border/50 shadow-sm">
            <Image
              src="/images/logo.webp"
              alt="Trevor Behnke"
              fill
              className="object-cover"
              sizes="32px"
              priority
            />
          </div>
          <span className="hidden font-bold sm:inline-block">Trevor Behnke</span>
        </Link>
        <nav className="flex flex-1 items-center justify-end space-x-6">
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => {
              const isActive = isHome && activeSection === item.id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors hover:text-foreground/80",
                    isActive ? "text-primary" : "text-foreground/60"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-gradient-to-r from-brand-400 to-brand-600 shadow-[0_1px_4px_rgba(45,212,191,0.5)]" />
                  )}
                </Link>
              )
            })}
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <MobileNav />
          </div>
        </nav>
      </div>
    </header>
  )
}
