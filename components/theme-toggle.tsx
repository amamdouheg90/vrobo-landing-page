"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sun } from "lucide-react"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  React.useEffect(() => {
    setTheme("light")
  }, [setTheme])

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme("light")}
      className="rounded-full"
    >
      <Sun className="h-5 w-5" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

