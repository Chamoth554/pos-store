import { Link } from 'react-router-dom'
import Button from '../components/common/Button'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <h1 className="text-5xl font-black text-slate-900">404</h1>
      <h2 className="mt-4 text-3xl font-bold text-slate-900">Page not found</h2>
      <p className="mt-3 text-slate-600">The page you are looking for does not exist or has been moved.</p>
      <div className="mt-8 flex justify-center">
        <Link to="/"><Button variant="accent">Back to Home</Button></Link>
      </div>
    </div>
  )
}
