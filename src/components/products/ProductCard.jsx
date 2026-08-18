import { ShoppingCart, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { formatCurrency } from '../../utils/currency'
import Button from '../common/Button'
import ProductBadge from './ProductBadge'
import ProductImage from './ProductImage'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <ProductImage src={product.image} alt={product.name} className="h-56 w-full object-cover transition duration-300 group-hover:scale-[1.02]" />
        <div className="absolute left-4 top-4">
          <ProductBadge badge={product.badge} />
        </div>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center gap-1 text-amber-400">
          {[...Array(5)].map((_, index) => (<Star key={index} size={14} fill="currentColor" />))}
        </div>
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">{product.category}</p>
        <h3 className="mt-2 text-xl font-semibold text-slate-900">{product.name}</h3>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-2xl font-black text-slate-900">{product.price ? formatCurrency(product.price) : 'Contact for Price'}</p>
            {product.oldPrice ? <p className="text-sm text-slate-400 line-through">{formatCurrency(product.oldPrice)}</p> : null}
          </div>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
            {product.stock > 0 ? 'In Stock' : 'Out of stock'}
          </span>
        </div>

        <div className="mt-5 flex gap-3">
          <Button variant="accent" className="flex-1 gap-2" onClick={() => addToCart(product, 1)}>
            <ShoppingCart size={15} /> Add to Cart
          </Button>
          <Link to={`/product/${product.slug}`} className="flex-1">
            <Button variant="secondary" className="w-full">View Details</Button>
          </Link>
        </div>
      </div>
    </article>
  )
}
