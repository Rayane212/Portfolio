import type { TranslationKeys } from "./fr";

const en: Record<TranslationKeys, string> = {
  // Navigation
  "nav.home": "Home",
  "nav.about": "About",
  "nav.projects": "Projects",
  "nav.contact": "Contact",

  // Hero
  "hero.badge": "Open to work · France & Switzerland",
  "hero.greeting": "Hello, I'm",
  "hero.subtitle": "Full Stack Developer.",
  "hero.bio":
    "Full Stack Developer with a strong interest in DevOps. I spent two years at Airbus modernizing a Java application, and I take my personal projects all the way to production: containerized, tested and shipped through CI/CD. I work AI-first with Claude Code and integrate LLMs into real-world products.",
  "hero.cta": "View Projects",
  "hero.cv": "Download Resume",
  "hero.scroll": "Scroll",
  "hero.card.backendDesc":
    "Java/Spring Boot, NestJS, TypeScript: robust, well-tested APIs.",
  "hero.card.frontendDesc":
    "Next.js, React, Angular, Tailwind: modern, responsive interfaces.",
  "hero.card.devopsDesc":
    "Docker, Kubernetes, GitHub Actions, Prometheus/Grafana: from container to monitored production.",

  // About
  "about.label": "01 — About",
  "about.title": "A bit about ",
  "about.titleHighlight": "me",
  "about.bio1":
    "As a Full Stack Developer, I built my foundations in demanding environments: two years at Airbus modernizing a legacy Java application, and one year at DailyBiz working on a C#/.NET CRM within a Scrum team.",
  "about.bio2":
    "I like taking projects all the way to production. Voyago, my AI travel-planning agent, is live with subscriptions, tests and CI/CD. ChainChat, my end-to-end encrypted messaging app, had me deploy a microservices architecture on Kubernetes, complete with monitoring.",
  "about.bio3":
    "I work AI-first: Claude Code and the BMAD method are part of my daily workflow, and integrating LLMs into products has become one of my core strengths.",
  "about.bio4":
    "On the human side, I value teamwork and perseverance, qualities I also build through boxing.",
  "about.skillsLabel": "Technologies",
  "about.skills.llm": "LLM integration (Vercel AI SDK, Anthropic/Gemini APIs)",
  "about.experienceLabel": "Experience",
  "about.exp1.role": "Java Developer (work-study)",
  "about.exp1.bullet1":
    "Migrated a legacy application from Java 6 to Java 21: Ant → Maven build, dependencies hosted on Artifactory, reworked error handling and configurable logging",
  "about.exp1.bullet2":
    "Optimized the SFTP import of aircraft data from 5 minutes down to a few seconds (~99% faster)",
  "about.exp1.bullet3":
    "Built a changelog tool with Spring Boot + Angular, connected to the VersionOne API",
  "about.exp1.bullet4":
    "Gathered requirements from users and wrote functional and technical specifications in English",
  "about.exp2.role": "C#/VB.NET Web Developer (work-study)",
  "about.exp2.desc":
    "Built new features and fixed bugs on a CRM for small and medium-sized businesses (WebForms, MVVM architecture, SQL), within a Scrum organization of 5 teams.",
  "about.exp3.role": "Web Development Intern",
  "about.exp3.desc": "Development of a web application in PHP.",

  // Formations
  "about.formationLabel": "Education",
  "about.form1.role": "Software Development Expert (RNCP Lvl 7)",
  "about.form1.desc": "Specialized master's in complex software architecture, information systems security, and advanced Full Stack technologies.",
  "about.form2.role": "Application Designer and Developer (RNCP Lvl 6)",
  "about.form2.desc": "Application design, database modeling, and C#/.NET architectures.",
  "about.form3.role": "Computer Science Degree (DUT)",
  "about.form3.desc": "Fundamentals of software engineering, algorithms, Java development, and web architectures.",

  // Projects
  "projects.label": "02 — Projects",
  "projects.title": "My ",
  "projects.titleHighlight": "Projects",
  "projects.voyago.title": "Voyago",
  "projects.voyago.desc":
    "AI agent that turns a single sentence into a complete travel itinerary. Live in production with a Pro subscription, PDF/ICS exports, an interactive map and destination guides.",
  "projects.proj1.title": "ChainChat",
  "projects.proj1.desc":
    "End-to-end encrypted messaging app built on a microservices architecture, deployed on Kubernetes with monitoring. Final-year project.",
  "projects.localChatbot.title": "Local AI Chatbot (in progress)",
  "projects.localChatbot.desc":
    "Java application for building and configuring an AI chatbot that runs locally, designed for SMBs that want to use AI without their data ever leaving the premises.",

  // Projects Modal
  "projects.modal.close": "Close",
  "projects.modal.viewArchitecture": "View architecture diagram",
  "projects.modal.viewDemo": "View demo",
  "projects.modal.viewSite": "Visit website",
  "projects.modal.context": "Context",
  "projects.modal.whatItDoes": "What it does",
  "projects.modal.challenges": "Technical Challenges",

  // ChainChat Modal Content
  "projects.proj1.modal.context": "Final-year project to explore application security and real-time architectures. The goal: build a messaging platform where no third party — not even the server — can read the messages.",
  "projects.proj1.modal.whatItDoes": "Mainstream messaging apps (WhatsApp, Messenger) centralize data on the server side. ChainChat reverses this model: encryption happens on the client side, and only the recipients hold the decryption keys.",
  "projects.proj1.modal.challenge1": "E2E Encryption: implementing a robust cryptographic protocol without relying on third-party solutions.",
  "projects.proj1.modal.challenge2": "Real-time at scale: synchronizing messages between clients via WebSockets while maintaining encryption integrity.",
  "projects.proj1.modal.challenge3": "Microservices architecture: decoupling auth, messaging, and API gateway to isolate responsibilities and facilitate scalability.",
  "projects.proj1.modal.challenge4": "Key management: distributing public keys without exposing private keys, even in the event of a server compromise.",

  // Contact
  "contact.label": "03 — Contact",
  "contact.title": "Let's ",
  "contact.titleHighlight": "connect",
  "contact.subtitle":
    "I'm open to permanent positions and ambitious projects. Feel free to reach out to discuss.",
  "contact.placeholderName": "Name",
  "contact.placeholderEmail": "Email",
  "contact.placeholderSubject": "Subject",
  "contact.placeholderMessage": "Message",
  "contact.sending": "Sending...",
  "contact.send": "Send",
  "contact.success": "Message sent successfully!",
  "contact.error": "Error sending message. Please try again or contact me directly.",

  // Footer
  "footer.rights": "All rights reserved.",
};

export default en;
