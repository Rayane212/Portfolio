const fr = {
  // Navigation
  "nav.home": "Accueil",
  "nav.about": "À propos",
  "nav.projects": "Projets",
  "nav.contact": "Contact",

  // Hero
  "hero.badge": "Disponible pour travailler · France & Suisse",
  "hero.greeting": "Bonjour, je suis",
  "hero.subtitle": "Développeur Full Stack.",
  "hero.bio":
    "Développeur Full Stack avec une appétence DevOps. Deux ans chez Airbus à moderniser une application Java, et des projets personnels que je mène jusqu'en production : conteneurisés, testés et déployés en CI/CD. Je m'intéresse aussi à l'intégration de LLM dans des applications concrètes.",
  "hero.cta": "Voir les projets",
  "hero.cv": "Télécharger mon CV",
  "hero.scroll": "Scroll",
  "hero.card.backendDesc":
    "Java/Spring Boot, NestJS, TypeScript : des APIs robustes et testées.",
  "hero.card.frontendDesc":
    "Next.js, React, Angular, Tailwind : des interfaces modernes et réactives.",
  "hero.card.devopsDesc":
    "Docker, Kubernetes, GitHub Actions, Prometheus/Grafana : du conteneur à la prod monitorée.",

  // About
  "about.label": "01 — À propos",
  "about.title": "Un peu plus sur ",
  "about.titleHighlight": "moi",
  "about.bio1":
    "Développeur Full Stack, j'ai construit mes bases dans des environnements exigeants : deux ans chez Airbus à moderniser une application Java historique, et un an chez DailyBiz sur un CRM en C#/.NET au sein d'une équipe Scrum.",
  "about.bio2":
    "J'aime mener un projet jusqu'en production. Voyago, mon agent IA de planification de voyage, est en ligne avec abonnement, tests et CI/CD. ChainChat, ma messagerie chiffrée de bout en bout, m'a fait déployer une architecture microservices sur Kubernetes, avec monitoring.",
  "about.bio3":
    "Je m'intéresse particulièrement à l'intégration de LLM dans des applications concrètes, un sujet que j'ai mis en pratique avec Voyago.",
  "about.bio4":
    "Côté humain, je mise sur l'esprit d'équipe et la persévérance, des valeurs que je cultive aussi en boxe.",
  "about.skillsLabel": "Technologies",
  "about.skills.llm": "Intégration LLM (Vercel AI SDK, API Anthropic/Gemini)",
  "about.experienceLabel": "Expérience",
  "about.exp1.role": "Développeur Java (alternance)",
  "about.exp1.bullet1":
    "Migration d'une application historique de Java 6 vers Java 21 : build Ant → Maven, dépendances sur Artifactory, refonte de la gestion des erreurs et logs paramétrables",
  "about.exp1.bullet2":
    "Optimisation de l'import SFTP des données avions : de 5 minutes à quelques secondes (~99 % plus rapide)",
  "about.exp1.bullet3":
    "Développement d'un outil de changelog en Spring Boot + Angular, connecté à l'API VersionOne",
  "about.exp1.bullet4":
    "Recueil du besoin auprès des utilisateurs et rédaction de spécifications fonctionnelles et techniques en anglais",
  "about.exp2.role": "Développeur Web C#/VB.NET (alternance)",
  "about.exp2.desc":
    "Développement de nouvelles fonctionnalités sur un CRM pour PME (WebForms, architecture MVVM, SQL), correction de bugs, au sein d'une organisation Scrum de 5 équipes.",
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
  "projects.voyago.title": "Voyago",
  "projects.voyago.desc":
    "Agent IA qui génère un itinéraire de voyage complet à partir d'une seule phrase. En production, avec abonnement Pro, exports PDF/ICS, carte interactive et guides destination.",
  "projects.proj1.title": "ChainChat",
  "projects.proj1.desc":
    "Messagerie chiffrée de bout en bout en architecture microservices, déployée sur Kubernetes avec monitoring. Projet de fin d'études.",
  "projects.localChatbot.title": "Chatbot IA local (en cours)",
  "projects.localChatbot.desc":
    "Application Java pour créer et configurer un chatbot IA qui tourne en local, pensée pour les PME qui veulent utiliser l'IA sans faire sortir leurs données.",

  // Projects Modal
  "projects.modal.close": "Fermer",
  "projects.modal.viewArchitecture": "Voir le schéma d'architecture",
  "projects.modal.viewDemo": "Voir la démo",
  "projects.modal.viewSite": "Voir le site",
  "projects.modal.context": "Contexte",
  "projects.modal.whatItDoes": "Ce que fait le projet",
  "projects.modal.challenges": "Défis techniques",

  // ChainChat Modal Content
  "projects.proj1.modal.context": "Projet de fin d'études pour explorer la sécurité applicative et les architectures temps réel. L'objectif : construire une plateforme de messagerie où aucun tiers — pas même le serveur — ne peut lire les messages.",
  "projects.proj1.modal.whatItDoes": "Les messageries grand public (WhatsApp, Messenger) centralisent les données côté serveur. ChainChat inverse ce modèle : le chiffrement se fait côté client, et seuls les destinataires possèdent les clés de déchiffrement.",
  "projects.proj1.modal.challenge1": "Chiffrement E2E : implémenter un protocole cryptographique robuste sans dépendre de solutions tierces.",
  "projects.proj1.modal.challenge2": "Temps réel à l'échelle : synchroniser les messages entre clients via WebSockets tout en maintenant l'intégrité du chiffrement.",
  "projects.proj1.modal.challenge3": "Architecture microservices : découpler auth, messagerie et API gateway pour isoler les responsabilités et faciliter la scalabilité.",
  "projects.proj1.modal.challenge4": "Gestion des clés : distribuer les clés publiques sans exposer les clés privées, même en cas de compromission du serveur.",

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
