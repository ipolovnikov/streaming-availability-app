import { Input as OriginalInput, InputProps } from "@headlessui/react"
import { cn } from "@/utils/utils"

export const Input = ({ className, ...props }: InputProps) => (
  <OriginalInput
    className={cn(
      "w-full rounded bg-foreground/5 px-2.5 py-1.5 text-foreground/80 placeholder:text-foreground/60",
      "outline-1 outline-primary focus:text-foreground focus:outline",
      className,
    )}
    {...props}
  />
)
