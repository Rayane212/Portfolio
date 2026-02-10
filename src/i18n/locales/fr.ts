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
    "Développeur Full Stack diplômé Expert en Développement Logiciel (RNCP, Ynov Toulouse). Deux ans d'alternance chez Airbus m'ont permis d'acquérir une solide expérience en Java, .NET et NestJS/ReactJS.",
  "about.bio2":
    "Passionné par la conception d'applications sécurisées et performantes, je suis à la recherche de nouveaux défis en CDI. En dehors du code, je fais de la veille technologique, des projets perso et je joue au football.",
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
  "projects.title": "Travaux ",
  "projects.titleHighlight": "sélectionnés",
  "projects.proj1.title": "Messagerie sécurisée E2EE",
  "projects.proj1.desc":
    "Application de messagerie chiffrée de bout en bout (E2EE). Projet fil rouge réalisé dans le cadre du titre RNCP Expert en Développement Logiciel.",
  "projects.proj2.title": "Migration Java — Airbus",
  "projects.proj2.desc":
    "Migration d'une application critique de Java 6 vers Java 21 chez Airbus Operations, incluant l'optimisation des performances et un outil de changeLog.",
  "projects.proj3.title": "Explore Game",
  "projects.proj3.desc":
    "Jeu d'exploration combinant une partie web développée en Python et une application mobile Android en Java. Projet tutoré de 2ème année de DUT.",
  "projects.proj4.title": "Jeu 2D en Java",
  "projects.proj4.desc":
    "Conception et développement d'un jeu vidéo en 2D en Java. Projet tutoré de 1ère année de DUT Informatique.",

  // Contact
  "contact.label": "03 — Contact",
  "contact.title": "Restons en ",
  "contact.titleHighlight": "contact",
  "contact.subtitle":
    "Je suis ouvert aux opportunités en CDI et aux projets ambitieux. N'hésitez pas à me contacter pour discuter.",
  "contact.placeholderName": "Nom",
  "contact.placeholderEmail": "Email",
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
