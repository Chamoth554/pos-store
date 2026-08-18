import { ArrowUpRight } from 'lucide-react'
import { formatCurrency } from '../../utils/currency'

export default function IndividualItemCard({ item, icon: Icon }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300/70 hover:shadow-xl hover:shadow-emerald-900/[0.06]">

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100">
        {Icon && (
          <div className="absolute left-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/90 shadow-sm backdrop-blur-sm">
            <Icon size={15} className="text-emerald-600" />
          </div>
        )}

        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-[1.07]"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h4 className="min-h-[2.7rem] text-[0.9rem] font-bold leading-snug text-slate-900 line-clamp-2">
          {item.name}
        </h4>

        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Price
            </p>
            {item.price ? (
              <p className="mt-0.5 text-lg font-black tracking-tight text-slate-900">
                {formatCurrency(item.price)}
              </p>
            ) : (
              <p className="mt-1 inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                Contact for Price
              </p>
            )}
          </div>

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-emerald-400/40 group-hover:bg-emerald-50 group-hover:text-emerald-600">
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </div>
  )
}