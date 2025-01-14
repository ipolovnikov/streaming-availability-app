import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Streaming Availability App",
  description: "Just find your favorite shows",
}

export default async function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="px-8">
        <h1 className="text-5xl font-bold">{metadata.title?.toString()}</h1>
        <p className="mt-4 text-xl font-light text-foreground/60">{metadata.description?.toString()}</p>
      </div>
    </div>
  )
}
