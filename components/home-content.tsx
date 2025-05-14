"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { MoveRight, Code, Smartphone, Server, Database, Palette } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ProjectCard } from "@/components/project-card"
import { ServiceCard } from "@/components/service-card"
import { ContactForm } from "@/components/contact-form"
import { ProjectModal } from "@/components/project-modal"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/components/language-provider"
import { Sparkles } from "@/components/sparkles"
import type { Project } from "@/lib/types"
import { projects } from "@/lib/data"
import { useTheme } from "next-themes"

export function HomeContent() {
  const { t, dir } = useLanguage()
  const { theme } = useTheme()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
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

  // Display only the first 4 projects on the homepage
  const featuredProjects = projects.slice(0, 4)

  if (!mounted) {
    return <div className="min-h-screen"></div>
  }

  // Determine sparkle color based on theme - keep vibrant colors
  const sparkleColor =
    theme === "dark"
      ? "rgba(100, 150, 255, 0.8)" // Bright blue in dark mode
      : "rgba(0, 90, 255, 0.5)" // Vibrant blue in light mode

  return (
    <div className="min-h-screen" dir={dir}>
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">NextGen</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.services")}
          </Link>
          <Link href="#technologies" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.technologies")}
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.projects")}
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.about")}
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.contact")}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button          >
            <a href="/#contact" className="flex items-center">
              {t("nav.letsTalk")}
              <MoveRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section with Smaller Sparkles */}
      <section className="container mx-auto px-4 py-20 md:py-32 relative overflow-hidden">
        {/* Add a semi-transparent background to make sparkles more visible */}
        <div className="absolute inset-0 bg-primary/5 rounded-3xl"></div>

        {/* Smaller sparkles with increased count for better distribution */}
        <Sparkles color={sparkleColor} count={70} minSize={6} maxSize={14} className="z-0" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {t("hero.title")}
            <span className="block text-primary mt-2">{t("hero.titleHighlight")}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{t("hero.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <a href="/#projects" className="flex items-center">
                {t("general.viewWork")}
                <MoveRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="/#contact" className="flex items-center">
                {t("general.getInTouch")}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("services.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("services.subtitle")}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Code className="h-10 w-10" />}
            title={t("services.webDev.title")}
            description={t("services.webDev.description")}
          />
          <ServiceCard
            icon={<Smartphone className="h-10 w-10" />}
            title={t("services.mobileDev.title")}
            description={t("services.mobileDev.description")}
          />
          <ServiceCard
            icon={<Server className="h-10 w-10" />}
            title={t("services.backendDev.title")}
            description={t("services.backendDev.description")}
          />
          <ServiceCard
            icon={<Database className="h-10 w-10" />}
            title={t("services.database.title")}
            description={t("services.database.description")}
          />
          <ServiceCard
            icon={<Palette className="h-10 w-10" />}
            title={t("services.uiUx.title")}
            description={t("services.uiUx.description")}
          />
          <ServiceCard
            icon={<Code className="h-10 w-10" />}
            title={t("services.wordpress.title")}
            description={t("services.wordpress.description")}
          />
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="bg-muted py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex justify-center items-center gap-4">
              <Code className="h-8 w-8 mb-3 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("technologies.title")}</h2>
              <Code className="h-8 w-8 mb-3 text-primary" />
            </div>
            <p className="text-lg text-muted-foreground">{t("technologies.subtitle")}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "React.js", logo: "/placeholder.svg?height=80&width=80" },
              { name: "Next.js", logo: "/placeholder.svg?height=80&width=80" },
              { name: "Flutter", logo: "/placeholder.svg?height=80&width=80" },
              { name: "Spring Boot", logo: "/placeholder.svg?height=80&width=80" },
              { name: "Django", logo: "/placeholder.svg?height=80&width=80" },
              { name: "Node.js", logo: "/placeholder.svg?height=80&width=80" },
              { name: "MySQL", logo: "/placeholder.svg?height=80&width=80" },
              { name: "Supabase", logo: "/placeholder.svg?height=80&width=80" },
              { name: "WordPress", logo: "/placeholder.svg?height=80&width=80" },
              { name: "Tailwind CSS", logo: "/placeholder.svg?height=80&width=80" },
              { name: "TypeScript", logo: "/placeholder.svg?height=80&width=80" },
              { name: "Firebase", logo: "/placeholder.svg?height=80&width=80" },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-background rounded-lg shadow-sm"
              >
                <Image src={tech.logo || "/placeholder.svg"} alt={tech.name} width={80} height={80} className="mb-4" />
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("projects.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("projects.subtitle")}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onViewDetails={handleViewProject} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">
              {t("general.viewAllProjects")}
              <MoveRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("about.subtitle")}</p>
          </div>
          <div className="bg-background rounded-xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto">
            <p className="text-lg mb-6">{t("about.paragraph1")}</p>
            <p className="text-lg mb-6">{t("about.paragraph2")}</p>
            <p className="text-lg">{t("about.paragraph3")}</p>
          </div>
        </div>
      </section>

      {/* Contact Section - Simplified with only the form */}
      <section id="contact" className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("contact.subtitle")}</p>
        </div>
        <div className="max-w-xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
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
