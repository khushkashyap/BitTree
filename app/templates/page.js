'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  Check,
  Circle,
  Code2,
  LayoutGrid,
  Moon,
  Palette,
  Search,
  Sparkles,
  Star,
  Wand2,
  X,
} from 'lucide-react';

const templates = [
  {
    id: 'minimal',
    name: 'Minimalist',
    desc: 'Clean, simple, no distractions',
    icon: Circle,
    accent: 'from-sky-400 to-blue-500',
    tags: ['Clean', 'Personal', 'Fast'],
  },
  {
    id: 'dark',
    name: 'Dark Developer',
    desc: 'Sleek dark theme with neon accents',
    icon: Moon,
    accent: 'from-zinc-400 to-zinc-100',
    tags: ['Dark', 'Neon', 'Tech'],
  },
  {
    id: 'gradient',
    name: 'Gradient Glow',
    desc: 'Eye-catching gradients and motion',
    icon: Sparkles,
    accent: 'from-fuchsia-400 to-violet-500',
    tags: ['Trendy', 'Vibrant', 'Animated'],
  },
  {
    id: 'code',
    name: 'Code Inspired',
    desc: 'Terminal UI with monospace elegance',
    icon: Code2,
    accent: 'from-emerald-400 to-cyan-400',
    tags: ['Monospace', 'Terminal', 'Creator'],
  },
  {
    id: 'portfolio',
    name: 'Portfolio Pro',
    desc: 'Built for showcasing work & credibility',
    icon: Star,
    accent: 'from-amber-400 to-orange-500',
    tags: ['Portfolio', 'Professional', 'Hiring'],
  },
  {
    id: 'cyber',
    name: 'Cyber Punk',
    desc: 'Bold, futuristic, high-contrast glow',
    icon: Wand2,
    accent: 'from-pink-400 to-purple-500',
    tags: ['Futuristic', 'Bold', 'Glow'],
  },
];

function Container({ children }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">{children}</div>
  );
}

function GlowBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500/25 via-sky-400/20 to-emerald-400/15 blur-3xl" />
      <div className="absolute -bottom-40 left-[8%] h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-sky-500/18 via-indigo-500/12 to-transparent blur-3xl" />
      <div className="absolute -bottom-40 right-[8%] h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-emerald-400/15 via-cyan-400/12 to-transparent blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,0.10),rgba(0,0,0,0))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.55))]" />
      <div className="absolute inset-0 opacity-[0.065] [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:18px_18px]" />
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 shadow-inner">
      {children}
    </span>
  );
}

function TemplateCard({ template, onPreview }) {
  const Icon = template.icon;

  return (
    <motion.div
      layout
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl"
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div
          className={`absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-gradient-to-tr ${template.accent} opacity-20 blur-3xl`}
        />
      </div>

      <div className="relative p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5">
              <Icon className="h-6 w-6 text-white/90" />
            </div>
            <div>
              <div className="text-lg font-semibold text-white">
                {template.name}
              </div>
              <div className="text-sm text-white/60">{template.desc}</div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {template.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-medium text-white/60 uppercase tracking-wider"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-3">
          <button
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-3 text-sm font-bold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
            onClick={onPreview}
          >
            Preview <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function PreviewModal({ activeTemplate, onClose }) {
  const router = useRouter();

  if (!activeTemplate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0d1117] p-8 shadow-3xl"
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 rounded-full bg-white/5 p-2 text-white/60 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center">
          <div
            className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-gradient-to-tr ${activeTemplate.accent} shadow-lg shadow-white/5`}
          >
            <activeTemplate.icon className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">
            @{activeTemplate.name}
          </h2>
          <p className="mt-2 text-white/60">{activeTemplate.desc}</p>
        </div>

        <div className="mt-8 space-y-3">
          {['My Portfolio', 'Latest Projects', 'Contact Me', 'Newsletter'].map(
            (link) => (
              <div
                key={link}
                className="w-full rounded-2xl border border-white/5 bg-white/5 py-4 text-center font-medium text-white shadow-sm"
              >
                {link}
              </div>
            ),
          )}
        </div>

        <button
          onClick={() => {
            router.push(`/generate?template=${activeTemplate.id}`);
          }}
          className="mt-8 w-full rounded-2xl bg-white py-4 text-sm font-bold text-black shadow-xl hover:opacity-90 transition-opacity"
        >
          Use This Template
        </button>
      </motion.div>
    </div>
  );
}

export default function TemplatesPage() {
  const [query, setQuery] = useState('');
  const [activePreview, setActivePreview] = useState(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return templates.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.toLowerCase().includes(q)),
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-[#05070a] font-sans text-white selection:bg-white/10">
      <header className="relative border-b border-white/5 py-24 sm:py-32">
        <GlowBackdrop />
        <Container>
          <div className="relative text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex mt-10 justify-center gap-3">
                <Pill>
                  <Sparkles className="h-3.5 w-3.5" /> Discover the Perfect
                  Template
                </Pill>
              </div>
              <h1 className="mt-8 text-5xl font-extrabold tracking-tight sm:text-7xl">
                Ready to{' '}
                <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Stand Out?
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 leading-relaxed">
                Explore our collection of high-performance templates. No login
                required to browse and find your perfect style.
              </p>
            </motion.div>

            <div className="mx-auto mt-12 max-w-lg relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30 group-focus-within:text-white/60 transition-colors" />
              <input
                type="text"
                placeholder="Search styles (dark, minimal...)"
                className="w-full rounded-[2rem] border border-white/10 bg-white/5 py-5 pl-14 pr-6 text-white placeholder:text-white/20 focus:border-white/20 focus:outline-none focus:ring-4 focus:ring-white/5 transition-all"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </Container>
      </header>

      <main className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  onPreview={() => setActivePreview(template)}
                />
              ))}
            </AnimatePresence>
          </div>
          {filtered.length === 0 && (
            <div className="mt-20 text-center text-white/40">
              No templates found matching your search.
            </div>
          )}
        </Container>
      </main>

      <footer className="border-t border-white/5 py-12 text-center text-sm text-white/30">
        <p>&copy; 2026 Bittree. Built for developers.</p>
      </footer>

      <AnimatePresence>
        {activePreview && (
          <PreviewModal
            activeTemplate={activePreview}
            onClose={() => setActivePreview(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
