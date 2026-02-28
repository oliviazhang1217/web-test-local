import React from "react"
import { cn } from "@/lib/utils"

export function Card({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children }) {
  return (
    <div className={cn("p-4 border-b", className)}>
      {children}
    </div>
  )
}

export function CardContent({ className, children }) {
  return (
    <div className={cn("p-4", className)}>
      {children}
    </div>
  )
}
