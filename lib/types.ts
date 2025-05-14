export interface Project {
  id: string
  title: string
  category: string
  image: string
  description: string
  longDescription: string
  technologies: string[]
  features: string[]
  liveUrl?: string
  githubUrl?: string
  testimonial?: {
    quote: string
    author: string
    role: string
  }
}
