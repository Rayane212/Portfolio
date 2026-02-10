# Design System — Glass Gradient

## Vibe
Dark glassmorphism with animated gradient blobs, frosted glass cards, cool blue/purple/indigo palette. Modern and tech-forward. Inspired by Apple Vision Pro and modern SaaS landing pages.

## Reference Code

```tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, Twitter, Linkedin, ArrowUpRight, Cpu, Code2, Globe } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Atmosphere = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, -60, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] -right-[5%] w-[45%] h-[45%] rounded-full bg-blue-600/20 blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, 80, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[110px]"
      />
    </div>
  );
};

const GlassCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX / rect.width - 0.5);
    y.set(e.clientY / rect.height - 0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn(
        "relative group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-colors hover:bg-white/10",
        className
      )}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
};

function GlassGradientHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <section className="min-h-[90vh] w-full bg-[#030303]" />;

  return (
    <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center px-6 py-20 bg-[#030303] text-white selection:bg-indigo-500/30 overflow-hidden font-sans">
      <Atmosphere />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <span className="px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-mono text-indigo-400/80 border border-indigo-500/20 bg-indigo-500/5 rounded-full backdrop-blur-sm">
          Vibe 3 — Glass Gradient
        </span>
      </motion.div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col space-y-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              <span className="text-white/60 block text-lg font-medium tracking-wide mb-2">Hello, I'm</span>
              Your Name
              <span className="block mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent italic font-light">
                Crafting digital clarity.
              </span>
            </h1>
          </motion.div>

          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-sm md:text-base text-zinc-400 max-w-md leading-relaxed">
            Specialized in building high-performance interfaces with a focus on motion, aesthetics, and technical precision.
          </motion.p>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-wrap gap-4">
            <button className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              View Projects
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <div className="flex items-center gap-2">
              <a href="#" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white/70 hover:text-white"><Github size={16} /></a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white/70 hover:text-white"><Twitter size={16} /></a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white/70 hover:text-white"><Linkedin size={16} /></a>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }} className="relative" style={{ perspective: 1000 }}>
          <GlassCard className="w-full aspect-[4/3] flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
              </div>
              <div className="px-2 py-0.5 rounded-md border border-white/10 bg-white/5 text-[10px] text-white/40 font-mono">portfolio_v3.ts</div>
            </div>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400"><Code2 size={20} /></div>
                <div>
                  <h3 className="text-sm font-medium text-white/90">Engineered Precision</h3>
                  <p className="text-xs text-white/40 mt-1">Clean code architecture with optimized rendering patterns.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400"><Cpu size={20} /></div>
                <div>
                  <h3 className="text-sm font-medium text-white/90">Interactive Motion</h3>
                  <p className="text-xs text-white/40 mt-1">Physics-based animations that respond to human touch.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400"><Globe size={20} /></div>
                <div>
                  <h3 className="text-sm font-medium text-white/90">Global Reach</h3>
                  <p className="text-xs text-white/40 mt-1">Deploying scalable applications to the edge.</p>
                </div>
              </div>
            </div>
            <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full border border-[#030303] bg-gradient-to-tr from-zinc-700 to-zinc-400" />
                ))}
                <div className="w-6 h-6 rounded-full border border-[#030303] bg-white/5 backdrop-blur-sm flex items-center justify-center text-[8px] font-bold text-white/60">+12</div>
              </div>
              <span className="text-[10px] font-medium text-blue-400 uppercase tracking-widest">Active Project</span>
            </div>
          </GlassCard>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-zinc-500"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-light">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-zinc-500/50 to-transparent" />
      </motion.div>
    </section>
  );
}
```

## Design Tokens

### Colors
- **Background**: `bg-[#030303]` (near black)
- **Text primary**: `text-white`
- **Text secondary**: `text-zinc-400`
- **Text muted**: `text-white/40`, `text-white/60`
- **Accent gradient**: `from-blue-400 via-indigo-400 to-purple-400`
- **Accent solid**: `text-blue-400`, `text-indigo-400`, `text-purple-400`
- **Glass border**: `border-white/10`
- **Glass bg**: `bg-white/5`, `bg-white/10`
- **Selection**: `selection:bg-indigo-500/30`

### Atmosphere Blobs
- Indigo: `bg-indigo-600/20 blur-[120px]`
- Blue: `bg-blue-600/20 blur-[100px]`
- Purple: `bg-purple-600/10 blur-[110px]`

### Glass Card Pattern
- Border: `border border-white/10`
- Background: `bg-white/5 backdrop-blur-xl`
- Hover: `hover:bg-white/10`
- Glow on hover: gradient from `blue-500/20` to `purple-500/20`
- Rounded: `rounded-2xl`
- Interactive tilt with framer-motion springs

### Buttons
- Primary: `bg-white text-black rounded-full text-xs font-semibold` with `shadow-[0_0_20px_rgba(255,255,255,0.1)]`
- Icon: `bg-white/5 border border-white/10 rounded-full` hover `bg-white/10`

### Typography
- Headings: `font-semibold tracking-tight`
- Body: `text-sm md:text-base text-zinc-400 leading-relaxed`
- Labels/mono: `text-[10px] tracking-[0.2em] uppercase font-mono`
- Gradient text: `bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent`

### Spacing (Refined Scale)
- Section padding: `px-6 py-20`
- Content gap: `gap-16` (grid), `space-y-8` (stack)
- Small gaps: `gap-4`, `gap-2`

### Animation
- Staggered reveals with framer-motion
- Easing: `[0.23, 1, 0.32, 1]` (smooth out)
- Durations: 0.8s for content, 1s for cards
- Floating elements: `duration: 4, repeat: Infinity, ease: "easeInOut"`
- Atmosphere blobs: slow infinite animations (18-25s)

### Dependencies
- `framer-motion`
- `lucide-react`
- `clsx` + `tailwind-merge`
