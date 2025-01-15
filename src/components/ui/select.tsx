import { Select as OriginalSelect, SelectProps } from "@headlessui/react"
import { cn } from "@/utils/utils"
import { ChevronDown } from "lucide-react"

export const Select = ({ className, ...props }: SelectProps) => (
  <div className="relative">
    <OriginalSelect
      className={cn(
        "w-full rounded bg-foreground/5 px-2.5 py-1.5 text-foreground/80 placeholder:text-foreground/60",
        "appearance-none",
        "outline-1 outline-primary focus:text-foreground focus:outline",
        "*:bg-background *:text-foreground",
        className,
      )}
      {...props}
    />
    <ChevronDown className="pointer-events-none absolute right-2.5 top-2.5 size-4" aria-hidden="true" />
  </div>
)
