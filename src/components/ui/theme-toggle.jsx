import React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    const root = document.documentElement
    if (isDark) root.classList.add("dark")
    else root.classList.remove("dark")
  }, [isDark])

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label="切换主题"
      onClick={() => setIsDark((v) => !v)}
      className="gap-2"
    >
      {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
      {isDark ? "暗色" : "亮色"}
    </Button>
  )
}
