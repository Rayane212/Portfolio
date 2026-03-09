const fr = {
  // Navigation
  "nav.home": "Accueil",
  "nav.about": "À propos",
  "nav.projects": "Projets",
  "nav.contact": "Contact",

  // Hero
  "hero.badge": "Disponible pour travailler",
  "hero.greeting": "Bonjour, je suis",
  "hero.subtitle": "Développeur Full Stack.",
  "hero.bio":
    "Titulaire du titre RNCP Expert en Développement Logiciel (Ynov Toulouse), fort de deux ans d'alternance chez Airbus. Passionné par la conception d'applications sécurisées et performantes en Java, .NET et NestJS/ReactJS.",
  "hero.cta": "Voir les projets",
  "hero.cv": "Télécharger mon CV",
  "hero.scroll": "Scroll",
  "hero.card.backendDesc":
    "Java, NestJS, C# — applications robustes et performantes.",
  "hero.card.frontendDesc":
    "ReactJS, Angular, HTML/CSS — interfaces modernes et réactives.",
  "hero.card.devopsDesc":
    "Docker, Kubernetes (Minikube), S3 — déploiement et conteneurisation.",

  // About
  "about.label": "01 — À propos",
  "about.title": "Un peu plus sur ",
  "about.titleHighlight": "moi",
  "about.bio1":
    "Développeur Full Stack passionné, j'ai construit mon expertise à travers des environnements techniques exigeants. Mon parcours s'est forgé sur deux piliers : l'agilité web chez DailyBiz (.NET/Responsive) et la rigueur industrielle chez Airbus, où j'ai piloté des migrations critiques vers Java 21.",
  "about.bio2":
    "Curieux et investi, je prolonge cette expertise via mes projets personnels. La conception de ma messagerie sécurisée (E2EE) en NestJS/React témoigne de mon intérêt pour la cybersécurité et les architectures modernes.",
  "about.bio3":
    "Sur le plan humain, je mise sur l'esprit d'équipe et la persévérance. Que ce soit lors de projets transverses ou sur un terrain de football, j'accorde une importance primordiale à la collaboration pour atteindre des objectifs ambitieux.",
  "about.skillsLabel": "Technologies",
  "about.experienceLabel": "Expérience",
  "about.exp1.role": "Développeur Java",
  "about.exp1.desc":
    "Migration Java 6 vers Java 21, optimisation des performances, développement d'un outil de changeLog, rédaction de spécifications fonctionnelles. Alternance.",
  "about.exp2.role": "Développeur Web C#/VB.NET",
  "about.exp2.desc":
    "Développement de pages responsive, nouvelles fonctionnalités, requêtes SQL et correction de bugs. Alternance.",
  "about.exp3.role": "Stagiaire Développement Web",
  "about.exp3.desc": "Développement d'une application web en PHP.",

  // Projects
  "projects.label": "02 — Projets",
  "projects.title": "Mes ",
  "projects.titleHighlight": "Projets",
  "projects.proj1.title": "ChainChat",
  "projects.proj1.desc":
    "Messagerie chiffrée de bout en bout garantissant la confidentialité totale.",
  "projects.proj2.title": "Matchfolio",
  "projects.proj2.desc":
    "Mise en relation recruteurs/candidats basée sur les portfolios via une architecture microservices.",
  "projects.proj3.title": "HyperAgent",
  "projects.proj3.desc":
    "Agent IA de trading sur Hyperliquid pour l'automatisation de stratégies blockchain.",

  // Contact
  "contact.label": "03 — Contact",
  "contact.title": "Restons en ",
  "contact.titleHighlight": "contact",
  "contact.subtitle":
    "Je suis ouvert aux opportunités en CDI et aux projets ambitieux. N'hésitez pas à me contacter pour discuter.",
  "contact.placeholderName": "Nom",
  "contact.placeholderEmail": "Email",
  "contact.placeholderSubject": "Objet",
  "contact.placeholderMessage": "Message",
  "contact.sending": "Envoi...",
  "contact.send": "Envoyer",
  "contact.success": "Message envoyé avec succès !",
  "contact.error":
    "Erreur lors de l'envoi. Réessayez ou contactez-moi directement.",

  // Footer
  "footer.rights": "Tous droits réservés.",
} as const;

export type TranslationKeys = keyof typeof fr;
export default fr;
