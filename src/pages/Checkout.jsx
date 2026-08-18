import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import CheckoutForm from '../components/checkout/CheckoutForm'
import OrderSummary from '../components/checkout/OrderSummary'
import { orderService } from '../services/orderService'
import { createWhatsAppLink, generateWhatsAppMessage } from '../utils/whatsapp'

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  district: '',
  deliveryMethod: 'Store Pickup',
  notes: '',
}

export default function Checkout() {
  const navigate = useNavigate()
  const { items, subtotal, total, clearCart } = useCart()
  const [formData, setFormData] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    document.title = 'Checkout | LIXTEQ'
  }, [])

  if (!items.length) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900">Your cart is empty</h1>
        <p className="mt-3 text-slate-600">Please add products before checkout.</p>
      </div>
    )
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const orderPayload = {
        ...formData,
        items,
        subtotal,
        total,
      }

      const response = await orderService.submitOrder(orderPayload)
      const summary = generateWhatsAppMessage({
        productName: items.map((item) => `${item.name} x${item.quantity}`).join(', '),
        quantity: items.reduce((sum, item) => sum + Number(item.quantity), 0),
        total: `Rs. ${total.toLocaleString('en-LK')}`,
        customerName: formData.fullName,
        phone: formData.phone,
        address: `${formData.address}, ${formData.city}, ${formData.district}`,
      })

      if (response.success) {
        clearCart()
        window.open(createWhatsAppLink(summary), '_blank', 'noopener,noreferrer')
        navigate('/order-success', { state: { orderId: response.orderId } })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Checkout</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Complete your order</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <CheckoutForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
          </div>

          <OrderSummary items={items} subtotal={subtotal} total={total} />
        </div>
      </div>
    </div>
  )
}
