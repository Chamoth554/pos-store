import {
  WifiOff,
  Cloud,
  Code2,
  ArrowUpRight,
  Check,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const solutions = [
  {
    icon: WifiOff,
    number: '01',
    title: 'Offline POS Systems',
    description:
      'Reliable POS solutions that continue working even without an internet connection. Perfect for businesses that need fast and dependable daily billing.',
    features: [
      'Works without internet',
      'Fast billing & inventory',
      'Local database',
      'Reliable retail operations',
    ],
    accent: 'from-emerald-400 to-green-500',
    path: '/packages/offline-pos',
  },
  {
    icon: Cloud,
    number: '02',
    title: 'Cloud-Based POS',
    description:
      'Modern web-based POS systems that give you access to your business data from anywhere, across multiple devices and locations.',
    features: [
      'Access from anywhere',
      'Real-time business data',
      'Multi-device support',
      'Cloud-based management',
    ],
    accent: 'from-green-400 to-teal-500',
    path: '/packages/cloud-pos',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Custom POS Solutions',
    description:
      'Tailored POS software built around your unique business workflow, industry requirements, and operational needs.',
    features: [
      'Built for your workflow',
      'Custom features',
      'Business-specific modules',
      'Scalable architecture',
    ],
    accent: 'from-teal-400 to-emerald-500',
    path: '/packages/custom-pos',
  },
]

export default function SolutionsSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)] py-20 sm:py-24 lg:py-32">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.06] blur-[130px]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 backdrop-blur-xl">
            <Sparkles
              size={14}
              className="text-emerald-400"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300 sm:text-xs">
              POS Solutions For Every Business
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            One Business.
            <span className="block bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-500 bg-clip-text text-transparent">
              The Right POS Solution.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
            From reliable offline systems to powerful cloud platforms and
            fully customized solutions, we build POS technology around the
            way your business works.
          </p>

        </div>

        {/* ================= SOLUTION CARDS ================= */}

        <div className="mt-14 grid gap-5 md:grid-cols-3">

          {solutions.map((solution) => {
            const Icon = solution.icon

            return (
              <Link
                key={solution.number}
                to={solution.path}
                className="group relative block overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/20 hover:bg-white/[0.055] sm:p-7"
              >

                {/* Card glow */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-gradient-to-br ${solution.accent} opacity-[0.07] blur-[60px] transition-opacity duration-500 group-hover:opacity-[0.15]`}
                />

                {/* Number */}
                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.08]">
                    <Icon
                      size={22}
                      className="text-emerald-400"
                    />
                  </div>

                  <span className="text-xs font-bold tracking-[0.15em] text-white/20">
                    {solution.number}
                  </span>

                </div>

                {/* Content */}
                <h3 className="mt-7 text-xl font-bold text-[var(--text-primary)]">
                  {solution.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="mt-6 space-y-3 border-t border-white/[0.07] pt-5">

                  {solution.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2.5 text-xs text-[var(--text-secondary)]"
                    >
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-400/10">
                        <Check
                          size={10}
                          className="text-emerald-400"
                        />
                      </div>

                      {feature}
                    </div>
                  ))}

                </div>

                {/* Hover arrow */}
                <div className="mt-7 flex items-center justify-between">

                  <span className="text-xs font-semibold text-emerald-400">
                    Learn More
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:border-emerald-400/30 group-hover:bg-emerald-400/10">
                    <ArrowUpRight
                      size={16}
                      className="text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>

                </div>

              </Link>
            )
          })}

        </div>

        {/* ================= BOTTOM CTA ================= */}

        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-6 py-5 backdrop-blur-xl sm:flex-row sm:px-7">

          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)]">
              Not sure which solution fits your business?
            </p>

            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              Talk to our team and we will recommend the right setup.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-green-500 px-5 py-3 text-xs font-bold text-black shadow-lg shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-emerald-500/20"
          >
            Discuss Your Business

            <ArrowUpRight size={15} />
          </Link>

        </div>

      </div>
    </section>
  )
}