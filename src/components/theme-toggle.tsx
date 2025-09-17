"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="theme-toggle focus-ring cursor-pointer hover:bg-transparent dark:hover:bg-transparent hover:text-current dark:hover:text-current"
    >
      {isDark ? (
        <FontAwesomeIcon icon={faSun} className="header-icon text-[20px]" />
      ) : (
        <FontAwesomeIcon icon={faMoon} className="header-icon text-[20px]" />
      )}
    </Button>
  )
}
