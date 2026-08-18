export default function PackageFeatures({ features = [] }) {
  return (
    <div className="space-y-2">
      {features.map((feature) => (
        <div key={feature} className="flex items-center gap-2 text-sm text-slate-700">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          {feature}
        </div>
      ))}
    </div>
  )
}
