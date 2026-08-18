import { Cpu, Monitor, Keyboard, ScanLine, Printer, Wallet, Package } from 'lucide-react'
import IndividualItemCard from './IndividualItemCard'

const categoryIcons = {
  'PC Towers': Cpu,
  'Monitors': Monitor,
  'Keyboard & Mouse': Keyboard,
  'Barcode Readers': ScanLine,
  'Printers': Printer,
  'Cash Drawers': Wallet,
  'Other': Package,
}

export default function IndividualItemsSection({ categories = [] }) {
  if (!categories.length) return null

  return (
    <div className="space-y-14">
      {categories.map((group) => {
        const Icon = categoryIcons[group.category] || Package

        return (
          <div key={group.category}>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50">
                <Icon size={16} className="text-emerald-600" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-700">
                {group.category}
              </h3>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {group.items.map((item) => (
                <IndividualItemCard key={item.id} item={item} icon={Icon} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}