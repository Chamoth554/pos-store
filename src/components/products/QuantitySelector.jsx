import { Minus, Plus } from 'lucide-react'

export default function QuantitySelector({ value, onDecrease, onIncrease, min = 1 }) {
  return (
    <div className="inline-flex items-center rounded-xl border border-slate-200 bg-white">
      <button type="button" onClick={onDecrease} disabled={value <= min} className="flex h-10 w-10 items-center justify-center text-slate-600 transition hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-40" aria-label="Decrease quantity">
        <Minus size={16} />
      </button>
      <span className="min-w-12 text-center text-sm font-semibold text-slate-900">{value}</span>
      <button type="button" onClick={onIncrease} className="flex h-10 w-10 items-center justify-center text-slate-600 transition hover:text-slate-900" aria-label="Increase quantity">
        <Plus size={16} />
      </button>
    </div>
  )
}
