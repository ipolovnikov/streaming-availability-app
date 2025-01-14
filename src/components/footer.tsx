import Link from "next/link"

import { Container } from "./container"
import { footerLinks } from "@/configs/nav-config"

export function Footer() {
  return (
    <Container className="flex h-24 items-center justify-between">
      <p className="text-xs font-light text-foreground/80">&copy; {new Date().getFullYear()} All right reserved.</p>

      <nav className="flex items-center gap-6 text-xs font-semibold">
        {footerLinks.map(({ href, name }, idx) => (
          <Link href={href} key={idx} className="text-foreground/80 hover:text-foreground hover:underline">
            {name}
          </Link>
        ))}
      </nav>
    </Container>
  )
}
