"use client"

import { type ReactNode, useEffect, useState } from "react"
import { LanguageProvider } from "@/components/language-provider"

export function ClientWrapper({ children }: { children: ReactNode }) {
  // This ensures the component only renders on the client
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder with the same structure during SSR
    return <div className="min-h-screen"></div>
  }

  return <LanguageProvider>{children}</LanguageProvider>
}
