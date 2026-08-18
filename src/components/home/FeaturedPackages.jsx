import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { packages } from '../../data/packages'
import Button from '../common/Button'
import { formatCurrency } from '../../utils/currency'

export default function FeaturedPackages() {
  const featured = packages.slice(0, 3)

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Packages</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Complete POS Packages</h2>
          </div>
          <p className="max-w-xl text-base text-slate-600">Everything you need to start selling.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featured.map((pkg) => (
            <div key={pkg.id} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-slate-900 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                  {pkg.badge}
                </span>
                <span className="text-xs font-medium text-emerald-700">{pkg.availability}</span>
              </div>
              {/* Package Image */}
              <div className="mb-6 flex h-52 items-center justify-center overflow-hidden rounded-2xl bg-white">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">{pkg.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{pkg.shortDescription}</p>

              <ul className="mt-5 space-y-3">
                {pkg.features.slice(0, 5).map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check size={15} className="mt-0.5 text-emerald-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="text-sm text-slate-500">Starting from</p>
                <p className="mt-1 text-3xl font-black text-slate-900">{formatCurrency(pkg.price)}</p>
              </div>

            
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold !text-slate-900 transition-all duration-200 hover:bg-slate-50"
          >
            Explore All POS Packages <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
