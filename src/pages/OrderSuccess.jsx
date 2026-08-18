import { Link, useLocation } from 'react-router-dom'
import Button from '../components/common/Button'

export default function OrderSuccess() {
  const { state } = useLocation()

  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Order placed successfully</h1>
        <p className="mt-4 text-lg text-slate-700">Thank you for your order with LIXTEQ.</p>
        <p className="mt-2 text-sm text-slate-600">Order ID: {state?.orderId || 'POS-0000'}</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link to="/shop"><Button variant="accent">Continue Shopping</Button></Link>
          <Link to="/"><Button variant="secondary">Go Home</Button></Link>
        </div>
      </div>
    </div>
  )
}
