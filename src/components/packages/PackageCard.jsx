import { Check, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../../utils/currency'
import Button from '../common/Button'

export default function PackageCard({ packageItem }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-slate-900 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
          {packageItem.badge}
        </span>

        <span className="text-xs font-medium text-emerald-700">
          {packageItem.availability}
        </span>
      </div>

      {/* Package Image */}
      <div className="mb-6 flex h-52 items-center justify-center overflow-hidden rounded-2xl bg-white">
        <img
          src={packageItem.image}
          alt={packageItem.name}
          className="h-full w-full object-contain"
        />
      </div>

      <h3 className="text-2xl font-bold text-slate-900">
        {packageItem.name}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {packageItem.shortDescription}
      </p>

      <ul className="mt-5 space-y-3">
        {packageItem.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-slate-700"
          >
            <Check
              size={15}
              className="mt-0.5 shrink-0 text-emerald-600"
            />

            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-slate-200 pt-5">
        <p className="text-sm text-slate-500">
          Price
        </p>

        <p className="mt-1 text-3xl font-black text-slate-900">
          {packageItem.price
            ? formatCurrency(packageItem.price)
            : 'Contact for Price'}
        </p>
      </div>

    </article>
  )
}