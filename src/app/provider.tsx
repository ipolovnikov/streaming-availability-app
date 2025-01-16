import { ThemeProvider } from "next-themes"

export function RootProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  return <ThemeProvider>{children}</ThemeProvider>
}
