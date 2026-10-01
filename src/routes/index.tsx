import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  Code2,
  ExternalLink,
  FileText,
  Quote,
  Terminal,
} from "lucide-react";

const portrait =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCEj3e3EQDneCMvTtn_1nQfFRx7tQNmSL0IFJ495dOZzppUz8Am2DovM3lJ45JgLFfeBUSRN4x30Tk-7EHiDiZrYwYb8tMqxyajnqOyBL8mDcqn7KZdzx8pdtbve3oTgMqSAZYqcXk4w09Xd_OZnP16FpGOL15FQVwH3_qQQ8H70vs-pa4S7YLAggkyWAN6vT-Z7cXxs9A7YZvhaaEx5TVPeSyFZJegAyBW_HAVnEDGLCrlthy-YBs2h9rC7DfruIKJSQ";

const stats = [
  ["Architecture Paradigm", "Zero-Cost Abstractions", "Predictable cache lines & register allocation"],
  ["Inference Throughput", "< 14ms p99", "Optimized custom kernels & quantized tensors"],
  ["Open Source Modules", "4 Flagship Core Libs", "C_libery, simulations-, StudyFlow"],
  ["Operational Mindset", "Algorithmic Rigor", "Every allocation accounted for"],
];

const timeline = [
  {
    year: "2024",
    era: "Current Era",
    domain: "Autonomous Agents & Edge Inference",
    title: "StudyFlow Platform Launch & Low-Latency LLM Serving",
    body: "Architected autonomous agent orchestration pipelines with sub-token streaming latency. Built multi-tenant inference schedulers handling speculative decoding and context caching for the StudyFlow cognitive platform.",
    tags: ["Distributed vLLM", "Rust Core Services", "LangGraph & Tool Chains", "WebRTC Streaming"],
  },
  {
    year: "2023",
    era: "Deep Learning",
    domain: "Neural Architectures from Scratch",
    title: "Autograd Engines & PyTorch Distributed Pipelines",
    body: "Constructed micrograd-style automatic differentiation engines to deeply understand backward computational graphs, loss surfaces, and gradient accumulation. Designed multi-GPU training routines utilizing PyTorch DDP and FSDP.",
    tags: ["PyTorch DDP", "Autograd Implementation", "CUDA Kernels", "Transformer Layers"],
  },
  {
    year: "2022",
    era: "Physics & Dynamics",
    domain: "simulations- Core Engine",
    title: "Newtonian Dynamics & 60 FPS Real-Time Simulation",
    body: "Developed a 2D/3D numerical physics engine simulating multi-body gravity, rigid collision resolution via impulse clipping, and spatial partitioning with quadtrees and BVH trees running at an unyielding 60 frames per second.",
    tags: ["Verlet & RK4 Solvers", "Spatial Hash Grids", "Broad-phase BVH", "C / WebAssembly"],
  },
  {
    year: "2020 – 2021",
    era: "Foundations",
    domain: "C_libery & Custom Allocators",
    title: "Standard Data Structures with Deterministic Memory Guarantees",
    body: "Penned an exhaustive C library from zero external dependencies: arena-based allocators, arena resets, thread-safe lockless rings, red-black trees, and SIMD string primitives. Formed the mental lattice for all future systems engineering.",
    tags: ["Pure C99", "Arena & Pool Allocators", "Zero-Malloc Loops", "Valgrind Clean"],
  },
];

const repositories = [
  {
    name: "C_libery",
    title: "Systems Data Structures",
    body: "Production-grade data primitives and memory arenas engineered in pure C with zero runtime dependencies.",
    language: "C",
    stars: "★ 840+",
    status: "MIT License",
    color: "bg-primary",
  },
  {
    name: "StudyFlow",
    title: "Autonomous Study Platform",
    body: "Intelligent spaced repetition agent equipped with adaptive neural context synthesis and high-speed retrieval.",
    language: "TypeScript / PyTorch",
    stars: "★ 1.2k+",
    status: "Active Release",
    color: "bg-tertiary",
  },
  {
    name: "simulations-",
    title: "Physics & Dynamics Core",
    body: "Lightweight deterministic physics simulation engine compiled to native binaries and WebAssembly targets.",
    language: "C99 / WASM",
    stars: "★ 620+",
    status: "Archival",
    color: "bg-secondary",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Curator Bio & Background — Zakary / Zaknx" },
      { name: "description", content: "Zakary's archival portfolio in systems architecture, bare-metal engineering, and generative AI." },
      { property: "og:title", content: "Curator Bio & Background — Zakary / Zaknx" },
      { property: "og:description", content: "A chronicle of engineering, curiosity, and uncompromising craft at the machine boundary." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: portrait },
      { name: "twitter:image", content: portrait },
    ],
  }),
  component: Portfolio,
});

function LabelLine({ chapter, subject }: { chapter: string; subject: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="label text-tertiary font-bold">{chapter}</span>
      <span className="h-0.5 w-8 bg-tertiary-container" />
      <span className="label text-outline">{subject}</span>
    </div>
  );
}

function Portfolio() {
  return (
    <div id="bio" className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
          <a href="#bio" className="font-headline text-lg font-bold">Zakary / Zaknx</a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
            <Link to="/work" className="nav-link">Selected Work</Link>
            <a className="nav-link" href="#engineering">Engineering</a>
            <a className="nav-link active" href="#bio">Curator Bio</a>
            <a className="nav-link" href="#inquiries">Inquiries</a>
          </nav>
          <div className="flex items-center gap-5">
            <span className="hidden items-center rounded-full bg-surface-high px-3 py-1.5 font-label text-xs font-semibold uppercase text-tertiary lg:inline-flex">
              <span className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Available for Q3 '24
            </span>
            <a href="#engineering" aria-label="Terminal view" title="Terminal view" className="icon-link"><Terminal size={19} /></a>
            <a href="#genesis" aria-label="Archival paper" title="Archival paper" className="icon-link"><FileText size={19} /></a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-12 md:px-12 md:pt-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="rounded-lg bg-surface p-4 shadow-soft">
              <div className="group relative aspect-square overflow-hidden rounded-md bg-surface-dim">
                <img src={portrait} alt="Zakary (Zaknx)" className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-[1.02]" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 rounded-md bg-surface/90 px-4 py-2.5 backdrop-blur-md">
                  <span className="flex items-center gap-2 font-label text-[11px] font-semibold uppercase tracking-widest"><span className="h-2 w-2 rounded-full bg-primary" />Zakary (Zaknx)</span>
                  <span className="font-label text-[10px] font-medium uppercase tracking-wider text-outline">SYS.ARCH // AI.ENG</span>
                </div>
              </div>
              <div className="mt-4 flex flex-col justify-between gap-1 px-2 font-label text-xs text-surface-variant sm:flex-row">
                <span>Origin: Bare-Metal Systems</span><span className="font-medium text-tertiary">Core Stack: C / PyTorch / Rust</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="label font-bold text-primary">Archival Dossier #084</span><span className="text-outline">/</span><span className="label text-outline">Curator Bio & Background</span>
            </div>
            <h1 className="font-headline text-4xl font-bold leading-[1.15] md:text-5xl lg:text-6xl">Intuition meets <em className="font-normal text-primary">bare-metal</em> performance.</h1>
            <p className="max-w-3xl text-lg font-light leading-relaxed text-surface-variant md:text-xl">A chronicle of engineering, curiosity, and uncompromising craft. Constructing deterministic foundations at machine boundary layers while orchestrating autonomous, high-throughput cognitive systems.</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#genesis" className="cta-primary">Read Manuscript <ArrowDown size={16} /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="cta-secondary"><Code2 size={16} /> Inspect Repository</a>
            </div>
          </div>
        </section>

        <section className="my-8 bg-surface-low py-10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4 md:px-12">
            {stats.map(([label, value, detail], index) => <div key={label}>
              <span className="label mb-1 block text-outline">{label}</span>
              <p className={`font-headline text-2xl font-bold ${index === 1 ? "text-primary" : index === 3 ? "text-tertiary" : ""}`}>{value}</p>
              <p className="mt-1 text-xs text-surface-variant">{detail}</p>
            </div>)}
          </div>
        </section>

        <section id="genesis" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16 md:px-12">
          <div className="space-y-16">
            <article className="space-y-6">
              <LabelLine chapter="Chapter I" subject="Transistors to Memory Bounds" />
              <h2 className="section-title">The Genesis: Thinking in Bits & Memory Pages</h2>
              <div className="prose-copy"><p>My journey began not at the application layer, but in the deliberate friction of low-level computational boundaries. Writing pure C without reliance on standard runtimes forced a direct confrontation with the physical realities of hardware: cache lines, branch prediction penalties, register pressure, and pointer arithmetic.</p><p>Constructing <code>C_libery</code> was an intentional exercise in self-reliance. Implementing hash maps, dynamically resizeable arenas, balanced binary search trees, and custom slab allocators from raw memory pools instilled an enduring intuition: abstraction is powerful, but abstraction without empathy for the silicon underneath is brittle.</p></div>
            </article>
            <article className="space-y-6">
              <LabelLine chapter="Chapter II" subject="The Synthesis of Scale" />
              <h2 className="section-title">Bridging Worlds: Bare-Metal Rigor Meets Generative Intelligence</h2>
              <div className="prose-copy"><p>The emergence of deep learning transformed software development from rigid procedural flow to probabilistic computation. Yet the fundamental constraint remains identical: memory bandwidth and compute efficiency.</p><p>Today, my work sits directly at this intersection. Whether designing distributed model inference backends, autonomous reasoning loops for autonomous agents, or high-concurrency event fabrics, the same principles apply. When you understand how a matrix multiplication unfolds across SIMD lanes or GPU thread blocks, generative AI ceases to be a mysterious black box and becomes what it truly is: an architectural triumph waiting to be tuned for real-time human interaction.</p></div>
            </article>
            <article className="space-y-6">
              <LabelLine chapter="Chapter III" subject="Artifacts in the Public Square" />
              <h2 className="section-title">Open Source & Algorithmic Transparency</h2>
              <div className="prose-copy"><p>I build in the open because clarity thrives under collective scrutiny. The act of publishing complete, documented source code is both a discipline of humility and a contribution to the global commons of computing knowledge. Every repository is an archival artifact—crafted with clean commit histories, deterministic build pipelines, and unpretentious interfaces.</p></div>
            </article>
          </div>
        </section>

        <section id="engineering" className="scroll-mt-20 bg-surface-low py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <div className="mb-14 max-w-2xl"><span className="label mb-2 block font-bold text-primary">Chronological Records</span><h2 className="section-title">Engineering Milestones & Systems</h2><p className="mt-3 text-surface-variant">An archival ledger tracking the progression from memory fundamentals to distributed cognitive intelligence.</p></div>
            <div className="space-y-8">{timeline.map((item, index) => <article key={item.year} className="rounded-lg bg-surface p-8 shadow-card md:p-10">
              <div className="mb-4 flex flex-col justify-between md:flex-row md:items-baseline"><div className="flex flex-wrap items-center gap-3"><span className={`font-headline text-3xl font-bold ${index === 0 ? "text-primary" : ""}`}>{item.year}</span><span className="rounded-sm bg-surface-container px-2.5 py-1 font-label text-xs font-semibold uppercase tracking-wider">{item.era}</span></div><span className="label mt-2 text-outline md:mt-0">{item.domain}</span></div>
              <h3 className="mb-3 font-headline text-2xl font-semibold">{item.title}</h3><p className="mb-6 leading-relaxed text-surface-variant">{item.body}</p><div className="flex flex-wrap gap-2">{item.tags.map(tag => <span key={tag} className="rounded-sm bg-surface-container px-3 py-1.5 font-label text-xs font-medium">{tag}</span>)}</div>
            </article>)}</div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20 text-center md:px-12">
          <div className="relative overflow-hidden rounded-lg border border-outline-subtle bg-surface p-10 md:p-16"><Quote className="absolute -left-4 -top-4 h-20 w-20 text-surface-highest opacity-50" /><blockquote className="relative mx-auto max-w-3xl font-headline text-2xl italic leading-snug md:text-3xl">“Software reaches elegance when there are no superfluous abstractions remaining to mask the mechanical truth of the machine.”</blockquote><div className="mt-6"><p className="label font-bold text-primary">Zakary / Zaknx</p><p className="mt-1 text-xs text-outline">Foundational Engineering Axiom</p></div></div>
        </section>

        <section id="work" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-24 md:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">{repositories.map(repo => <a key={repo.name} href="https://github.com" target="_blank" rel="noreferrer" className="group block rounded-lg bg-surface p-8 transition-transform duration-200 hover:-translate-y-1">
            <div className="mb-4 flex items-center justify-between"><span className="label font-semibold text-primary">{repo.name}</span><ExternalLink size={19} className="text-outline transition-colors group-hover:text-primary" /></div><h3 className="mb-2 font-headline text-xl font-bold">{repo.title}</h3><p className="mb-6 text-sm leading-relaxed text-surface-variant">{repo.body}</p><div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-label text-xs text-outline"><span className="flex items-center"><span className={`mr-1.5 h-2 w-2 rounded-full ${repo.color}`} />{repo.language}</span><span>{repo.stars}</span><span>{repo.status}</span></div>
          </a>)}</div>
        </section>
      </main>

      <footer id="inquiries" className="bg-surface-low">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-12 md:flex-row md:items-center md:px-12"><div className="space-y-2"><span className="block font-headline text-xl font-bold italic">Zakary / Zaknx</span><p className="max-w-md text-sm text-surface-variant">© 2024 Zakary (Zaknx). Archival Folio. Designed with editorial rigor and algorithmic care.</p></div><nav className="flex flex-wrap items-center gap-x-6 gap-y-3">{["C_libery", "MachineLearning", "studyFlow", "simulations-", "Terminal Protocol", "System Status"].map(item => <a key={item} className="nav-link" href="#work">{item}</a>)}</nav></div>
      </footer>
    </div>
  );
}