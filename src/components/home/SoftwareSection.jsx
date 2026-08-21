import { ArrowRight, Check } from 'lucide-react'
import Button from '../common/Button'

const features = [
  'Offline billing',
  'Product management',
  'Stock management',
  'Barcode scanning',
  'Sales reports',
  'Invoice printing',
  'Inventory tracking',
  'Fast checkout',
]

export default function SoftwareSection() {
  return (
    <section className="bg-slate-950 py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Software</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Powerful LIXTEQ POS Software</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            Manage sales, products, inventory, billing and reports even when your internet connection is unavailable.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 text-sm text-slate-200">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                  <Check size={14} />
                </span>
                {feature}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button variant="accent" className="inline-flex items-center gap-2">
              Learn More <ArrowRight size={16} />
            </Button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6 shadow-2xl">
          <div className="rounded-2xl bg-slate-800 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Offline mode</span>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl bg-slate-700/80 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Today</p>
                <p className="mt-2 text-3xl font-bold text-white">Rs. 42,850</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-800 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Sales</p>
                  <p className="mt-2 text-xl font-semibold text-white">1,284</p>
                </div>
                <div className="rounded-xl bg-slate-800 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Products</p>
                  <p className="mt-2 text-xl font-semibold text-white">452</p>
                </div>
              </div>
              <div className="rounded-xl bg-slate-800 p-4">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>Inventory Status</span>
                  <span className="font-medium text-emerald-400">Healthy</span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-slate-700">
                  <div className="h-2 w-[72%] rounded-full bg-emerald-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
