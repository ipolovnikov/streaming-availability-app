import { Clapperboard } from "lucide-react"
import { Container } from "./container"
import { navbarLinks } from "@/configs/nav-config"
import Link from "next/link"

export function Navbar() {
  return (
    <div className="bg-background/80 fixed top-0 z-10 w-full backdrop-blur">
      <Container className="flex h-12 items-center justify-between">
        <div className="text-primary flex items-center font-bold">
          <Clapperboard className="size-5" />
          <span className="ml-2 hidden text-lg md:inline-block">SSA</span>
        </div>
        <nav className="flex items-center gap-6 text-xs font-semibold">
          {navbarLinks.map(({ href, name }, idx) => (
            <Link href={href} key={idx} className="text-foreground/80 hover:text-foreground hover:underline">
              {name}
            </Link>
          ))}
        </nav>
      </Container>
    </div>
  )
}
