import { Field as OriginalField, FieldProps } from "@headlessui/react"
import { cn } from "@/utils/utils"

export const Field = ({ className, ...props }: FieldProps) => (
  <OriginalField className={cn("flex flex-col", className)} {...props} />
)
