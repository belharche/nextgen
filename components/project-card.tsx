"use client"

import Image from "next/image"
import { MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/types"
import { useLanguage } from "@/components/language-provider"
import { useEffect, useState } from "react"

interface ProjectCardProps {
  project: Project
  onViewDetails: (project: Project) => void
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-96 bg-background rounded-xl border border-border"></div>
  }

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-background shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={800}
          height={600}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <Button
            variant="secondary"
            size="sm"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0"
            onClick={() => onViewDetails(project)}
          >
            {t("general.viewProject")}
            <MoveRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="p-6">
        <div className="text-sm text-muted-foreground mb-2">{project.category}</div>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground">{project.description}</p>
      </div>
    </div>
  )
}
