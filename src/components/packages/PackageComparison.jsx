import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PackageComparison({ packages = [] }) {
  const headers = ['Package', 'Best for', 'Highlights']

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-slate-100">
            <tr>
              {headers.map((header) => (
                <th key={header} className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-600">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg) => (
              <tr key={pkg.id} className="border-t border-slate-200">
                <td className="px-6 py-5 text-base font-semibold text-slate-900">{pkg.name}</td>
                <td className="px-6 py-5 text-sm text-slate-600">{pkg.availability}</td>
                <td className="px-6 py-5 text-sm text-slate-600">
                  <div className="flex items-center justify-between gap-3">
                    <span>{pkg.features.slice(0, 3).join(' • ')}</span>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                      Ask now <ArrowRight size={14} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
