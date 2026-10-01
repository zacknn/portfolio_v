import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  Code2,
  ExternalLink,
  FileText,
  Gauge,
  Network,
  PlayCircle,
  Share2,
  Sparkles,
  Terminal,
} from "lucide-react";

const benchmarks = [
  ["Alloc Latency", "4.2 ns", "vs 48ns libc malloc", "text-primary"],
  ["Cache Hit Rate", "98.4%", "L1/L2 cache line align", "text-tertiary"],
  ["Memory Leaks", "0 B", "Valgrind Clean Pass", "text-foreground"],
  ["Gate Emulation", "16-bit ALU", "Full Bitwise Logic Chain", "text-primary-container"],
];

const highlights = ["AVL Balanced Trees", "Bitwise Logic Gates", "Robin Hood Hashmaps", "Arena Pools"];

const neural = [
  {
    icon: Share2,
    tone: "text-primary",
    title: "Scaled Dot-Product Attention",
    body: "Authored pure vectorized PyTorch attention blocks with FlashAttention kernel bindings, rotary position embeddings (RoPE), and KV-caching optimizations for extended context throughput.",
    metric: "Inference Latency",
    value: "18.4 ms / token",
    valueTone: "text-primary",
  },
  {
    icon: Sparkles,
    tone: "text-tertiary",
    title: "Continuous Diffusion Schedulers",
    body: "Implemented DDIM and Euler-Ancestral trajectory solvers. Integrated classifier-free guidance vectors reducing artifact generation in high-frequency perceptual bands.",
    metric: "FID Perception Score",
    value: "7.14 Fréchet",
    valueTone: "text-tertiary",
  },
  {
    icon: Network,
    tone: "text-primary-container",
    title: "Multi-Agent Consensus",
    body: "Graph-governed cooperative agents executing complex code generation and validation loops with self-healing unit test feedback channels and rollback memory.",
    metric: "Agent Convergence",
    value: "94.2% Automated",
    valueTone: "text-foreground",
  },
];

const pipeline = [
  ["Ingest Engine", "Chunking & OCR", "Parallel PDF parsing with layout analysis & tabular extraction"],
  ["Vector Store", "pgvector HNSW", "Sub-100ms similarity scoring over 1.2M document embeddings"],
  ["Voice Synthesis", "Audio Streaming", "WebSocket audio frames via neural TTS with sub-350ms TTFT"],
];

const telemetry = [
  ["Vector Query Latency", "64 ms", "25%", "bg-primary", "text-primary"],
  ["Audio Synthesis TTFT", "310 ms", "40%", "bg-tertiary", "text-tertiary"],
  ["Summary ROUGE-L Score", "0.892", "89%", "bg-foreground", "text-foreground"],
];

const deployments = ["Next.js 14 SSR", "NestJS Microservices", "Prisma ORM", "Docker Swarm", "Redis Cache"];

const sims = [
  {
    index: "01 / N-Body Orbital",
    tone: "text-primary",
    title: "Gravitational Trajectory",
    body: "Runge-Kutta 4th Order (RK4) integration for three-body orbital stability and planetary Lagrange point mapping without accumulated roundoff divergence.",
    left: "Solver: RK4",
    right: "60 FPS Fixed",
    rightTone: "text-primary",
  },
  {
    index: "02 / Collision Dynamics",
    tone: "text-tertiary",
    title: "Spatial Hash Grid",
    body: "Replaces brute-force O(n²) particle intersection checks with dynamic spatial bucket hashing, allowing 10,000+ simultaneous non-penetrating elastic collisions.",
    left: "Complexity: O(n)",
    right: "10k Bodies",
    rightTone: "text-tertiary",
  },
  {
    index: "03 / Cellular Automata",
    tone: "text-primary-container",
    title: "Bitboard Life Grid",
    body: "Toroidal lattice state simulation leveraging bitwise 64-bit integer registers and AVX2 vector instructions for ultra-fast generation shifts.",
    left: "Vectorized: AVX2",
    right: "4.8M Cells/s",
    rightTone: "text-primary",
  },
  {
    index: "04 / Kinematics",
    tone: "text-secondary",
    title: "Verlet Ragdolls",
    body: "Distance constraint solvers and relaxation loops for cloth meshes, pendulum chains, and rigid polyhedral momentum transfer with friction coefficients.",
    left: "Relaxation: 8 iters",
    right: "Zero Jitter",
    rightTone: "text-foreground",
  },
];

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work & Architectural Folio — Zakary / Zaknx" },
      {
        name: "description",
        content:
          "Deep-dive case studies into low-level C systems, neural architectures, distributed AI backends, and computational physics engines.",
      },
      { property: "og:title", content: "Selected Work & Architectural Folio — Zakary / Zaknx" },
      {
        property: "og:description",
        content: "Four core subsystems indexed: memory arenas, transformers, pgvector pipelines, and Newtonian dynamics.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkFolio,
});

function SectionHead({
  index,
  title,
  stack,
  dot,
  cta,
  ctaIcon: CtaIcon,
  ctaClass,
  tagClass,
}: {
  index: string;
  title: string;
  stack: string;
  dot: string;
  cta: string;
  ctaIcon: typeof Code2;
  ctaClass: string;
  tagClass: string;
}) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-baseline">
      <div>
        <span className="label font-bold text-tertiary">{index}</span>
        <h2 className="mt-2 font-headline text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <span className={`inline-flex items-center rounded px-2.5 py-1 font-mono text-xs text-surface-variant ${tagClass}`}>
          <span className={`mr-2 h-2 w-2 rounded-full ${dot}`} />
          {stack}
        </span>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-label text-xs font-semibold uppercase tracking-wider transition-all ${ctaClass}`}
        >
          <CtaIcon size={15} />
          <span>{cta}</span>
        </a>
      </div>
    </div>
  );
}

function WorkFolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
          <Link to="/" className="font-headline text-lg font-bold">
            Zakary / Zaknx
          </Link>
          <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
            <Link to="/work" className="nav-link active">
              Selected Work
            </Link>
            <Link to="/engineering" className="nav-link">
              Engineering
            </Link>
            <Link to="/" hash="bio" className="nav-link">
              Curator Bio
            </Link>
            <Link to="/inquiries" className="nav-link">
              Inquiries
            </Link>
          </nav>
          <div className="flex items-center gap-5">
            <span className="hidden items-center rounded-full bg-surface-high px-3 py-1.5 font-label text-xs font-semibold uppercase text-tertiary lg:inline-flex">
              <span className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Folio Index Online
            </span>
            <a href="#project-c-lib" aria-label="Terminal view" title="Terminal view" className="icon-link">
              <Terminal size={19} />
            </a>
            <Link to="/" hash="genesis" aria-label="Archival paper" title="Archival paper" className="icon-link">
              <FileText size={19} />
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-12">
          <div className="mb-8 flex flex-wrap items-center gap-3 font-label text-xs uppercase tracking-widest text-secondary">
            <span className="font-semibold text-primary">Folio / Works Index</span>
            <span className="text-outline">•</span>
            <span>Systems Engineering</span>
            <span className="text-outline">•</span>
            <span>Machine Intelligence</span>
            <span className="text-outline">•</span>
            <span>Deterministic Physics</span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 pb-14 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="font-headline text-4xl leading-[1.12] tracking-tight sm:text-5xl md:text-6xl">
                Selected Work &amp;<br className="hidden sm:block" />
                <em className="font-normal">Architectural Folio.</em>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-surface-variant sm:text-xl">
                Deep-dive case studies into low-level systems, neural models, distributed backends, and computational
                physics engines.
              </p>
            </div>
            <div className="flex flex-col items-start justify-between self-stretch pt-6 lg:col-span-4 lg:items-end lg:pt-0">
              <div className="max-w-xs space-y-1.5 rounded-xl bg-surface-low p-4 font-mono text-xs text-surface-variant">
                <div className="flex justify-between font-label text-[10px] font-bold uppercase tracking-wider text-tertiary">
                  <span>Artifact Registry</span>
                  <span>Online / Sync</span>
                </div>
                <p>4 Core Subsystems Indexed</p>
                <p className="text-outline">Memory Arena • Transformers • pgvector • Newtonian</p>
              </div>
              <a
                href="#project-c-lib"
                className="mt-6 inline-flex items-center gap-2 font-label text-xs font-semibold uppercase tracking-wider text-primary underline-offset-4 hover:underline"
              >
                Explore Case Studies <ArrowDown size={14} />
              </a>
            </div>
          </div>

          <div className="my-2 h-3 w-full rounded-full bg-surface-high" />
        </section>

        <section id="project-c-lib" className="scroll-mt-24 bg-surface py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <SectionHead
              index="01 / Low-Level Core & Memory Primitives"
              title="C_libery_for_Data_Structures-Algorithmes"
              stack="ANSI C99 / Assembly"
              dot="bg-secondary"
              cta="Source Repo"
              ctaIcon={Code2}
              ctaClass="bg-surface-high text-primary hover:bg-primary hover:text-primary-foreground"
              tagClass="bg-surface-container"
            />
            <p className="mb-10 max-w-4xl text-base leading-relaxed text-surface-variant md:text-lg">
              A zero-overhead C implementation of foundational algorithmic primitives, deterministic hardware-style
              digital logic components, and a custom contiguous arena allocator designed to bypass kernel-level
              fragmentation under intense read-heavy operations.
            </p>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="flex flex-col justify-between overflow-hidden rounded-xl bg-inverse-surface p-6 text-inverse-foreground lg:col-span-7">
                <div>
                  <div className="mb-4 flex items-center justify-between border-b border-inverse-muted/20 pb-4 font-mono text-xs text-inverse-muted">
                    <span className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-error" />
                      <span className="h-2.5 w-2.5 rounded-full bg-tertiary-container" />
                      <span className="h-2.5 w-2.5 rounded-full bg-code-accent" />
                      <span className="ml-2">src/arena_allocator.c</span>
                    </span>
                    <span>O(1) Allocation Frame</span>
                  </div>
                  <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-code-accent">
                    <code>
                      <span className="text-code-comment">{"// Contiguous linear scratch arena with alignment boundary"}</span>
                      {"\n"}
                      <span className="text-code-keyword">typedef struct</span>
                      {" MemoryArena {\n    uint8_t *buffer;\n    size_t   capacity;\n    size_t   offset;\n} MemoryArena;\n\n"}
                      <span className="text-code-keyword">void</span>
                      {"* "}
                      <span className="font-semibold text-inverse-foreground">arena_alloc</span>
                      {"(MemoryArena *arena, "}
                      <span className="text-code-keyword">size_t</span>
                      {" size, "}
                      <span className="text-code-keyword">size_t</span>
                      {" align) {\n    uintptr_t curr = (uintptr_t)arena->buffer + arena->offset;\n    uintptr_t next = (curr + (align - 1)) & ~(align - 1);\n    size_t needed = (next - curr) + size;\n    "}
                      <span className="text-error">if</span>
                      {" (arena->offset + needed > arena->capacity) "}
                      <span className="text-error">return NULL</span>
                      {";\n    arena->offset += needed;\n    "}
                      <span className="text-code-keyword">return</span>
                      {" ("}
                      <span className="text-code-keyword">void</span>
                      {"*)next;\n}"}
                    </code>
                  </pre>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-inverse-muted/20 pt-4 font-label text-xs text-inverse-muted">
                  <span>Self-contained: Zero libc runtime heap dependency</span>
                  <span className="font-mono text-code-keyword">100% Deterministic</span>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6 lg:col-span-5">
                <div className="space-y-5 rounded-xl bg-surface-low p-6">
                  <h3 className="flex items-center justify-between font-headline text-lg font-semibold">
                    <span>Verified Benchmarks</span>
                    <Gauge size={20} className="text-primary" />
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {benchmarks.map(([label, value, detail, tone]) => (
                      <div key={label} className="rounded-lg bg-surface p-4">
                        <div className="font-label text-xs uppercase tracking-wider text-outline">{label}</div>
                        <div className={`mt-1 font-mono text-2xl font-bold ${tone}`}>{value}</div>
                        <div className="mt-1 text-[11px] text-surface-variant">{detail}</div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2">
                    <span className="label mb-2 block text-secondary">Key Architecture Highlights:</span>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {highlights.map((h) => (
                        <span key={h} className="rounded bg-surface-high px-2.5 py-1">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 rounded-xl bg-surface-container p-5">
                  <div>
                    <h4 className="font-label text-xs font-semibold uppercase tracking-wider">Algorithmic Complexity</h4>
                    <p className="mt-0.5 text-xs text-surface-variant">
                      Fixed bounds on search, insert, and batch eviction
                    </p>
                  </div>
                  <span className="rounded bg-surface px-3 py-1 font-mono text-sm font-bold text-primary">
                    O(1) ~ O(log n)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="project-ml" className="scroll-mt-24 bg-surface-low py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <SectionHead
              index="02 / Deep Learning & Generative Systems"
              title="MachineLearning — Neural Architectures & Generative AI"
              stack="PyTorch / TensorFlow / CUDA"
              dot="bg-primary-container"
              cta="Notebooks & Weights"
              ctaIcon={Terminal}
              ctaClass="bg-surface text-primary hover:bg-primary hover:text-primary-foreground"
              tagClass="bg-surface-high"
            />
            <p className="mb-10 max-w-4xl text-base leading-relaxed text-surface-variant md:text-lg">
              Rigorous transition from first-principles calculus derivations to full-scale distributed model
              deployments. Features custom multi-head self-attention mechanisms, latent diffusion sampling optimization,
              and cooperative multi-agent execution graphs.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {neural.map((card) => (
                <div key={card.title} className="flex flex-col justify-between gap-6 rounded-xl bg-surface p-7">
                  <div>
                    <div
                      className={`mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container ${card.tone}`}
                    >
                      <card.icon size={20} />
                    </div>
                    <h3 className="font-headline text-xl font-semibold">{card.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-surface-variant">{card.body}</p>
                  </div>
                  <div className="border-t border-surface-container pt-4">
                    <span className="mb-1 block font-mono text-xs text-outline">{card.metric}</span>
                    <span className={`font-mono text-lg font-semibold ${card.valueTone}`}>{card.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="project-studyflow" className="scroll-mt-24 bg-surface py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <SectionHead
              index="03 / Applied AI Systems & Distributed Architecture"
              title="studyFlow — Multimodal Cloud-Native Platform"
              stack="Next.js / NestJS / pgvector / Docker"
              dot="bg-primary"
              cta="Live Deployment"
              ctaIcon={ExternalLink}
              ctaClass="bg-primary text-primary-foreground hover:bg-primary-container"
              tagClass="bg-surface-container"
            />
            <p className="mb-10 max-w-4xl text-base leading-relaxed text-surface-variant md:text-lg">
              An AI-powered academic knowledge ecosystem enabling instant course material ingestion, hierarchical
              document distillation, bidirectional vector semantic search, and ultra-low-latency conversational speech
              synthesis for interactive voice tutoring.
            </p>
            <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
              <div className="flex flex-col justify-between rounded-xl bg-surface-low p-8 lg:col-span-8">
                <div>
                  <h3 className="mb-6 flex flex-wrap items-center justify-between gap-2 font-headline text-xl font-semibold">
                    <span>Distributed Pipeline Infrastructure</span>
                    <span className="font-mono text-xs text-outline">PostgreSQL 16 + HNSW Indexing</span>
                  </h3>
                  <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {pipeline.map(([label, title, detail]) => (
                      <div key={label} className="rounded-lg bg-surface p-4">
                        <span className="label text-secondary">{label}</span>
                        <p className="mt-1 text-sm font-semibold">{title}</p>
                        <p className="mt-1 text-xs text-outline">{detail}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2 rounded-lg border border-outline-subtle bg-surface p-5 font-mono text-xs text-surface-variant">
                    <div className="flex items-center gap-2 font-semibold text-primary">
                      <Terminal size={14} />
                      <span>Data Ingestion &amp; Synthesis Sequence</span>
                    </div>
                    <div className="overflow-x-auto py-1 text-[11px] leading-relaxed text-secondary">
                      Raw Document [PDF/TeX] ──&gt; Unstructured Worker [Docker] ──&gt; Recursive Splitter (512 tok) ──&gt;
                      Embedding Matrix ──&gt; pgvector (Cosine Cosim &gt; 0.82) ──&gt; Context Assembly ──&gt; Streaming
                      LLM Decoder ──&gt; PCM Audio Frame
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-surface-container pt-6">
                  {deployments.map((d) => (
                    <span key={d} className="rounded bg-surface-container px-3 py-1 text-xs">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-xl bg-surface-container p-8 lg:col-span-4">
                <div>
                  <span className="label mb-2 block text-secondary">Performance SLA</span>
                  <h4 className="font-headline text-2xl font-bold">Telemetry Metrics</h4>
                  <div className="mt-8 space-y-6">
                    {telemetry.map(([label, value, width, bar, tone]) => (
                      <div key={label}>
                        <div className="mb-1 flex justify-between font-mono text-xs">
                          <span>{label}</span>
                          <span className={`font-bold ${tone}`}>{value}</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-high">
                          <div className={`h-full rounded-full ${bar}`} style={{ width }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="pt-8 font-headline text-xs italic text-surface-variant">
                  "Engineered to transform static academic corpora into interactive, conversational intelligence at zero
                  compromise on verifiable citation traceability."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="project-simulations" className="scroll-mt-24 bg-surface-low py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <SectionHead
              index="04 / Computational Physics & Dynamics"
              title="simulations- — Computational Dynamics & Physics Engine"
              stack="C++ / SFML / Python / Pygame"
              dot="bg-error"
              cta="Interactive Sims"
              ctaIcon={PlayCircle}
              ctaClass="bg-surface text-primary hover:bg-primary hover:text-primary-foreground"
              tagClass="bg-surface-high"
            />
            <p className="mb-10 max-w-4xl text-base leading-relaxed text-surface-variant md:text-lg">
              A suite of deterministic computational physics simulations built from bare vector algebra. Implements
              Verlet velocity numerical integration, spatial grid hashing for multi-particle collisions, continuous
              gravitational field tensors, and cellular automata.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {sims.map((sim) => (
                <div key={sim.title} className="flex flex-col justify-between rounded-xl bg-surface p-6">
                  <div>
                    <span className={`font-mono text-xs font-bold ${sim.tone}`}>{sim.index}</span>
                    <h3 className="mt-2 font-headline text-lg font-semibold">{sim.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-surface-variant">{sim.body}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-surface-container pt-4 font-mono text-xs text-outline">
                    <span>{sim.left}</span>
                    <span className={`font-bold ${sim.rightTone}`}>{sim.right}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface py-20">
          <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
            <span className="label font-bold text-tertiary">Editorial Philosophy</span>
            <blockquote className="font-headline text-2xl italic leading-relaxed md:text-3xl">
              “True computing elegance resides at the precise intersection of mathematical determinism and sympathetic
              software design—from register-level memory ownership up to generative cognition.”
            </blockquote>
            <div className="pt-4">
              <div className="font-label text-xs font-semibold uppercase tracking-widest">Zakary (Zaknx)</div>
              <p className="mt-1 text-xs text-outline">AI &amp; Systems Engineer • Archival Record 2024</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface-low">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-12 md:flex-row md:items-center md:px-12">
          <div className="space-y-2">
            <span className="block font-headline text-xl font-bold italic">Zakary / Zaknx</span>
            <p className="max-w-md text-sm text-surface-variant">
              © 2024 Zakary (Zaknx). Archival Folio. Designed with editorial rigor and algorithmic care.
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a className="nav-link" href="#project-c-lib">C_libery</a>
            <a className="nav-link" href="#project-ml">MachineLearning</a>
            <a className="nav-link" href="#project-studyflow">studyFlow</a>
            <a className="nav-link" href="#project-simulations">simulations-</a>
            <a className="nav-link" href="#project-c-lib">Terminal Protocol</a>
            <a className="nav-link" href="#project-studyflow">System Status</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
