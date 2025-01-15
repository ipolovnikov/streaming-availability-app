import { Container } from "@/components/container"

export function Hero({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative mb-6 flex min-h-96 items-center justify-center">
      <Container className="z-10">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="mt-4 text-xl font-light text-foreground/60">{description}</p>
      </Container>
      <div className="absolute inset-0 bg-hero bg-cover bg-center opacity-30 blur-xs" />
    </div>
  )
}
