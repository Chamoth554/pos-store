import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#030605] py-20 sm:py-28">
      
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-[120px]" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-green-500/10 blur-[100px]" />
        <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-[100px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Glass container */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] px-6 py-14 shadow-2xl shadow-emerald-950/20 backdrop-blur-2xl sm:rounded-[2.5rem] sm:px-10 sm:py-20 lg:px-20">

          {/* Green gradient border glow */}
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-400/10 via-transparent to-green-500/10 sm:rounded-[2.5rem]" />

          {/* Top glow */}
          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[90px]" />

          <div className="relative mx-auto max-w-3xl text-center">

            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300 backdrop-blur-xl">
              <Sparkles size={14} />
              Get Started
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ready to
              <span className="block bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                Sell Smarter?
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Get a complete POS setup designed for your business.
              Choose the right package or talk to our team about your requirements.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

              {/* Primary */}
              <Link
                to="/packages"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 px-6 py-3.5 text-sm font-bold text-black shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/30"
              >
                Explore POS Packages

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* Secondary */}
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-emerald-400/[0.08]"
              >
                <MessageCircle
                  size={17}
                  className="text-emerald-400"
                />

                Contact Us
              </Link>

            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                Complete POS Setup
              </span>

              <span className="hidden h-4 w-px bg-white/10 sm:block" />

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                Offline POS Software
              </span>

              <span className="hidden h-4 w-px bg-white/10 sm:block" />

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                Local Support
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}