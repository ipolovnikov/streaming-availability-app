"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <Moon className="size-5" /> : <Sun className="size-5" />}
    </button>
  )
}
