export default function ProductBadge({ badge }) {
  if (!badge) return null

  return (
    <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-700">
      {badge}
    </span>
  )
}
