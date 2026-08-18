import { Package, Monitor, ScanLine, Printer, Wallet, Cable, Computer, ShoppingBag } from 'lucide-react'
import { categories } from '../../data/categories'

const iconMap = {
  Package,
  Monitor,
  MonitorSmartphone: Monitor,
  ScanLine,
  Printer,
  Wallet,
  Cable,
  Computer,
  ShoppingBag,
}

export default function Categories() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Categories</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What We Offer</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map(({ id, name, description, icon }) => {
            const Icon = iconMap[icon] || Package

            return (
              <div
                key={id}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-500 group-hover:text-white">
                  <Icon size={22} />
                </div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

