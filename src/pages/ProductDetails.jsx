import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Check, MessageCircle, ShoppingCart, Star } from 'lucide-react'
import { products } from '../data/products'
import Button from '../components/common/Button'
import ProductImage from '../components/products/ProductImage'
import QuantitySelector from '../components/products/QuantitySelector'
import { useCart } from '../hooks/useCart'
import { formatCurrency } from '../utils/currency'
import { createWhatsAppLink, generateWhatsAppMessage } from '../utils/whatsapp'

export default function ProductDetails() {
  const { id } = useParams()
  const product = products.find((item) => item.slug === id)
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== product?.id && item.category === product?.category).slice(0, 3),
    [product]
  )

  useEffect(() => {
    document.title = product ? `${product.name} | LIXTEQ` : 'Product Details | LIXTEQ'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', product ? product.shortDescription : 'POS product details.')
  }, [product])

  if (!product) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900">Product not found</h1>
        <p className="mt-3 text-slate-600">The product you are looking for is not available right now.</p>
        <div className="mt-6">
          <Link to="/shop"><Button variant="accent">Back to Shop</Button></Link>
        </div>
      </div>
    )
  }

  const totalPrice = product.price ? Number(product.price) * quantity : null
  const whatsappMessage = generateWhatsAppMessage({
    productName: product.name,
    quantity,
    total: totalPrice ? formatCurrency(totalPrice) : 'Contact for Price',
    customerName: 'Customer',
    phone: 'N/A',
    address: 'N/A',
  })

  return (
    <div className="bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-emerald-700">
            <ArrowLeft size={16} /> Back to shop
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <ProductImage src={product.image} alt={product.name} className="h-[440px] w-full rounded-2xl object-cover" />
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-700">{product.badge}</span>
              <span className="text-sm font-medium text-emerald-700">{product.stock > 0 ? 'In Stock' : 'Out of stock'}</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{product.name}</h1>

            <div className="mt-4 flex items-center gap-2 text-amber-400">
              {[...Array(5)].map((_, index) => (<Star key={index} size={15} fill="currentColor" />))}
              <span className="ml-1 text-sm text-slate-500">4.9 (Customer rating)</span>
            </div>

            <div className="mt-6">
              <p className="text-4xl font-black text-slate-900">{product.price ? formatCurrency(product.price) : 'Contact for Price'}</p>
              {product.oldPrice ? <p className="mt-2 text-sm text-slate-400 line-through">{formatCurrency(product.oldPrice)}</p> : null}
            </div>

            <p className="mt-5 text-base leading-7 text-slate-600">{product.description}</p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <QuantitySelector
                value={quantity}
                onDecrease={() => setQuantity((value) => Math.max(1, value - 1))}
                onIncrease={() => setQuantity((value) => value + 1)}
              />
              <Button variant="accent" className="flex-1 gap-2" onClick={() => addToCart(product, quantity)}>
                <ShoppingCart size={16} /> Add to Cart
              </Button>
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Button variant="secondary" className="flex-1">Buy Now</Button>
              <a href={createWhatsAppLink(whatsappMessage)} target="_blank" rel="noreferrer" className="flex-1">
                <Button variant="ghost" className="w-full gap-2"><MessageCircle size={16} /> WhatsApp Inquiry</Button>
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Category</p>
                <p className="mt-2 font-semibold text-slate-900">{product.category}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Availability</p>
                <p className="mt-2 font-semibold text-slate-900">{product.stock > 0 ? `${product.stock} units available` : 'Currently unavailable'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-3">
              <div className="flex gap-4 border-b border-slate-200 pb-4 text-sm font-medium text-slate-500">
                <span className="border-b-2 border-emerald-500 pb-2 text-slate-900">Description</span>
                <span>Features</span>
                <span>Specifications</span>
              </div>
            </div>

            <div className="lg:col-span-2">
              <p className="text-base leading-7 text-slate-600">{product.description}</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">Key features</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 text-emerald-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-semibold text-slate-900">Specifications</h3>
              <dl className="mt-4 space-y-3 text-sm">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between gap-4 border-b border-slate-200 pb-2">
                    <dt className="text-slate-500">{key}</dt>
                    <dd className="font-medium text-slate-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-semibold text-slate-900">Why customers choose it</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 text-emerald-600" />Built for reliable daily retail use</li>
                <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 text-emerald-600" />Easy integration with POS software</li>
                <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 text-emerald-600" />Support available in Sri Lanka</li>
              </ul>
            </div>
          </div>
        </div>

        {relatedProducts.length ? (
          <div className="mt-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Related products</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relatedProducts.map((item) => (
                <article key={item.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <ProductImage src={item.image} alt={item.name} className="h-52 w-full object-cover" />
                  <div className="p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">{item.category}</p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900">{item.name}</h3>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-xl font-black text-slate-900">{item.price ? formatCurrency(item.price) : 'Contact for Price'}</p>
                      <Link to={`/product/${item.slug}`} className="text-sm font-semibold text-emerald-700">View</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
