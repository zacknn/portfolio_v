import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Code2, Cpu, FileText, Network, Terminal, Wrench } from "lucide-react";

const competencies = [
  {
    icon: Cpu,
    title: "Systems & Low-Level",
    subtitle: "Pillars of Execution",
    tier: "Tier 0 // Core",
    intro: "Direct interaction with hardware, manual memory management, custom arenas, deterministic resource destruction, and concurrent thread pipelines.",
    skills: [
      ["C (ANSI C11) & C++ (C++17/20)", "RAII, Concurrency, SIMD, Template Metaprogramming", "Mastery", "96%"],
      ["SFML & Graphic Pipelines", "Real-time simulation, windowing, buffer synchronization", "Advanced", "82%"],
      ["Memory Allocators & POSIX Threads", "Slab/Stack allocators, mutex-free ring buffers, atomics", "Mastery", "94%"],
      ["Digital Logic & ISA Architecture", "ALU models, pipeline hazards, instruction decoding", "Proficient", "76%"],
    ],
  },
  {
    icon: Network,
    title: "AI & Neural Computing",
    subtitle: "Cognitive Synthesizers",
    tier: "Tier 0 // Core",
    intro: "Model fine-tuning, tensor optimization, multi-agent coordination architectures, and dense vector similarity systems.",
    skills: [
      ["PyTorch & TensorFlow", "Custom autograd layers, tensor parallelism, checkpointing", "Mastery", "95%"],
      ["Transformers & HuggingFace", "LoRA / QLoRA, tokenization pipelines, attention mechanisms", "Mastery", "93%"],
      ["Autonomous Agents & Tool-Use", "ReAct loops, deterministic schema emission, memory compaction", "Mastery", "92%"],
      ["Vector DBs (Chroma / pgvector)", "HNSW indexing, cosine metric calibration, hybrid RAG", "Advanced", "84%"],
    ],
  },
  {
    icon: Network,
    title: "Distributed Backend",
    subtitle: "Network Fabrics & Ingestion",
    tier: "Tier 1 // Production",
    intro: "Fault-tolerant event ingestion, microservice contracts, transactional ACID guarantees, and sub-millisecond in-memory caching.",
    skills: [
      ["TypeScript, NestJS & Node.js", "Strict typed IOC containers, event emitters, worker pools", "Mastery", "94%"],
      ["PostgreSQL & Prisma ORM", "Complex window queries, partition keys, write isolation", "Mastery", "91%"],
      ["Redis Caching & Pub/Sub", "Rate limiters, distributed locks, ephemeral states", "Advanced", "85%"],
      ["WebSockets & REST APIs", "Multiplexed bidirectional streams, OpenAPI definitions", "Mastery", "93%"],
    ],
  },
  {
    icon: Wrench,
    title: "Tooling & Practices",
    subtitle: "Reliability & Forensics",
    tier: "Tier 1 // Rigor",
    intro: "Diagnostic profiling, memory leak detection, deterministic containerized orchestration, and automated regression guarantees.",
    skills: [
      ["GDB, Valgrind & LLVM Sanitize", "AddressSanitizer, MemorySanitizer, core dump dissection", "Advanced", "87%"],
      ["Linux Shell, POSIX & Bash", "Kernel tuning, cgroups, perf profiling, pipeline scripting", "Mastery", "95%"],
      ["Docker & Containerization", "Multi-stage minimal scratch layers, volume isolation", "Advanced", "86%"],
      ["CI/CD GitHub Actions & Git", "Automated lint/test matrices, reproducible releases", "Mastery", "94%"],
    ],
  },
];

export const Route = createFileRoute("/engineering")({
  head: () => ({ meta: [
    { title: "Engineering Philosophy & Technical Arsenal — Zakary / Zaknx" },
    { name: "description", content: "Principles governing memory safety, algorithmic determinism, hardware sympathy, and scalable machine intelligence." },
    { property: "og:title", content: "Engineering Philosophy & Technical Arsenal — Zakary / Zaknx" },
    { property: "og:description", content: "From silicon to neural weights: foundational engineering treatises and a verified technical arsenal." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: EngineeringPage,
});

function EngineeringPage() {
  return <div className="min-h-screen bg-background text-foreground">
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        <Link to="/" className="font-headline text-lg font-bold">Zakary / Zaknx</Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          <Link to="/work" className="nav-link">Selected Work</Link><Link to="/engineering" className="nav-link active">Engineering</Link><Link to="/" hash="bio" className="nav-link">Curator Bio</Link><Link to="/inquiries" className="nav-link">Inquiries</Link>
        </nav>
        <div className="flex items-center gap-5"><span className="hidden items-center rounded-full bg-surface-high px-3 py-1.5 font-label text-xs font-semibold uppercase text-tertiary lg:inline-flex"><span className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Available for Q3 '24</span><a href="#treatises" className="icon-link" aria-label="Core principles"><Terminal size={19}/></a><a href="#arsenal" className="icon-link" aria-label="Technical arsenal"><FileText size={19}/></a></div>
      </div>
    </header>
    <main>
      <section className="mx-auto max-w-7xl px-6 pb-14 pt-16 md:px-12 md:pt-24">
        <div className="label mb-7 flex flex-wrap items-center gap-3"><span className="font-bold text-primary">Tome IV</span><span className="text-outline">/</span><span className="text-outline">Foundational Treatises & Architecture</span></div>
        <h1 className="max-w-5xl font-headline text-4xl font-semibold leading-[1.1] md:text-6xl">Engineering Philosophy —<br/><em className="font-normal">From Silicon to Neural Weights</em></h1>
        <p className="mt-7 max-w-3xl text-lg leading-relaxed text-surface-variant md:text-xl">Principles governing memory safety, algorithmic determinism, and high-throughput autonomous agents. A critical examination of abstraction tax, hardware sympathy, and scalable intelligence.</p>
        <div className="mt-10 grid gap-4 border-y border-outline-subtle py-5 font-label text-xs uppercase text-surface-variant sm:grid-cols-3"><span>◷ &nbsp;16 Min Reading Cohort</span><span>✓ &nbsp;Archival Digest #042</span><span>▣ &nbsp;Focus: C11 / C++20 / PyTorch / CUDA</span></div>
      </section>
      <section className="bg-inverse-surface py-14 text-inverse-foreground"><div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-12 md:px-12"><span className="label text-code-keyword md:col-span-3">Axiomatic Tenet</span><div className="border-l-2 border-primary pl-7 md:col-span-9"><blockquote className="font-headline text-2xl italic leading-snug md:text-4xl">“Engineered from first principles—from logic gates to neural weights.”</blockquote><p className="mt-5 max-w-3xl leading-relaxed text-inverse-muted">Software that endures must respect the silicon substrate. We discard cargo-cult abstractions to orchestrate microsecond latency, zero-copy pipelines, and verifiable cognitive loops.</p></div></div></section>
      <section id="treatises" className="scroll-mt-24 bg-surface-low py-20"><div className="mx-auto max-w-6xl px-6 md:px-12"><div className="mb-12"><span className="label font-bold text-primary">Treatises</span><h2 className="section-title mt-2">Core Principles</h2><p className="mt-2 font-mono text-xs text-outline">[SYS.LOG: ARCH-2024]</p></div>
        <div className="space-y-8">
          <article className="grid gap-8 bg-surface p-7 md:grid-cols-12 md:p-10"><div className="md:col-span-4"><span className="label font-bold text-primary">01 // Latency & Hardware</span><h3 className="mt-3 font-headline text-2xl font-semibold">The Fallacy of Zero-Cost Abstractions</h3><p className="mt-3 font-mono text-xs text-outline">Read Time: 6 min &nbsp;•&nbsp; Memory Layout</p></div><div className="space-y-5 text-sm leading-relaxed text-surface-variant md:col-span-8 md:text-base"><p>Modern software culture celebrates the myth that compiler ingenuity perpetually excuses developer indifference to physical silicon. When distributed architectures flounder under tail-latency spikes, the root failure is rarely network bandwidth; it is pathological L1/L2 cache evictions, unaligned pointer chasing, and erratic memory allocator contention.</p><p>Understanding cache locality, explicit structure packing, and vectorization intrinsics (SIMD) matters just as urgently in high-level distributed event-loops as in bare-metal drivers. Predictable memory layouts turn O(N) overhead into deterministic, hardware-prefetched throughput.</p><pre className="overflow-x-auto rounded bg-inverse-surface p-5 font-mono text-xs leading-relaxed text-code-accent"><code><span className="text-code-comment">{"// Aligned linear buffer avoiding false sharing"}</span>{"\ntypedef struct alignas(64) {\n    uint64_t sequence_id;\n    uint32_t state_flag;\n    uint8_t  _pad[52];\n} AgentEventSlot;"}</code></pre></div></article>
          <article className="grid gap-8 bg-surface p-7 md:grid-cols-12 md:p-10"><div className="md:col-span-4"><span className="label font-bold text-tertiary">02 // Stochastic Bounds</span><h3 className="mt-3 font-headline text-2xl font-semibold">Deterministic AI & Sandboxed Agents</h3><p className="mt-3 font-mono text-xs text-outline">Read Time: 5 min &nbsp;•&nbsp; Inference Pipelines</p></div><div className="md:col-span-8"><p className="leading-relaxed text-surface-variant">Stochastic neural nets are inherently non-deterministic, yet production enterprise demands strict reliability guarantees. Our autonomous agent architecture wraps model generation inside grammar-constrained state transitions. Every latent step is verifiable, reproducible via seed lockouts, and sandboxed with low-latency memory barriers.</p><div className="mt-7 grid gap-3 sm:grid-cols-3">{[["Constraint Layer","BNF Grammars","Strict syntax enforcement during beam token emission."],["State Isolation","WASM Sandboxing","Zero arbitrary host execution; pure capability interfaces."],["Inference Budget","<45ms TTFT","Quantized tensor parallel engines across edge instances."]].map(([a,b,c])=><div key={a} className="bg-surface-container p-4"><span className="label text-outline">{a}</span><p className="mt-2 font-semibold">{b}</p><p className="mt-1 text-xs text-surface-variant">{c}</p></div>)}</div></div></article>
          <article className="grid gap-8 bg-surface p-7 md:grid-cols-12 md:p-10"><div className="md:col-span-4"><span className="label font-bold text-primary">03 // Architectural Unification</span><h3 className="mt-3 font-headline text-2xl font-semibold">Full-Stack Cohesion</h3><p className="mt-3 font-mono text-xs text-outline">Read Time: 5 min &nbsp;•&nbsp; C++ to Reactive Web</p></div><div className="space-y-5 leading-relaxed text-surface-variant md:col-span-8"><p>The industry often bifurcates developers into disjoint camps: systems hackers isolated from interface ergonomics, and frontend engineers untethered from computational constraints. Real technological power awakens when low-level engineering directly informs human interface latency.</p><p>Bridging bare-metal C++ libraries with reactive web frontends and asynchronous microservices requires unified data serialization patterns and a single aesthetic vision: every millisecond shaved off the native allocator reflects directly in immediate, cinematic user agency.</p></div></article>
        </div></div></section>
      <section id="arsenal" className="scroll-mt-24 py-20"><div className="mx-auto max-w-7xl px-6 md:px-12"><div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><span className="label font-bold text-tertiary">Competency Blueprint</span><h2 className="section-title mt-2">Technical Arsenal Matrix</h2><p className="mt-3 max-w-2xl text-surface-variant">Detailed proficiency levels, verified toolchains, and architectural applications across all technical strata.</p></div><span className="label flex items-center gap-2 text-tertiary"><CheckCircle2 size={15}/> Production Verified</span></div><div className="grid gap-6 lg:grid-cols-2">{competencies.map((group)=><article key={group.title} className="bg-surface p-7 shadow-card"><div className="flex items-start justify-between gap-5"><div className="flex gap-4"><group.icon className="mt-1 text-primary" size={24}/><div><h3 className="font-headline text-xl font-semibold">{group.title}</h3><p className="label mt-1 text-tertiary">{group.subtitle}</p></div></div><span className="font-mono text-[10px] text-outline">{group.tier}</span></div><p className="mt-5 text-sm leading-relaxed text-surface-variant">{group.intro}</p><div className="mt-6 space-y-5">{group.skills.map(([name,detail,level,width])=><div key={name}><div className="flex justify-between gap-4 text-sm"><span className="font-semibold">{name}</span><span className="font-mono text-xs text-primary">{level}</span></div><p className="mt-1 text-xs text-outline">{detail}</p><div className="mt-2 h-1 bg-surface-container"><div className="h-full bg-primary" style={{width}}/></div></div>)}</div></article>)}</div>
        <div className="mt-10 flex flex-col items-start justify-between gap-5 bg-surface-low p-6 sm:flex-row sm:items-center"><p className="flex max-w-3xl gap-3 text-sm text-surface-variant"><CheckCircle2 className="shrink-0 text-tertiary" size={19}/>Every benchmark and engineering assertion referenced on this folio has reproducible artifact scripts in the public repository archive.</p><a href="https://github.com/zaknx" target="_blank" rel="noreferrer" className="cta-secondary shrink-0"><Code2 size={16}/>Inspect Source<ArrowUpRight size={14}/></a></div></div></section>
    </main>
    <Footer/>
  </div>;
}

function Footer(){return <footer className="bg-surface-low"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-12 md:flex-row md:items-center md:px-12"><div><span className="font-headline text-xl font-bold italic">Zakary / Zaknx</span><p className="mt-2 text-sm text-surface-variant">© 2024 Zakary (Zaknx). Archival Folio. Designed with editorial rigor and algorithmic care.</p></div><nav className="flex flex-wrap gap-x-6 gap-y-3"><Link className="nav-link" to="/work" hash="project-c-lib">C_libery</Link><Link className="nav-link" to="/work" hash="project-ml">MachineLearning</Link><Link className="nav-link" to="/work" hash="project-studyflow">studyFlow</Link><Link className="nav-link" to="/work" hash="project-simulations">simulations-</Link></nav></div></footer>}