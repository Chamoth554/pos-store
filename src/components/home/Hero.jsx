import {
  ArrowRight,
  CheckCircle,
  Monitor,
  ScanLine,
  Printer,
  Wallet,
  Sparkles,
  ShieldCheck,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const trustIndicators = [
  'Complete POS Setup',
  'Offline Software',
  'Local Support',
  'Quality Hardware',
]

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--bg-primary)]">

      {/* ================= BACKGROUND ================= */}

      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[650px] w-[650px] rounded-full blur-[130px]"
        style={{
          background:
            'radial-gradient(circle, rgba(34,197,94,0.18), transparent 68%)',
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full blur-[130px]"
        style={{
          background:
            'radial-gradient(circle, rgba(16,185,129,0.14), transparent 68%)',
        }}
      />

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]"
        style={{
          background:
            'radial-gradient(circle, rgba(34,197,94,0.08), transparent 65%)',
        }}
      />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-12 lg:px-8 lg:pb-32 lg:pt-16">

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* ================= LEFT ================= */}

          <div>

            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                Smart POS Solutions
              </span>

              <Sparkles
                size={13}
                className="text-emerald-400"
              />
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.035em] text-[var(--text-primary)] sm:text-5xl lg:text-[4.4rem]">

              Everything Your Business

              <span className="mt-2 block">
                Needs to{' '}
                <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Sell Smarter.
                </span>
              </span>

            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8">
              Complete POS hardware and powerful offline software
              designed to help modern businesses manage sales,
              stock, billing, and customers with confidence.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/packages"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 px-7 py-4 text-sm font-bold text-black shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/30"
              >
                Explore POS Packages

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.045] px-7 py-4 text-sm font-semibold text-[var(--text-primary)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/[0.07]"
              >
                Talk to Us

                <ArrowRight
                  size={17}
                  className="text-emerald-400 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

            {/* Trust */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-4">

              {trustIndicators.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-medium text-[var(--text-secondary)] sm:text-sm"
                >
                  <CheckCircle
                    size={16}
                    className="shrink-0 text-emerald-400"
                  />
                  {item}
                </div>
              ))}

            </div>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">

            {/* Main Glass Frame */}
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.045] p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:p-4">

              {/* Green glow */}
              <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-emerald-500/10 blur-[70px]" />

              {/* Product Image */}
              <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/[0.07] bg-white/[0.025] sm:min-h-[430px]">

                {/* Inner glow */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(34,197,94,0.13),transparent_55%)]" />

                <img
                  src="/images/pos/standard-pos-set2.png"
                  alt="Complete Standard POS Set"
                  className="relative z-10 w-[88%] object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.45)] transition duration-500 hover:scale-[1.03]"
                />

                {/* Product label */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-xl">

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                      Featured Setup
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      Standard POS Set
                    </p>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-semibold text-emerald-300">
                      Ready
                    </span>
                  </div>

                </div>

              </div>
            </div>

            {/* ================= FLOATING CARD 1 ================= */}

            <div className="absolute -left-3 top-10 hidden rounded-2xl border border-white/10 bg-black/50 p-3 shadow-2xl backdrop-blur-2xl sm:block lg:-left-8">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10">
                  <Monitor
                    size={19}
                    className="text-emerald-400"
                  />
                </div>

                <div>
                  <p className="text-[10px] text-slate-500">
                    POS System
                  </p>

                  <p className="text-xs font-bold text-white">
                    Complete Setup
                  </p>
                </div>

              </div>

            </div>

            {/* ================= FLOATING CARD 2 ================= */}

            <div className="absolute -right-3 top-28 hidden rounded-2xl border border-white/10 bg-black/50 p-3 shadow-2xl backdrop-blur-2xl sm:block lg:-right-7">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10">
                  <ScanLine
                    size={19}
                    className="text-emerald-400"
                  />
                </div>

                <div>
                  <p className="text-[10px] text-slate-500">
                    Scanning
                  </p>

                  <p className="text-xs font-bold text-white">
                    Fast & Reliable
                  </p>
                </div>

              </div>

            </div>

            {/* ================= BOTTOM STATS ================= */}

            <div className="absolute -bottom-16 left-1/2 grid w-[92%] -translate-x-1/2 grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-black/55 shadow-2xl backdrop-blur-2xl">

              <div className="flex flex-col items-center justify-center border-r border-white/10 px-3 py-3">
                <Printer
                  size={16}
                  className="mb-1 text-emerald-400"
                />
                <span className="text-[9px] text-slate-500">
                  Printing
                </span>
                <span className="text-[11px] font-bold text-white">
                  Fast
                </span>
              </div>

              <div className="flex flex-col items-center justify-center border-r border-white/10 px-3 py-3">
                <Wallet
                  size={16}
                  className="mb-1 text-emerald-400"
                />
                <span className="text-[9px] text-slate-500">
                  Cash
                </span>
                <span className="text-[11px] font-bold text-white">
                  Secure
                </span>
              </div>

              <div className="flex flex-col items-center justify-center px-3 py-3">
                <ShieldCheck
                  size={16}
                  className="mb-1 text-emerald-400"
                />
                <span className="text-[9px] text-slate-500">
                  Software
                </span>
                <span className="text-[11px] font-bold text-white">
                  Offline
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}