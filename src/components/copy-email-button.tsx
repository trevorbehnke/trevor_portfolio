"use client"

import { Button } from "@/components/ui/button"
import { site } from "@/data/site"
import { toast } from "sonner"

export function CopyEmailButton() {
  async function handleClick() {
    const mailto = `mailto:${site.email}`
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(site.email)
        toast.success("Email copied to clipboard")
        return
      }
      // Fallback if clipboard API is unavailable
      window.location.href = mailto
    } catch {
      // Fallback to opening the mail client if copy fails
      window.location.href = mailto
    }
  }

  return (
    <Button
      type="button"
      variant="default"
      aria-label="Copy email address"
      onClick={handleClick}
      className="hover:ring-1 hover:ring-ring/40 hover:ring-offset-1 transition-transform hover:scale-103 hover:cursor-pointer"
    >
      Email
    </Button>
  )
}

