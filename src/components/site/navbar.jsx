import React from "react"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export function Navbar() {
  return (
    <header className="px-6 py-4 flex items-center justify-between">
      <div className="font-bold tracking-widest">OLIVIA PORFOLIO</div>
      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </header>
  )
}
