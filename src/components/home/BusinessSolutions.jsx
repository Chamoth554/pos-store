import { ArrowRight, ShoppingBasket, Store, ShoppingBag, Pill, UtensilsCrossed, Shirt, Croissant } from 'lucide-react'
import { Link } from 'react-router-dom'

const solutions = [
  { name: 'Grocery Stores', icon: ShoppingBasket },
  { name: 'Supermarkets', icon: Store },
  { name: 'Retail Shops', icon: ShoppingBag },
  { name: 'Pharmacies', icon: Pill },
  { name: 'Restaurants', icon: UtensilsCrossed },
  { name: 'Clothing Stores', icon: Shirt },
  { name: 'Bakeries', icon: Croissant },
  { name: 'Mini Markets', icon: Store },
]

export default function BusinessSolutions() {
  return (
    <section className="bg-slate-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Business fit</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">POS Solutions for Every Business</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {solutions.map(({ name, icon: Icon }) => (
            <div key={name} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition group-hover:bg-emerald-500 group-hover:text-white">
                <Icon size={26} />
              </div>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
                <ArrowRight size={18} className="text-slate-400 transition group-hover:text-emerald-600" />
              </div>
              <Link to="/contact" className="mt-4 inline-block text-sm font-medium text-emerald-700">
                Get a solution
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
