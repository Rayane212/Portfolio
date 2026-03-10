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
    "Ingénieur Logiciel passionné par l'innovation et l'architecture web. Fort de deux ans d'expérience chez Airbus, je conçois des solutions de bout en bout, en alliant sécurité, performance et code de qualité (Java, .NET, NestJS/ReactJS).",
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
    "Ingénieur Logiciel passionné, j'ai forgé mon expertise technique à travers des environnements exigeants. Mes deux années d'alternance chez Airbus m'ont permis d'acquérir une solide maîtrise en Java, .NET et de l'écosystème JS.",
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

  // Formations
  "about.formationLabel": "Formation",
  "about.form1.role": "Expert en Développement Logiciel (RNCP Nv 7)",
  "about.form1.desc": "Mastère spécialisé en architecture logicielle complexe, sécurité des systèmes d'information et technologies Full Stack avancées.",
  "about.form2.role": "Concepteur et Développeur d'application (RNCP Nv 6)",
  "about.form2.desc": "Conception d'applications, modélisation de bases de données et architectures C#/.NET.",
  "about.form3.role": "DUT Informatique",
  "about.form3.desc": "Fondamentaux de l'ingénierie logicielle, algorithmique, développement Java et architectures web.",

  // Projects
  "projects.label": "02 — Projets",
  "projects.title": "Mes ",
  "projects.titleHighlight": "Projets",
  "projects.proj1.title": "ChainChat",
  "projects.proj1.desc":
    "Messagerie chiffrée de bout en bout garantissant la confidentialité totale.",
  "projects.proj3.title": "HyperAgent",
  "projects.proj3.desc":
    "Agent IA de trading autonome sur Hyperliquid, combinant analyse de marché en temps réel et exécution automatisée pilotée par Claude (Anthropic).",

  // Projects Modal
  "projects.modal.close": "Fermer",
  "projects.modal.viewArchitecture": "Voir le schéma d'architecture",
  "projects.modal.viewDemo": "Voir la démo",
  "projects.modal.context": "Contexte",
  "projects.modal.whatItDoes": "Ce que fait le projet",
  "projects.modal.challenges": "Défis techniques",

  // ChainChat Modal Content
  "projects.proj1.modal.context": "Projet personnel pour explorer la sécurité applicative et les architectures temps réel. L'objectif : construire une plateforme de messagerie où aucun tiers — pas même le serveur — ne peut lire les messages.",
  "projects.proj1.modal.whatItDoes": "Les messageries grand public (WhatsApp, Messenger) centralisent les données côté serveur. ChainChat inverse ce modèle : le chiffrement se fait côté client, et seuls les destinataires possèdent les clés de déchiffrement.",
  "projects.proj1.modal.challenge1": "Chiffrement E2E : implémenter un protocole cryptographique robuste sans dépendre de solutions tierces.",
  "projects.proj1.modal.challenge2": "Temps réel à l'échelle : synchroniser les messages entre clients via WebSockets tout en maintenant l'intégrité du chiffrement.",
  "projects.proj1.modal.challenge3": "Architecture microservices : découpler auth, messagerie et API gateway pour isoler les responsabilités et faciliter la scalabilité.",
  "projects.proj1.modal.challenge4": "Gestion des clés : distribuer les clés publiques sans exposer les clés privées, même en cas de compromission du serveur.",

  // HyperAgent Modal Content
  "projects.proj3.modal.context": "Les traders actifs sur Hyperliquid manquent d'outils combinant analyse intelligente et exécution automatique. Les bots existants sont génériques, ignorent les spécificités de la plateforme (funding rates, open interest, liquidations) et n'expliquent jamais leurs décisions.",
  "projects.proj3.modal.whatItDoes": "Un co-pilote SaaS non-custodial : l'IA analyse les données de marché en continu, génère des signaux explicables en langage naturel, et exécute les ordres automatiquement dans les limites de risque définies par l'utilisateur. Trois modes de contrôle : signal-only, semi-auto, ou fully autonomous.",
  "projects.proj3.modal.challenge1": "Fiabilité de l'IA en finance : Chaque output de Claude passe par un pipeline de validation strict (Zod + contrôles de cohérence métier) avant exécution. Un signal ambigu est systématiquement rejeté.",
  "projects.proj3.modal.challenge2": "Synchronisation d'état : Un mécanisme de réconciliation toutes les 30s corrige les divergences entre l'état interne et les positions réelles sur Hyperliquid (gestion des timeouts et fills partiels).",
  "projects.proj3.modal.challenge3": "Transparence totale : Le raisonnement de Claude est persisté en base de données et affiché dans le dashboard. L'agent ne trade jamais en boîte noire.",

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
