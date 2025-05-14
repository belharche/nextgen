"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import type { Project } from "@/lib/types"
import { useEffect, useState } from "react"

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { t, dir } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !project) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" dir={dir}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">{project.category}</DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-6">
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">{t("projects.overview")}</h3>
              <p className="text-muted-foreground">{project.description}</p>
              <p className="mt-4 text-muted-foreground">{project.longDescription}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">{t("projects.techUsed")}</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">{t("projects.keyFeatures")}</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {project.testimonial && (
              <div className="bg-muted p-4 rounded-lg italic">
                <p className="text-muted-foreground">"{project.testimonial.quote}"</p>
                <p className="text-sm font-medium mt-2">
                  — {project.testimonial.author}, {project.testimonial.role}
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-4 pt-4">
              {project.liveUrl && (
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {t("projects.viewLive")}
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    {t("projects.viewCode")}
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
