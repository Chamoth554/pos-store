import { Link } from 'react-router-dom'
import Button from '../common/Button'

export default function EmptyCart() {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
      <h2 className="text-2xl font-bold text-slate-900">Your cart is empty</h2>
      <p className="mt-3 text-slate-600">Add some POS hardware or software to your cart to continue.</p>
      <div className="mt-6 flex justify-center">
        <Link to="/shop">
          <Button variant="accent">Continue Shopping</Button>
        </Link>
      </div>
    </div>
  )
}
