import Link from "next/link"
import { Clapperboard } from "lucide-react"

import { Container } from "./container"
import { ThemeSwitch } from "./theme-switch"
import { navbarLinks } from "@/configs/nav-config"

export function Navbar() {
  return (
    <div className="fixed top-0 z-30 w-full bg-background/80 backdrop-blur">
      <Container className="flex h-12 items-center justify-between">
        <div className="flex items-center font-bold text-primary">
          <Clapperboard className="size-5" />
          <span className="ml-2 hidden text-lg md:inline-block">SSA</span>
        </div>
        <nav className="flex items-center gap-6 text-xs font-semibold">
          {navbarLinks.map(({ href, name }, idx) => (
            <Link href={href} key={idx} className="text-foreground/80 hover:text-foreground hover:underline">
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </nav>
      </Container>
    </div>
  )
}
