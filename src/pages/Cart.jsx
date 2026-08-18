import { useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import CartItem from '../components/cart/CartItem'
import CartSummary from '../components/cart/CartSummary'
import EmptyCart from '../components/cart/EmptyCart'
import { useEffect } from 'react'

export default function Cart() {
  const navigate = useNavigate()
  const { items, subtotal, total, updateQuantity, removeFromCart, clearCart } = useCart()

  useEffect(() => {
    document.title = 'Cart | LIXTEQ'
  }, [])

  if (!items.length) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <EmptyCart />
      </div>
    )
  }

  return (
    <div className="bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Shopping Cart</h1>
          <p className="mt-2 text-slate-600">Review your cart before checkout.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={(id) => updateQuantity(id, Number(item.quantity) + 1)}
                onDecrease={(id) => updateQuantity(id, Number(item.quantity) - 1)}
                onRemove={removeFromCart}
              />
            ))}
          </div>

          <CartSummary
            subtotal={subtotal}
            total={total}
            onCheckout={() => navigate('/checkout')}
            onClearCart={clearCart}
            disabled={items.length === 0}
          />
        </div>
      </div>
    </div>
  )
}
