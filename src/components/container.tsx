import { cn } from "@/utils/utils"

export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto w-full max-w-7xl px-8", className)} {...props} />
}
