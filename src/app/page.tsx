"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Code2,
  Cpu,
  Globe,
  Layers,
  Send,
  ExternalLink,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ---------------------------------------------------------------------------
// Shared Components
// ---------------------------------------------------------------------------
const Atmosphere = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <motion.div
      animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -left-[10%] -top-[10%] h-[50%] w-[50%] rounded-full bg-indigo-600/20 blur-[120px]"
    />
    <motion.div
      animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, -60, 0] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute -right-[5%] top-[20%] h-[45%] w-[45%] rounded-full bg-blue-600/20 blur-[100px]"
    />
    <motion.div
      animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, 80, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      className="absolute -bottom-[10%] left-[20%] h-[40%] w-[40%] rounded-full bg-purple-600/10 blur-[110px]"
    />
  </div>
);

function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mx = useSpring(x);
  const my = useSpring(y);
  const rotateX = useTransform(my, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mx, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn(
        "group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:bg-white/10",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
}

const EASE = [0.23, 1, 0.32, 1] as const;

const sectionAnim = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    NAV_ITEMS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 flex items-center justify-center px-6 py-4 transition-all duration-300",
        scrolled && "bg-[#030303]/80 backdrop-blur-md border-b border-white/5"
      )}
    >
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1 py-1 backdrop-blur-xl">
        {NAV_ITEMS.map(({ label, href }) => {
          const id = href.replace("#", "");
          const isActive = active === id;
          return (
            <a
              key={id}
              href={href}
              className={cn(
                "relative rounded-full px-4 py-1.5 text-xs font-medium transition-colors",
                isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}

// ---------------------------------------------------------------------------
// Hero Section
// ---------------------------------------------------------------------------
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-20 selection:bg-indigo-500/30"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col space-y-8"
        >
          <motion.div variants={sectionAnim}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-indigo-400/80">
                Available for work
              </span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight leading-[1.1] md:text-5xl">
              <span className="mb-2 block text-lg font-medium tracking-wide text-white/60">
                Hello, I&apos;m
              </span>
              Rayane Hadi
              <span className="mt-2 block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text font-light italic text-transparent">
                Développeur Full Stack.
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={sectionAnim}
            className="max-w-md text-sm leading-relaxed text-zinc-400 md:text-base"
          >
            Titulaire du titre RNCP Expert en Développement Logiciel (Ynov Toulouse),
            fort de deux ans d&apos;alternance chez Airbus. Passionné par la conception
            d&apos;applications sécurisées et performantes en Java, .NET et NestJS/ReactJS.
          </motion.p>

          <motion.div variants={sectionAnim} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:bg-zinc-200"
            >
              View Projects
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <div className="flex items-center gap-2">
              {[
                { icon: Github, href: "https://github.com" }, /* TODO: Ajouter l'URL GitHub */
                { icon: Linkedin, href: "https://linkedin.com" }, /* TODO: Ajouter l'URL LinkedIn */
                { icon: Mail, href: "mailto:rayanehadi41@gmail.com" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 p-2.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right — Featured Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="relative"
          style={{ perspective: 1000 }}
        >
          <GlassCard className="flex w-full flex-col justify-between overflow-hidden aspect-[4/3]">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-500/40" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/40" />
              </div>
              <div className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-white/40">
                portfolio.ts
              </div>
            </div>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl border p-2.5 bg-blue-500/10 border-blue-500/20 text-blue-400">
                  <Code2 size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white/90">Backend</h3>
                  <p className="mt-1 text-xs text-white/40">Java, NestJS, C# — applications robustes et performantes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-xl border p-2.5 bg-indigo-500/10 border-indigo-500/20 text-indigo-400">
                  <Cpu size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white/90">Frontend</h3>
                  <p className="mt-1 text-xs text-white/40">ReactJS, Angular, HTML/CSS — interfaces modernes et réactives.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-xl border p-2.5 bg-purple-500/10 border-purple-500/20 text-purple-400">
                  <Globe size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white/90">DevOps</h3>
                  <p className="mt-1 text-xs text-white/40">Docker, Kubernetes (Minikube), S3 — déploiement et conteneurisation.</p>
                </div>
              </div>
            </div>
          </GlassCard>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-indigo-500/20 blur-3xl"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-zinc-500"
      >
        <span className="text-[10px] font-light uppercase tracking-[0.2em]">
          Scroll
        </span>
        <div className="h-12 w-px bg-gradient-to-b from-zinc-500/50 to-transparent" />
      </motion.div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// About Section
// ---------------------------------------------------------------------------
const SKILLS = [
  "Java",
  "NestJS",
  "C#",
  "ReactJS",
  "Angular",
  "JavaScript",
  "HTML/CSS",
  "MySQL",
  "MariaDB",
  "SQL Server",
  "Docker",
  "Kubernetes",
];

const EXPERIENCE = [
  {
    role: "Développeur Java",
    company: "Airbus Operations — Toulouse",
    period: "Oct. 2023 — Sept. 2025",
    desc: "Migration Java 6 vers Java 21, optimisation des performances, développement d'un outil de changeLog, rédaction de spécifications fonctionnelles. Alternance.",
  },
  {
    role: "Développeur Web C#/VB.NET",
    company: "DailyBiz — Saint-Ouen",
    period: "Août 2022 — Sept. 2023",
    desc: "Développement de pages responsive, nouvelles fonctionnalités, requêtes SQL et correction de bugs. Alternance.",
  },
  {
    role: "Stagiaire Développement Web",
    company: "Préfecture de Police — Paris",
    period: "Juin 2022 — Août 2022",
    desc: "Développement d'une application web en PHP.",
  },
];

function AboutSection() {
  return (
    <section id="about" className="relative w-full px-6 py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="mx-auto max-w-6xl"
      >
        {/* Heading */}
        <motion.div variants={sectionAnim} className="mb-16">
          <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-indigo-400/80">
            01 — About
          </span>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            A bit about{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              me
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Bio + Skills */}
          <motion.div variants={sectionAnim} className="space-y-8">
            <p className="max-w-lg text-sm leading-relaxed text-zinc-400 md:text-base">
              Développeur Full Stack diplômé Expert en Développement Logiciel
              (RNCP, Ynov Toulouse). Deux ans d&apos;alternance chez Airbus m&apos;ont
              permis d&apos;acquérir une solide expérience en Java, .NET et
              NestJS/ReactJS.
            </p>
            <p className="max-w-lg text-sm leading-relaxed text-zinc-400 md:text-base">
              Passionné par la conception d&apos;applications sécurisées et
              performantes, je suis à la recherche de nouveaux défis en CDI.
              En dehors du code, je fais de la veille technologique, des projets
              perso et je joue au football.
            </p>

            {/* Skills */}
            <div>
              <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 transition-colors hover:bg-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div variants={sectionAnim} className="space-y-6">
            <h3 className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              Experience
            </h3>
            {EXPERIENCE.map((exp) => (
              <div
                key={exp.role}
                className="group rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-colors hover:border-white/10 hover:bg-white/5"
              >
                <div className="mb-1 flex items-center justify-between">
                  <h4 className="text-sm font-medium text-white/90">
                    {exp.role}
                  </h4>
                  <span className="font-mono text-[10px] text-zinc-500">
                    {exp.period}
                  </span>
                </div>
                <p className="mb-2 text-xs font-medium text-indigo-400/80">
                  {exp.company}
                </p>
                <p className="text-xs leading-relaxed text-zinc-500">
                  {exp.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Projects Section
// ---------------------------------------------------------------------------
const PROJECTS = [
  {
    title: "Messagerie sécurisée E2EE",
    desc: "Application de messagerie chiffrée de bout en bout (E2EE). Projet fil rouge réalisé dans le cadre du titre RNCP Expert en Développement Logiciel.",
    tags: ["NestJS", "ReactJS", "E2EE", "WebSocket"],
    link: "#", /* TODO: Ajouter le lien du projet */
  },
  {
    title: "Migration Java — Airbus",
    desc: "Migration d'une application critique de Java 6 vers Java 21 chez Airbus Operations, incluant l'optimisation des performances et un outil de changeLog.",
    tags: ["Java 21", "Airbus", "Performance"],
    link: "#", /* TODO: Ajouter le lien du projet si disponible */
  },
  {
    title: "Explore Game",
    desc: "Jeu d'exploration combinant une partie web développée en Python et une application mobile Android en Java. Projet tutoré de 2ème année de DUT.",
    tags: ["Python", "Java", "Android", "Web"],
    link: "#", /* TODO: Ajouter le lien du projet */
  },
  {
    title: "Jeu 2D en Java",
    desc: "Conception et développement d'un jeu vidéo en 2D en Java. Projet tutoré de 1ère année de DUT Informatique.",
    tags: ["Java", "2D", "Game Dev"],
    link: "#", /* TODO: Ajouter le lien du projet */
  },
];

function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full px-6 py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="mx-auto max-w-6xl"
      >
        <motion.div variants={sectionAnim} className="mb-16">
          <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-indigo-400/80">
            02 — Projects
          </span>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Selected{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              work
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <motion.div key={project.title} variants={sectionAnim}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <GlassCard className="flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                        <Layers size={18} className="text-indigo-400" />
                      </div>
                      <ExternalLink
                        size={14}
                        className="text-zinc-500 transition-colors group-hover:text-white"
                      />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white/90">
                      {project.title}
                    </h3>
                    <p className="mb-6 text-xs leading-relaxed text-zinc-400">
                      {project.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/5 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[10px] text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Contact Section
// ---------------------------------------------------------------------------
function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative w-full px-6 py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.div variants={sectionAnim}>
          <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-indigo-400/80">
            03 — Contact
          </span>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              connect
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-md text-sm leading-relaxed text-zinc-400 md:text-base">
            Je suis ouvert aux opportunités en CDI et aux projets ambitieux.
            N&apos;hésitez pas à me contacter pour discuter.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          variants={sectionAnim}
          onSubmit={handleSubmit}
          className="mx-auto mb-10 flex max-w-lg flex-col gap-4 text-left"
        >
          <input
            type="text"
            placeholder="Nom"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 backdrop-blur-sm transition-colors focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/20"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 backdrop-blur-sm transition-colors focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/20"
          />
          <textarea
            placeholder="Message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 backdrop-blur-sm transition-colors focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/20"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="group flex items-center justify-center gap-2 self-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:bg-zinc-200 disabled:opacity-50"
          >
            {status === "sending" ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Envoi...
              </>
            ) : (
              <>
                <Send size={16} />
                Envoyer
              </>
            )}
          </button>

          {status === "sent" && (
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-sm text-emerald-400"
            >
              <CheckCircle2 size={16} />
              Message envoyé avec succès !
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-sm text-red-400"
            >
              <AlertCircle size={16} />
              Erreur lors de l&apos;envoi. Réessayez ou contactez-moi directement.
            </motion.p>
          )}
        </motion.form>

        <motion.div variants={sectionAnim} className="flex flex-col items-center gap-6">
          <a
            href="mailto:rayanehadi41@gmail.com"
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Mail size={16} />
            rayanehadi41@gmail.com
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" }, /* TODO: Ajouter l'URL GitHub */
              {
                icon: Linkedin,
                href: "https://linkedin.com", /* TODO: Ajouter l'URL LinkedIn */
                label: "LinkedIn",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-2.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={sectionAnim}
          className="mt-24 border-t border-white/5 pt-8"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            &copy; {new Date().getFullYear()} Rayane Hadi. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#030303]" />;
  }

  return (
    <div className="relative min-h-screen bg-[#030303] text-white">
      <Atmosphere />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
