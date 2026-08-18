import Button from '../common/Button'
import { formatCurrency } from '../../utils/currency'

export default function CartSummary({ subtotal, total, onCheckout, onClearCart, disabled }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">Order Summary</h3>

      <div className="mt-5 space-y-3 text-sm text-slate-600">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span className="font-medium text-slate-900">{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Delivery</span>
          <span className="font-medium text-slate-900">Calculated at checkout</span>
        </div>
        <div className="flex items-center justify-between border-t border-slate-200 pt-3 text-base font-semibold text-slate-900">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <Button variant="accent" className="w-full" onClick={onCheckout} disabled={disabled}>
          Proceed to Checkout
        </Button>
        <Button variant="secondary" className="w-full" onClick={onClearCart}>
          Clear Cart
        </Button>
      </div>
    </div>
  )
}
