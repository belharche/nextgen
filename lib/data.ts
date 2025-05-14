import type { Project } from "./types"

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
    description: "A full-featured e-commerce platform built with Next.js and Supabase.",
    longDescription:
      "This comprehensive e-commerce solution provides businesses with everything they need to sell products online. The platform includes product management, inventory tracking, secure checkout, payment processing, and customer account management. Built with performance and scalability in mind, it delivers a seamless shopping experience across all devices.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS", "Vercel"],
    features: [
      "Responsive product catalog with advanced filtering",
      "Secure user authentication and account management",
      "Real-time inventory tracking and management",
      "Integrated payment processing with Stripe",
      "Order management and tracking",
      "Admin dashboard with sales analytics",
    ],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/nextgen/ecommerce",
    testimonial: {
      quote:
        "The e-commerce platform NextGen built for us has transformed our business. Sales have increased by 40% since launch, and the admin tools make managing our store effortless.",
      author: "Sarah Johnson",
      role: "CEO, Fashion Boutique",
    },
  },
  {
    id: "fitness-app",
    title: "Health & Fitness App",
    category: "Mobile Development",
    image: "/placeholder.svg?height=600&width=800",
    description: "A cross-platform mobile app built with Flutter for tracking fitness goals.",
    longDescription:
      "This comprehensive fitness application helps users track their workouts, nutrition, and progress toward their health goals. The app features personalized workout plans, nutrition tracking, progress visualization, and social features to keep users motivated. Available on both iOS and Android platforms, it provides a seamless experience with offline capabilities.",
    technologies: ["Flutter", "Dart", "Firebase", "Google Fit API", "Apple HealthKit"],
    features: [
      "Personalized workout plans and routines",
      "Nutrition tracking and meal planning",
      "Progress tracking with visual charts",
      "Integration with wearable devices",
      "Social sharing and community challenges",
      "Offline mode for workouts without internet",
    ],
    liveUrl: "https://example.com/fitnessapp",
    githubUrl: "https://github.com/nextgen/fitnessapp",
    testimonial: {
      quote:
        "Working with NextGen on our fitness app was a game-changer. Their expertise in Flutter allowed us to launch on both iOS and Android simultaneously, and users love the intuitive interface.",
      author: "Michael Chen",
      role: "Founder, FitLife",
    },
  },
  {
    id: "real-estate",
    title: "Real Estate Management System",
    category: "Full Stack Development",
    image: "/placeholder.svg?height=600&width=800",
    description: "A comprehensive system for managing real estate listings and transactions.",
    longDescription:
      "This real estate management system streamlines the entire property listing and transaction process for agents and agencies. It includes property listing management, client relationship tools, document handling, and transaction tracking. The platform integrates with mapping services and provides powerful search capabilities for potential buyers and renters.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Google Maps API", "AWS S3"],
    features: [
      "Property listing management with multimedia support",
      "Advanced search with geolocation filtering",
      "Client relationship management tools",
      "Document generation and e-signing integration",
      "Transaction tracking and management",
      "Analytics dashboard for market insights",
    ],
    liveUrl: "https://example.com/realestate",
    githubUrl: "https://github.com/nextgen/realestate",
    testimonial: {
      quote:
        "The real estate management system has revolutionized how our agents work. What used to take hours now takes minutes, and our clients love the seamless experience.",
      author: "David Rodriguez",
      role: "Director, Premier Properties",
    },
  },
  {
    id: "financial-dashboard",
    title: "Financial Dashboard",
    category: "Web Application",
    image: "/placeholder.svg?height=600&width=800",
    description: "An interactive dashboard for financial data visualization and analysis.",
    longDescription:
      "This financial dashboard provides businesses with real-time insights into their financial performance. It aggregates data from multiple sources, including accounting software, banking APIs, and market data feeds, to present a comprehensive view of financial health. The dashboard includes customizable reports, forecasting tools, and alerts for key financial metrics.",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Plaid API", "Docker"],
    features: [
      "Real-time financial data visualization",
      "Cash flow forecasting and scenario planning",
      "Expense tracking and categorization",
      "Budget management and variance analysis",
      "Customizable reports and dashboards",
      "Secure banking integration via Plaid",
    ],
    liveUrl: "https://example.com/financedash",
    githubUrl: "https://github.com/nextgen/financedash",
    testimonial: {
      quote:
        "The financial dashboard NextGen developed gives us unprecedented visibility into our finances. The forecasting tools alone have saved us thousands in better cash flow management.",
      author: "Jennifer Lee",
      role: "CFO, Tech Innovations Inc.",
    },
  },
  {
    id: "learning-management",
    title: "Learning Management System",
    category: "Education Technology",
    image: "/placeholder.svg?height=600&width=800",
    description: "A comprehensive platform for online education and course management.",
    longDescription:
      "This learning management system provides educational institutions with tools to create, deliver, and manage online courses. It includes content management, student enrollment, progress tracking, assessment tools, and communication features. The platform supports various content types, including video, interactive quizzes, and documents.",
    technologies: ["Next.js", "TypeScript", "Django", "PostgreSQL", "AWS", "WebRTC"],
    features: [
      "Course creation and management tools",
      "Student enrollment and progress tracking",
      "Interactive assessments and quizzes",
      "Live virtual classroom with video conferencing",
      "Discussion forums and messaging",
      "Certification generation and verification",
    ],
    liveUrl: "https://example.com/lms",
    githubUrl: "https://github.com/nextgen/lms",
    testimonial: {
      quote:
        "Our university's transition to online learning was seamless thanks to NextGen's learning management system. The platform is intuitive for both faculty and students, and the support has been exceptional.",
      author: "Dr. Robert Williams",
      role: "Dean of Digital Learning, State University",
    },
  },
  {
    id: "inventory-system",
    title: "Inventory Management System",
    category: "Enterprise Software",
    image: "/placeholder.svg?height=600&width=800",
    description: "A robust system for tracking inventory across multiple locations.",
    longDescription:
      "This inventory management system helps businesses track and manage their inventory across multiple warehouses and retail locations. It includes barcode scanning, stock level monitoring, order management, supplier tracking, and reporting tools. The system integrates with popular e-commerce platforms and accounting software to provide a complete solution for inventory control.",
    technologies: ["React", "Node.js", "MySQL", "Redis", "Docker", "Kubernetes"],
    features: [
      "Real-time inventory tracking across locations",
      "Barcode and QR code scanning support",
      "Purchase order and supplier management",
      "Low stock alerts and automatic reordering",
      "Batch tracking and expiration date management",
      "Comprehensive reporting and analytics",
    ],
    liveUrl: "https://example.com/inventory",
    githubUrl: "https://github.com/nextgen/inventory",
    testimonial: {
      quote:
        "Since implementing NextGen's inventory system, we've reduced stockouts by 85% and improved warehouse efficiency by 30%. The ROI was evident within the first quarter.",
      author: "Thomas Brown",
      role: "Operations Manager, Global Distributors",
    },
  },
]
