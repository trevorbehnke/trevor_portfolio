import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faGhost } from "@fortawesome/free-solid-svg-icons"

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center space-y-6 text-center px-4">
      <div className="flex size-20 items-center justify-center rounded-full bg-muted/30 text-muted-foreground animate-pulse">
        <FontAwesomeIcon icon={faGhost} className="size-10" />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">404</h1>
        <h2 className="text-2xl font-semibold">Page not found</h2>
        <p className="max-w-md text-muted-foreground">
          Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
        </p>
      </div>
      <Button asChild size="lg" className="rounded-full">
        <Link href="/">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2 h-4 w-4" /> Go back home
        </Link>
      </Button>
    </div>
  )
}

