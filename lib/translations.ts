export type Language = "en" | "ar" | "fr"

export type Translations = {
  [key in Language]: {
    general: {
      viewWork: string
      getInTouch: string
      viewProject: string
      viewAllProjects: string
      backToHome: string
      allCategories: string
    }
    nav: {
      services: string
      technologies: string
      projects: string
      about: string
      contact: string
      letsTalk: string
    }
    hero: {
      title: string
      subtitle: string
      titleHighlight: string
    }
    services: {
      title: string
      subtitle: string
      webDev: {
        title: string
        description: string
      }
      mobileDev: {
        title: string
        description: string
      }
      backendDev: {
        title: string
        description: string
      }
      database: {
        title: string
        description: string
      }
      uiUx: {
        title: string
        description: string
      }
      wordpress: {
        title: string
        description: string
      }
    }
    technologies: {
      title: string
      subtitle: string
    }
    projects: {
      title: string
      subtitle: string
      allProjects: string
      noProjects: string
      clearFilter: string
      overview: string
      techUsed: string
      keyFeatures: string
      viewLive: string
      viewCode: string
    }
    about: {
      title: string
      subtitle: string
      paragraph1: string
      paragraph2: string
      paragraph3: string
    }
    contact: {
      title: string
      subtitle: string
      info: string
      email: string
      phone: string
      address: string
      hours: string
      form: {
        name: string
        email: string
        subject: string
        message: string
        sending: string
        send: string
        namePlaceholder: string
        emailPlaceholder: string
        subjectPlaceholder: string
        messagePlaceholder: string
        successTitle: string
        successMessage: string
      }
    }
    footer: {
      rights: string
    }
  }
}

export const translations: Translations = {
  en: {
    general: {
      viewWork: "View Our Work",
      getInTouch: "Get in Touch",
      viewProject: "View Project",
      viewAllProjects: "View All Projects",
      backToHome: "Back to Home",
      allCategories: "All Categories",
    },
    nav: {
      services: "Services",
      technologies: "Technologies",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      letsTalk: "Let's Talk",
    },
    hero: {
      title: "Web & Mobile Development",
      titleHighlight: "Experts",
      subtitle:
        "We transform ideas into powerful digital solutions with cutting-edge technologies and sleek UI/UX design.",
    },
    services: {
      title: "Our Services",
      subtitle:
        "We specialize in full-stack web and mobile app development, transforming ideas into powerful digital solutions.",
      webDev: {
        title: "Web Development",
        description:
          "Custom web applications built with React.js, Next.js, and other modern frameworks to create responsive, high-performance websites.",
      },
      mobileDev: {
        title: "Mobile Development",
        description:
          "Native and cross-platform mobile applications using Flutter to deliver seamless experiences across iOS and Android devices.",
      },
      backendDev: {
        title: "Backend Development",
        description:
          "Robust server-side solutions with Spring Boot, Django, and Node.js to power your applications with reliable performance.",
      },
      database: {
        title: "Database Solutions",
        description:
          "Efficient data management with MySQL, PostgreSQL, and Supabase to ensure your application data is secure and accessible.",
      },
      uiUx: {
        title: "UI/UX Design",
        description:
          "Intuitive and engaging user interfaces designed with the latest design principles to enhance user experience and satisfaction.",
      },
      wordpress: {
        title: "WordPress Development",
        description:
          "Custom WordPress themes and plugins to create content-managed websites that are easy to update and maintain.",
      },
    },
    technologies: {
      title: "Technologies We Use",
      subtitle: "We leverage the latest technologies to build modern, scalable, and maintainable applications.",
    },
    projects: {
      title: "Selected Work",
      subtitle: "Check out some of our recent projects that showcase our expertise and creativity.",
      allProjects: "Our Projects",
      noProjects: "No projects found with the selected filter.",
      clearFilter: "Clear Filter",
      overview: "Overview",
      techUsed: "Technologies Used",
      keyFeatures: "Key Features",
      viewLive: "View Live",
      viewCode: "View Code",
    },
    about: {
      title: "Our Mission",
      subtitle: "Unlock the power of your ideas with clean code, scalable architecture, and sleek UI/UX.",
      paragraph1:
        "At NextGen, we believe that great software is built on a foundation of technical excellence, user-centered design, and clear communication. Our team of experienced developers and designers work closely with clients to understand their unique needs and deliver solutions that exceed expectations.",
      paragraph2:
        "We're passionate about staying at the forefront of technology trends and best practices, ensuring that our clients benefit from the latest advancements in web and mobile development.",
      paragraph3:
        "Whether you're a startup looking to build your first MVP or an established business seeking to modernize your digital presence, we have the expertise and dedication to help you succeed.",
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Ready to start your project? Contact us today and let's build something incredible together!",
      info: "Contact Information",
      email: "Email:",
      phone: "Phone:",
      address: "Address:",
      hours: "Hours:",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        sending: "Sending...",
        send: "Send Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "your.email@example.com",
        subjectPlaceholder: "What's this about?",
        messagePlaceholder: "Tell us about your project...",
        successTitle: "Message Sent!",
        successMessage: "Thanks for reaching out. We'll get back to you soon.",
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  fr: {
    general: {
      viewWork: "Voir Nos Projets",
      getInTouch: "Contactez-nous",
      viewProject: "Voir le Projet",
      viewAllProjects: "Voir Tous les Projets",
      backToHome: "Retour à l'Accueil",
      allCategories: "Toutes les Catégories",
    },
    nav: {
      services: "Services",
      technologies: "Technologies",
      projects: "Projets",
      about: "À Propos",
      contact: "Contact",
      letsTalk: "Discutons",
    },
    hero: {
      title: "Développement Web & Mobile",
      titleHighlight: "Experts",
      subtitle:
        "Nous transformons vos idées en solutions numériques puissantes avec des technologies de pointe et un design UI/UX élégant.",
    },
    services: {
      title: "Nos Services",
      subtitle:
        "Nous sommes spécialisés dans le développement web et mobile full-stack, transformant les idées en solutions numériques puissantes.",
      webDev: {
        title: "Développement Web",
        description:
          "Applications web personnalisées construites avec React.js, Next.js et d'autres frameworks modernes pour créer des sites web réactifs et performants.",
      },
      mobileDev: {
        title: "Développement Mobile",
        description:
          "Applications mobiles natives et multiplateformes utilisant Flutter pour offrir des expériences fluides sur iOS et Android.",
      },
      backendDev: {
        title: "Développement Backend",
        description:
          "Solutions côté serveur robustes avec Spring Boot, Django et Node.js pour alimenter vos applications avec des performances fiables.",
      },
      database: {
        title: "Solutions de Base de Données",
        description:
          "Gestion efficace des données avec MySQL, PostgreSQL et Supabase pour garantir que les données de votre application sont sécurisées et accessibles.",
      },
      uiUx: {
        title: "Design UI/UX",
        description:
          "Interfaces utilisateur intuitives et engageantes conçues avec les derniers principes de design pour améliorer l'expérience utilisateur.",
      },
      wordpress: {
        title: "Développement WordPress",
        description:
          "Thèmes et plugins WordPress personnalisés pour créer des sites web à contenu géré faciles à mettre à jour et à maintenir.",
      },
    },
    technologies: {
      title: "Technologies Utilisées",
      subtitle:
        "Nous utilisons les dernières technologies pour construire des applications modernes, évolutives et maintenables.",
    },
    projects: {
      title: "Travaux Sélectionnés",
      subtitle: "Découvrez certains de nos projets récents qui mettent en valeur notre expertise et notre créativité.",
      allProjects: "Nos Projets",
      noProjects: "Aucun projet trouvé avec le filtre sélectionné.",
      clearFilter: "Effacer le Filtre",
      overview: "Aperçu",
      techUsed: "Technologies Utilisées",
      keyFeatures: "Fonctionnalités Clés",
      viewLive: "Voir en Direct",
      viewCode: "Voir le Code",
    },
    about: {
      title: "Notre Mission",
      subtitle:
        "Libérez la puissance de vos idées avec un code propre, une architecture évolutive et une UI/UX élégante.",
      paragraph1:
        "Chez NextGen, nous croyons qu'un excellent logiciel est construit sur une base d'excellence technique, de design centré sur l'utilisateur et de communication claire. Notre équipe de développeurs et de designers expérimentés travaille en étroite collaboration avec les clients pour comprendre leurs besoins uniques et fournir des solutions qui dépassent les attentes.",
      paragraph2:
        "Nous sommes passionnés par le fait de rester à la pointe des tendances technologiques et des meilleures pratiques, garantissant que nos clients bénéficient des dernières avancées en matière de développement web et mobile.",
      paragraph3:
        "Que vous soyez une startup cherchant à construire votre premier MVP ou une entreprise établie cherchant à moderniser votre présence numérique, nous avons l'expertise et le dévouement pour vous aider à réussir.",
    },
    contact: {
      title: "Contactez-nous",
      subtitle:
        "Prêt à démarrer votre projet ? Contactez-nous aujourd'hui et construisons ensemble quelque chose d'incroyable !",
      info: "Informations de Contact",
      email: "Email :",
      phone: "Téléphone :",
      address: "Adresse :",
      hours: "Horaires :",
      form: {
        name: "Nom",
        email: "Email",
        subject: "Sujet",
        message: "Message",
        sending: "Envoi en cours...",
        send: "Envoyer le Message",
        namePlaceholder: "Votre nom",
        emailPlaceholder: "votre.email@exemple.com",
        subjectPlaceholder: "De quoi s'agit-il ?",
        messagePlaceholder: "Parlez-nous de votre projet...",
        successTitle: "Message Envoyé !",
        successMessage: "Merci de nous avoir contacté. Nous vous répondrons bientôt.",
      },
    },
    footer: {
      rights: "Tous droits réservés.",
    },
  },
  ar: {
    general: {
      viewWork: "عرض أعمالنا",
      getInTouch: "تواصل معنا",
      viewProject: "عرض المشروع",
      viewAllProjects: "عرض جميع المشاريع",
      backToHome: "العودة إلى الرئيسية",
      allCategories: "جميع الفئات",
    },
    nav: {
      services: "الخدمات",
      technologies: "التقنيات",
      projects: "المشاريع",
      about: "من نحن",
      contact: "اتصل بنا",
      letsTalk: "لنتحدث",
    },
    hero: {
      title: "تطوير الويب والجوال",
      titleHighlight: "خبراء",
      subtitle: "نحول أفكارك إلى حلول رقمية قوية باستخدام تقنيات متطورة وتصميم واجهة مستخدم أنيق.",
    },
    services: {
      title: "خدماتنا",
      subtitle: "نحن متخصصون في تطوير تطبيقات الويب والجوال الشاملة، ونحول الأفكار إلى حلول رقمية قوية.",
      webDev: {
        title: "تطوير الويب",
        description:
          "تطبيقات ويب مخصصة مبنية باستخدام React.js وNext.js وإطارات عمل حديثة أخرى لإنشاء مواقع ويب سريعة الاستجابة وعالية الأداء.",
      },
      mobileDev: {
        title: "تطوير الجوال",
        description:
          "تطبيقات الجوال الأصلية ومتعددة المنصات باستخدام Flutter لتقديم تجارب سلسة عبر أجهزة iOS وAndroid.",
      },
      backendDev: {
        title: "تطوير الخلفية",
        description: "حلول قوية من جانب الخادم مع Spring Boot وDjango وNode.js لتشغيل تطبيقاتك بأداء موثوق.",
      },
      database: {
        title: "حلول قواعد البيانات",
        description: "إدارة فعالة للبيانات مع MySQL وPostgreSQL وSupabase لضمان أمان وسهولة الوصول إلى بيانات تطبيقك.",
      },
      uiUx: {
        title: "تصميم واجهة المستخدم",
        description: "واجهات مستخدم بديهية وجذابة مصممة بأحدث مبادئ التصميم لتعزيز تجربة المستخدم ورضاه.",
      },
      wordpress: {
        title: "تطوير ووردبريس",
        description: "سمات وإضافات ووردبريس مخصصة لإنشاء مواقع ويب ذات محتوى مُدار يسهل تحديثها وصيانتها.",
      },
    },
    technologies: {
      title: "التقنيات التي نستخدمها",
      subtitle: "نستفيد من أحدث التقنيات لبناء تطبيقات حديثة وقابلة للتطوير وسهلة الصيانة.",
    },
    projects: {
      title: "أعمال مختارة",
      subtitle: "تعرف على بعض مشاريعنا الحديثة التي تعرض خبرتنا وإبداعنا.",
      allProjects: "مشاريعنا",
      noProjects: "لم يتم العثور على مشاريع بالفلتر المحدد.",
      clearFilter: "مسح الفلتر",
      overview: "نظرة عامة",
      techUsed: "التقنيات المستخدمة",
      keyFeatures: "الميزات الرئيسية",
      viewLive: "عرض مباشر",
      viewCode: "عرض الكود",
    },
    about: {
      title: "مهمتنا",
      subtitle: "أطلق العنان لقوة أفكارك مع كود نظيف وهيكلة قابلة للتطوير وواجهة مستخدم أنيقة.",
      paragraph1:
        "في NextGen، نؤمن بأن البرمجيات الرائعة تُبنى على أساس التميز التقني والتصميم المتمحور حول المستخدم والتواصل الواضح. يعمل فريقنا من المطورين والمصممين ذوي الخبرة بشكل وثيق مع العملاء لفهم احتياجاتهم الفريدة وتقديم حلول تفوق التوقعات.",
      paragraph2:
        "نحن متحمسون للبقاء في طليعة اتجاهات التكنولوجيا وأفضل الممارسات، مما يضمن استفادة عملائنا من أحدث التطورات في تطوير الويب والجوال.",
      paragraph3:
        "سواء كنت شركة ناشئة تتطلع إلى بناء أول منتج قابل للتطبيق أو شركة راسخة تسعى لتحديث وجودك الرقمي، لدينا الخبرة والتفاني لمساعدتك على النجاح.",
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "هل أنت مستعد لبدء مشروعك؟ اتصل بنا اليوم ولنبني معًا شيئًا مذهلاً!",
      info: "معلومات الاتصال",
      email: "البريد الإلكتروني:",
      phone: "الهاتف:",
      address: "العنوان:",
      hours: "ساعات العمل:",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "الرسالة",
        sending: "جاري الإرسال...",
        send: "إرسال الرسالة",
        namePlaceholder: "اسمك",
        emailPlaceholder: "بريدك@مثال.com",
        subjectPlaceholder: "ما موضوع رسالتك؟",
        messagePlaceholder: "أخبرنا عن مشروعك...",
        successTitle: "تم إرسال الرسالة!",
        successMessage: "شكراً للتواصل معنا. سنرد عليك قريباً.",
      },
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
    },
  },
}
