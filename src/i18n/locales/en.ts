import type { TranslationKeys } from "./fr";

const en: Record<TranslationKeys, string> = {
  // Navigation
  "nav.home": "Home",
  "nav.about": "About",
  "nav.projects": "Projects",
  "nav.contact": "Contact",

  // Hero
  "hero.badge": "Available for work",
  "hero.greeting": "Hello, I'm",
  "hero.subtitle": "Full Stack Developer.",
  "hero.bio":
    "Software Engineer passionate about innovation and web architecture. With two years of experience at Airbus, I build end-to-end solutions, combining security, performance, and clean code (Java, .NET, NestJS/ReactJS).",
  "hero.cta": "View Projects",
  "hero.cv": "Download Resume",
  "hero.scroll": "Scroll",
  "hero.card.backendDesc":
    "Java, NestJS, C# — robust and high-performance applications.",
  "hero.card.frontendDesc":
    "ReactJS, Angular, HTML/CSS — modern and responsive interfaces.",
  "hero.card.devopsDesc":
    "Docker, Kubernetes (Minikube), S3 — deployment and containerization.",

  // About
  "about.label": "01 — About",
  "about.title": "A bit about ",
  "about.titleHighlight": "me",
  "about.bio1":
    "Passionate Software Engineer, I built my technical expertise in demanding environments. My two years at Airbus allowed me to gain strong proficiency in Java, .NET, and the JS ecosystem.",
  "about.bio2":
    "Curious and committed, I extend this expertise through personal projects. Designing my secure messaging app (E2EE) using NestJS/React demonstrates my interest in cybersecurity and modern architectures.",
  "about.bio3":
    "On a personal level, I value teamwork and perseverance. Whether in cross-functional projects or on the football pitch, I place a high priority on collaboration to achieve ambitious goals.",
  "about.skillsLabel": "Technologies",
  "about.experienceLabel": "Experience",
  "about.exp1.role": "Java Developer",
  "about.exp1.desc":
    "Migration from Java 6 to Java 21, performance optimization, development of a changeLog tool, writing functional specifications. Work-study.",
  "about.exp2.role": "C#/VB.NET Web Developer",
  "about.exp2.desc":
    "Development of responsive pages, new features, SQL queries, and bug fixes. Work-study.",
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
  "projects.proj1.title": "ChainChat",
  "projects.proj1.desc":
    "End-to-end encrypted messaging ensuring total privacy.",
  "projects.proj3.title": "HyperAgent",
  "projects.proj3.desc":
    "Autonomous AI trading agent on Hyperliquid, combining real-time market analysis and automated execution powered by Claude (Anthropic).",

  // Projects Modal
  "projects.modal.close": "Close",
  "projects.modal.viewArchitecture": "View architecture diagram",
  "projects.modal.viewDemo": "View demo",
  "projects.modal.context": "Context",
  "projects.modal.whatItDoes": "What it does",
  "projects.modal.challenges": "Technical Challenges",

  // ChainChat Modal Content
  "projects.proj1.modal.context": "Personal project to explore application security and real-time architectures. The goal: build a messaging platform where no third party — not even the server — can read the messages.",
  "projects.proj1.modal.whatItDoes": "Mainstream messaging apps (WhatsApp, Messenger) centralize data on the server side. ChainChat reverses this model: encryption happens on the client side, and only the recipients hold the decryption keys.",
  "projects.proj1.modal.challenge1": "E2E Encryption: implementing a robust cryptographic protocol without relying on third-party solutions.",
  "projects.proj1.modal.challenge2": "Real-time at scale: synchronizing messages between clients via WebSockets while maintaining encryption integrity.",
  "projects.proj1.modal.challenge3": "Microservices architecture: decoupling auth, messaging, and API gateway to isolate responsibilities and facilitate scalability.",
  "projects.proj1.modal.challenge4": "Key management: distributing public keys without exposing private keys, even in the event of a server compromise.",

  // HyperAgent Modal Content
  "projects.proj3.modal.context": "Active traders on Hyperliquid lack tools that combine intelligent analysis with automatic execution. Existing bots are generic, ignore platform specifics (funding rates, open interest, liquidations), and never explain their decisions.",
  "projects.proj3.modal.whatItDoes": "A non-custodial SaaS co-pilot: the AI continuously analyzes market data, generates explainable natural language signals, and automatically executes orders within user-defined risk limits. Three control modes: signal-only, semi-auto, or fully autonomous.",
  "projects.proj3.modal.challenge1": "AI Reliability in Finance: Every Claude output goes through a strict validation pipeline (Zod + business logic checks) before execution. Ambiguous signals are systematically rejected.",
  "projects.proj3.modal.challenge2": "State Synchronization: A 30s reconciliation mechanism corrects divergences between the internal state and actual Hyperliquid positions (handling timeouts and partial fills).",
  "projects.proj3.modal.challenge3": "Total Transparency: Claude's reasoning is persisted in the database and displayed in the dashboard. Zero \"black box\" trading.",

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
