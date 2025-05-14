"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface SparkleProps {
  size: number
  color: string
  style: React.CSSProperties
}

function Sparkle({ size, color, style }: SparkleProps) {
  return (
    <span
      className="absolute inline-block animate-sparkle-fade"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...style,
      }}
    >
      <svg
        className="absolute animate-sparkle-spin"
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
          fill={color}
        />
      </svg>
    </span>
  )
}

interface SparklesProps {
  className?: string
  color?: string
  minSize?: number
  maxSize?: number
  count?: number
}

export function Sparkles({ className, color = "currentColor", minSize = 6, maxSize = 14, count = 60 }: SparklesProps) {
  const [sparkles, setSparkles] = useState<Array<{ id: number; size: number; style: React.CSSProperties }>>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const generateSparkles = () => {
      const newSparkles = []
      for (let i = 0; i < count; i++) {
        const size = Math.random() * (maxSize - minSize) + minSize
        newSparkles.push({
          id: i,
          size,
          style: {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.5, // Keep high opacity for visibility
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${Math.random() * 2 + 1.5}s`,
            zIndex: 5,
          },
        })
      }
      setSparkles(newSparkles)
    }

    generateSparkles()

    // Regenerate sparkles periodically for a dynamic effect
    const interval = setInterval(() => {
      generateSparkles()
    }, 3000)

    return () => clearInterval(interval)
  }, [count, maxSize, minSize])

  if (!mounted) return null

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} size={sparkle.size} color={color} style={sparkle.style} />
      ))}
    </div>
  )
}
