import { useEffect } from 'react'
import { packages } from '../data/packages'
import PackageGrid from '../components/packages/PackageGrid'
import PackageComparison from '../components/packages/PackageComparison'

export default function Packages() {
  useEffect(() => {
    document.title = 'POS Packages | LIXTEQ'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Complete POS packages built for modern Sri Lankan retail businesses.')
  }, [])

  return (
    <div className="bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Packages</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Complete POS Packages</h1>
          <p className="mt-4 text-lg text-slate-600">Everything you need to start selling.</p>
        </div>

        <PackageGrid packages={packages} />

        <div className="mt-16">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Compare packages</h2>
          </div>
          <PackageComparison packages={packages} />
        </div>
      </div>
    </div>
  )
}
