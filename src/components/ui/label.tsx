import { Label as OriginalLabel, LabelProps } from "@headlessui/react"
import { cn } from "@/utils/utils"

export const Label = ({ className, ...props }: LabelProps) => (
  <OriginalLabel className={cn("mb-1 block text-sm/5 font-semibold", className)} {...props} />
)
