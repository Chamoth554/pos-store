import { WifiOff, Check, ArrowUpRight, Database, ShieldCheck, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const highlights = [
  {
    icon: WifiOff,
    title: 'Zero Downtime',
    description: 'Keep billing and inventory running even when your internet connection drops.',
  },
  {
    icon: Database,
    title: 'Local Database',
    description: 'All transactions are stored locally first, so nothing is ever lost mid-sale.',
  },
  {
    icon: Zap,
    title: 'Fast Billing',
    description: 'No network round-trips means every checkout is instant, even during peak hours.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable Operations',
    description: 'Built for retail environments where a stable, dependable till matters most.',
  },
]

const features = [
  'Works fully offline with no internet dependency',
  'Automatic sync to the cloud when connection is restored',
  'Local database for instant reads and writes',
  'Barcode scanning & receipt printing support',
  'Multi-user cashier accounts with role permissions',
  'Daily sales & inventory reports',
]

export default function OfflinePOS() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)] py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/[0.06] blur-[130px]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.08]">
            <WifiOff size={26} className="text-emerald-400" />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
            Solution 01
          </span>
          <h1 className="mt-4 text-3xl font-black tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            Offline POS Systems
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
            Reliable POS solutions that continue working even without an internet connection.
            Built for businesses that need fast, dependable daily billing no matter what.
          </p>
        </div>

        {/* Highlight grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/20 hover:bg-white/[0.055]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.08]">
                  <Icon size={20} className="text-emerald-400" />
                </div>
                <h3 className="mt-4 text-base font-bold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Feature list */}
        <div className="mt-14 rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl sm:p-8">
          <h2 className="text-lg font-bold text-[var(--text-primary)]">What's included</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-400/10">
                  <Check size={10} className="text-emerald-400" />
                </div>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-6 py-5 backdrop-blur-xl sm:flex-row sm:px-7">
          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)]">
              Ready to set up an offline POS for your business?
            </p>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              Talk to our team and we'll walk you through the setup.
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