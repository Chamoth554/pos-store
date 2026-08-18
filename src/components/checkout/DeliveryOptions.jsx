export default function DeliveryOptions({ selected, onChange }) {
  const options = [
    { value: 'Store Pickup', label: 'Store Pickup', description: 'Collect from our Colombo showroom' },
    { value: 'Islandwide Delivery', label: 'Islandwide Delivery', description: 'Delivery across Sri Lanka' },
  ]

  return (
    <div className="space-y-3">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={`w-full rounded-2xl border p-4 text-left transition ${
            selected === option.value ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200 bg-white hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-slate-900">{option.label}</p>
              <p className="mt-1 text-sm text-slate-600">{option.description}</p>
            </div>
            <span className={`h-4 w-4 rounded-full border-2 ${selected === option.value ? 'border-emerald-500 bg-emerald-500' : 'border-slate-300 bg-white'}`} />
          </div>
        </button>
      ))}
    </div>
  )
}
