import React from "react"
import { tv } from "tailwind-variants"
import { cn } from "@/lib/utils"

const button = tv({
  base:
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black disabled:opacity-50 disabled:pointer-events-none",
  variants: {
    variant: {
      default: "bg-black text-white hover:bg-neutral-800",
      outline:
        "border border-black text-black hover:bg-black hover:text-white",
      ghost: "text-black hover:bg-neutral-100",
    },
    size: {
      sm: "h-9 px-3",
      md: "h-10 px-4",
      lg: "h-12 px-6 text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
})

export function Button({ className, variant, size, ...props }) {
  return (
    <button className={cn(button({ variant, size }), className)} {...props} />
  )
}
