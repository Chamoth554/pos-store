import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products } from '../../data/products'
import Button from '../common/Button'
import { formatCurrency } from '../../utils/currency'

const bestSellerIds = [
  'p1001',
  'p1002',
  'p1003',
  'p1004',
  'p1005',
  'p1006',
]

export default function BestSellers() {
  const items = products.filter((product) => bestSellerIds.includes(product.id))

  const handleInquire = (product) => {
    const message = `Hi! I'm interested in ${product.name}. Could you provide more details?`
    const whatsappLink = `https://wa.me/947XXXXXXXX?text=${encodeURIComponent(message)}`
    window.open(whatsappLink, '_blank')
  }

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Best sellers</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Best Sellers</h2>
          </div>
          <Link to="/packages" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-emerald-700">
            View Our Packages <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((product) => (
            <article key={product.id} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-56 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80'
                  }}
                />
                <span className="absolute left-4 top-4 rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-950">
                  {product.badge}
                </span>
              </div>

              <div className="p-5">
                <div className="mb-2 flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">{product.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{product.name}</h3>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-2xl font-black text-slate-900">{product.price ? formatCurrency(product.price) : 'Contact for Price'}</p>
                    {product.oldPrice ? <p className="text-sm text-slate-400 line-through">{formatCurrency(product.oldPrice)}</p> : null}
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    {product.stock > 0 ? 'In Stock' : 'Sold Out'}
                  </span>
                </div>

                <div className="mt-5 flex gap-3">
                  <Button variant="accent" className="flex-1" onClick={() => handleInquire(product)}>
                    Inquire Now
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
