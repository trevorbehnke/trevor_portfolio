import Link from "next/link"

export default function NotFound() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-16 text-center space-y-4">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="text-muted-foreground">Sorry, we couldn’t find that page.</p>
      <Link className="underline underline-offset-4" href="/">Go back home</Link>
    </div>
  )
}

