import { Minus, Plus, Trash2 } from 'lucide-react'
import { formatCurrency } from '../../utils/currency'

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const itemTotal = Number(item.price ?? 0) * Number(item.quantity ?? 1)

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.name} className="h-20 w-20 rounded-xl object-cover" loading="lazy" onError={(event) => {
          event.currentTarget.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80'
        }} />
        <div>
          <h3 className="font-semibold text-slate-900">{item.name}</h3>
          <p className="mt-1 text-sm text-slate-500">{item.price ? formatCurrency(item.price) : 'Contact for Price'}</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 sm:justify-end">
        <div className="inline-flex items-center rounded-xl border border-slate-200 bg-slate-50">
          <button type="button" onClick={() => onDecrease(item.id)} className="flex h-10 w-10 items-center justify-center text-slate-600 hover:text-slate-900" aria-label={`Decrease quantity of ${item.name}`}>
            <Minus size={15} />
          </button>
          <span className="min-w-8 text-center text-sm font-semibold text-slate-900">{item.quantity}</span>
          <button type="button" onClick={() => onIncrease(item.id)} className="flex h-10 w-10 items-center justify-center text-slate-600 hover:text-slate-900" aria-label={`Increase quantity of ${item.name}`}>
            <Plus size={15} />
          </button>
        </div>

        <p className="min-w-[110px] text-right font-semibold text-slate-900">{formatCurrency(itemTotal)}</p>

        <button type="button" onClick={() => onRemove(item.id)} className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:border-red-200 hover:text-red-600" aria-label={`Remove ${item.name} from cart`}>
          <Trash2 size={15} />
        </button>
      </div>
    </div>
  )
}
