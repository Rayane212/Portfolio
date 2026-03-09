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
  Download,
  Check,
  Copy,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTranslation } from "@/i18n/context";
import { useLocale } from "@/i18n/context";
import type { TranslationKeys } from "@/i18n";


const GithubIcon = ({ size = 16 }: { size?: number | string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number | string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

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
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-linear-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
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
const NAV_HREFS = ["#hero", "#about", "#projects", "#contact"] as const;
const NAV_KEYS: TranslationKeys[] = ["nav.home", "nav.about", "nav.projects", "nav.contact"];

function Navbar() {
  const { t } = useTranslation();
  const { locale, toggleLocale } = useLocale();
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

    NAV_HREFS.forEach((href) => {
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
        "fixed left-0 right-0 top-0 z-50 flex items-center justify-center px-6 py-4 transition-all duration-300 border-b",
        scrolled ? "bg-background/80 backdrop-blur-md border-white/5" : "border-transparent"
      )}
    >
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1 py-1 backdrop-blur-xl">
        {NAV_HREFS.map((href, i) => {
          const id = href.replace("#", "");
          const isActive = active === id;
          return (
            <a
              key={id}
              href={href}
              className={cn(
                "relative rounded-full px-3 py-2 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-medium transition-colors whitespace-nowrap",
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
              <span className="relative z-10">{t(NAV_KEYS[i])}</span>
            </a>
          );
        })}

        {/* Locale toggle */}
        <div className="mx-1 h-4 border-l border-white/10" />
        <button
          onClick={toggleLocale}
          className="relative flex items-center gap-0.5 rounded-full px-1 py-0.5 text-[10px] font-semibold"
        >
          <span
            className={cn(
              "relative z-10 rounded-full px-1.5 py-0.5 transition-colors",
              locale === "fr" ? "text-white" : "text-zinc-500"
            )}
          >
            {locale === "fr" && (
              <motion.span
                layoutId="locale-pill"
                className="absolute inset-0 rounded-full bg-white/10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative">FR</span>
          </span>
          <span
            className={cn(
              "relative z-10 rounded-full px-1.5 py-0.5 transition-colors",
              locale === "en" ? "text-white" : "text-zinc-500"
            )}
          >
            {locale === "en" && (
              <motion.span
                layoutId="locale-pill"
                className="absolute inset-0 rounded-full bg-white/10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative">EN</span>
          </span>
        </button>
      </div>
    </motion.nav>
  );
}

// ---------------------------------------------------------------------------
// Hero Section
// ---------------------------------------------------------------------------
function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-start lg:justify-center overflow-hidden px-6 pt-32 pb-20 lg:pt-20 selection:bg-indigo-500/30"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col space-y-6 lg:space-y-8"
        >
          <motion.div variants={sectionAnim}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-indigo-400/80">
                {t("hero.badge")}
              </span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight leading-[1.1] md:text-5xl">
              <span className="mb-2 block text-lg font-medium tracking-wide text-white/60">
                {t("hero.greeting")}
              </span>
              Rayane Hadi
              <span className="mt-2 block bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text font-light italic text-transparent">
                {t("hero.subtitle")}
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={sectionAnim}
            className="max-w-md text-sm leading-relaxed text-zinc-400 md:text-base"
          >
            {t("hero.bio")}
          </motion.p>

          <motion.div variants={sectionAnim} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 mt-4">
            <a
              href="#projects"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:bg-zinc-200"
            >
              {t("hero.cta")}
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="/CV_Dev_FullStack.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-white/10"
            >
              {t("hero.cv")}
              <Download
                size={14}
                className="transition-transform group-hover:-translate-y-0.5"
              />
            </a>
            <div className="flex items-center justify-center sm:justify-start gap-2 pt-2 sm:pt-0">
              {[
                { icon: GithubIcon, href: "https://github.com/Rayane212" },
                { icon: LinkedinIcon, href: "https://www.linkedin.com/in/rayane-h-b6348725a/" },
                { icon: Mail, href: "#contact" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
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
          className="relative mt-4 lg:mt-0"
          style={{ perspective: 1000 }}
        >
          <GlassCard className="flex w-full flex-col justify-between overflow-hidden sm:aspect-4/3 min-h-[300px]">
            <div className="flex items-center justify-between pl-2">
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
                  <p className="mt-1 text-xs text-white/40">{t("hero.card.backendDesc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-xl border p-2.5 bg-indigo-500/10 border-indigo-500/20 text-indigo-400">
                  <Cpu size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white/90">Frontend</h3>
                  <p className="mt-1 text-xs text-white/40">{t("hero.card.frontendDesc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-xl border p-2.5 bg-purple-500/10 border-purple-500/20 text-purple-400">
                  <Globe size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white/90">DevOps</h3>
                  <p className="mt-1 text-xs text-white/40">{t("hero.card.devopsDesc")}</p>
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

      {/* Scroll indicator - hidden on mobile to prevent overlaps on short viewports */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden sm:flex absolute bottom-10 flex-col items-center gap-2 text-zinc-500"
      >
        <span className="text-[10px] font-light uppercase tracking-[0.2em]">
          {t("hero.scroll")}
        </span>
        <div className="h-12 w-px bg-linear-to-b from-zinc-500/50 to-transparent" />
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

const EXPERIENCE_META = [
  { roleKey: "about.exp1.role" as TranslationKeys, company: "Airbus Operations — Toulouse", period: "Oct. 2023 — Sept. 2025", descKey: "about.exp1.desc" as TranslationKeys },
  { roleKey: "about.exp2.role" as TranslationKeys, company: "DailyBiz — Saint-Ouen", period: "Août 2022 — Sept. 2023", descKey: "about.exp2.desc" as TranslationKeys },
  { roleKey: "about.exp3.role" as TranslationKeys, company: "Préfecture de Police — Paris", period: "Juin 2022 — Août 2022", descKey: "about.exp3.desc" as TranslationKeys },
];

function AboutSection() {
  const { t } = useTranslation();

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
            {t("about.label")}
          </span>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t("about.title")}
            <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t("about.titleHighlight")}
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Bio + Skills */}
          <motion.div variants={sectionAnim} className="space-y-8">
            <div className="space-y-4">
              <p className="max-w-lg text-sm leading-relaxed text-zinc-400 md:text-base">
                {t("about.bio1")}
              </p>
              <p className="max-w-lg text-sm leading-relaxed text-zinc-400 md:text-base">
                {t("about.bio2")}
              </p>
              <p className="max-w-lg text-sm leading-relaxed text-zinc-400 md:text-base">
                {t("about.bio3")}
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                {t("about.skillsLabel")}
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
              {t("about.experienceLabel")}
            </h3>
            {EXPERIENCE_META.map((exp) => (
              <div
                key={exp.roleKey}
                className="group rounded-xl border border-white/5 bg-white/2 p-5 transition-colors hover:border-white/10 hover:bg-white/5"
              >
                <div className="mb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                  <h4 className="text-sm font-medium text-white/90">
                    {t(exp.roleKey)}
                  </h4>
                  <span className="font-mono text-[10px] text-zinc-500 mt-1 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="mb-2 text-xs font-medium text-indigo-400/80">
                  {exp.company}
                </p>
                <p className="text-xs leading-relaxed text-zinc-500">
                  {t(exp.descKey)}
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
const PROJECTS_META = [
  { titleKey: "projects.proj1.title" as TranslationKeys, descKey: "projects.proj1.desc" as TranslationKeys, tags: ["NestJS", "ReactJS", "E2EE", "WebSocket"], link: "#" },
  { titleKey: "projects.proj2.title" as TranslationKeys, descKey: "projects.proj2.desc" as TranslationKeys, tags: [".NET Core", "Microservices", "SQL Server", "Docker"], link: "#" },
  { titleKey: "projects.proj3.title" as TranslationKeys, descKey: "projects.proj3.desc" as TranslationKeys, tags: ["NestJS", "Next.js", "AI", "Fintech"], link: "#" },
];

function ProjectsSection() {
  const { t } = useTranslation();

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
            {t("projects.label")}
          </span>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t("projects.title")}
            <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t("projects.titleHighlight")}
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS_META.map((project) => (
            <motion.div key={project.titleKey} variants={sectionAnim} className="h-full">
              <div className="block h-full">
                <GlassCard className="flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                        <Layers size={18} className="text-indigo-400" />
                      </div>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white/90">
                      {t(project.titleKey)}
                    </h3>
                    <p className="mb-6 text-xs leading-relaxed text-zinc-400">
                      {t(project.descKey)}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/5 bg-white/3 px-2.5 py-0.5 font-mono text-[10px] text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>
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
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "ratelimited">("idle");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rayanehadi41@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.status === 429) {
        setStatus("ratelimited");
        return;
      }
      if (!res.ok) throw new Error();
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
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
            {t("contact.label")}
          </span>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl">
            {t("contact.title")}
            <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t("contact.titleHighlight")}
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-md text-sm leading-relaxed text-zinc-400 md:text-base">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          variants={sectionAnim}
          onSubmit={handleSubmit}
          className="mx-auto mb-10 flex max-w-lg flex-col gap-4 text-left"
        >
          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              type="text"
              placeholder={t("contact.placeholderName")}
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 backdrop-blur-sm transition-colors focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/20"
            />
            <input
              type="email"
              placeholder={t("contact.placeholderEmail")}
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 backdrop-blur-sm transition-colors focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/20"
            />
          </div>
          <input
            type="text"
            placeholder={t("contact.placeholderSubject" as TranslationKeys)}
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 backdrop-blur-sm transition-colors focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/20"
          />
          <textarea
            placeholder={t("contact.placeholderMessage")}
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
                {t("contact.sending")}
              </>
            ) : (
              <>
                <Send size={16} />
                {t("contact.send")}
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
              {t("contact.success")}
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-sm text-red-400"
            >
              <AlertCircle size={16} />
              {t("contact.error")}
            </motion.p>
          )}
          {status === "ratelimited" && (
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-sm text-red-400"
            >
              <AlertCircle size={16} />
              {"Trop de requêtes, veuillez patienter."}
            </motion.p>
          )}
        </motion.form>

        <motion.div variants={sectionAnim} className="flex flex-col items-center gap-6">
          <button
            onClick={handleCopyEmail}
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            {copied ? <Check size={16} className="text-green-400" /> : <Mail size={16} />}
            rayanehadi41@gmail.com
            {copied ? (
              <span className="text-xs text-green-400">Copié !</span>
            ) : (
              <Copy
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            )}
          </button>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: GithubIcon, href: "https://github.com/Rayane212", label: "GitHub" },
              { icon: LinkedinIcon, href: "https://www.linkedin.com/in/rayane-h-b6348725a/", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
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
            &copy; {new Date().getFullYear()} Rayane Hadi. {t("footer.rights")}
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
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <div className="relative min-h-screen bg-background text-white">
      <Atmosphere />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
