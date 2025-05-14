"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, Code, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/components/language-provider"
import type { Project } from "@/lib/types"
import { projects } from "@/lib/data"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ProjectsContent() {
  const { t, dir } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleViewProject = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  // Get unique categories for filter
  const categories = Array.from(new Set(projects.map((project) => project.category)))

  // Filter projects by category if a filter is selected
  const filteredProjects = categoryFilter ? projects.filter((project) => project.category === categoryFilter) : projects

  if (!mounted) {
    return <div className="min-h-screen"></div>
  }

  return (
    <div className="min-h-screen" dir={dir}>
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">NextGen</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </header>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
              <ChevronLeft className="mr-1 h-4 w-4" />
              {t("general.backToHome")}
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">{t("projects.allProjects")}</h1>
            <p className="text-lg text-muted-foreground mt-2">{t("projects.subtitle")}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                {categoryFilter || t("general.allCategories")}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuCheckboxItem
                checked={categoryFilter === null}
                onCheckedChange={() => setCategoryFilter(null)}
              >
                {t("general.allCategories")}
              </DropdownMenuCheckboxItem>
              {categories.map((category) => (
                <DropdownMenuCheckboxItem
                  key={category}
                  checked={categoryFilter === category}
                  onCheckedChange={(checked) => {
                    if (checked) setCategoryFilter(category)
                    else setCategoryFilter(null)
                  }}
                >
                  {category}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onViewDetails={handleViewProject} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">{t("projects.noProjects")}</p>
            <Button variant="outline" className="mt-4" onClick={() => setCategoryFilter(null)}>
              {t("projects.clearFilter")}
            </Button>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Code className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">NextGen</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} NextGen. {t("footer.rights")}
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}
