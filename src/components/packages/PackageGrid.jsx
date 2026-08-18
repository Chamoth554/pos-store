import PackageCard from './PackageCard'

export default function PackageGrid({ packages = [] }) {
  if (!packages.length) {
    return <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-600">No packages available right now.</div>
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} packageItem={pkg} />
      ))}
    </div>
  )
}
