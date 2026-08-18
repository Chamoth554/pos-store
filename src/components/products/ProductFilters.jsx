import { SlidersHorizontal } from 'lucide-react'
import { categories } from '../../data/categories'

const filters = [
  { label: 'All', value: 'all' },
  ...categories.map((category) => ({ label: category.name, value: category.slug }))
]

export default function ProductFilters({ category, onCategoryChange, priceLimit, setPriceLimit, showMobileFilters, setShowMobileFilters }) {
  return (
    <>
      <div className="hidden lg:block">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5 flex items-center gap-2 text-slate-900">
            <SlidersHorizontal size={18} />
            <h3 className="text-lg font-semibold">Filters</h3>
          </div>

          <div className="space-y-6">
            <div>
              <p className="mb-3 text-sm font-semibold text-slate-700">Categories</p>
              <div className="space-y-2">
                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => onCategoryChange(filter.value)}
                    className={`block w-full rounded-xl px-3 py-2 text-left text-sm transition ${
                      category === filter.value ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="priceFilter" className="mb-3 block text-sm font-semibold text-slate-700">Max price</label>
              <input
                id="priceFilter"
                type="range"
                min="0"
                max="150000"
                step="5000"
                value={priceLimit}
                onChange={(event) => setPriceLimit(Number(event.target.value))}
                className="w-full accent-emerald-500"
              />
              <div className="mt-2 flex justify-between text-xs text-slate-500">
                <span>Rs. 0</span>
                <span>Rs. {priceLimit.toLocaleString('en-LK')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showMobileFilters ? (
        <div className="fixed inset-0 z-40 bg-slate-950/60 lg:hidden" onClick={() => setShowMobileFilters(false)}>
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm bg-white p-5 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
              <button type="button" onClick={() => setShowMobileFilters(false)} className="text-sm text-slate-600">Close</button>
            </div>

            <div className="space-y-6">
              <div>
                <p className="mb-3 text-sm font-semibold text-slate-700">Categories</p>
                <div className="space-y-2">
                  {filters.map((filter) => (
                    <button
                      key={filter.value}
                      type="button"
                      onClick={() => {
                        onCategoryChange(filter.value)
                        setShowMobileFilters(false)
                      }}
                      className={`block w-full rounded-xl px-3 py-2 text-left text-sm transition ${
                        category === filter.value ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="mobilePriceFilter" className="mb-3 block text-sm font-semibold text-slate-700">Max price</label>
                <input
                  id="mobilePriceFilter"
                  type="range"
                  min="0"
                  max="150000"
                  step="5000"
                  value={priceLimit}
                  onChange={(event) => setPriceLimit(Number(event.target.value))}
                  className="w-full accent-emerald-500"
                />
                <div className="mt-2 flex justify-between text-xs text-slate-500">
                  <span>Rs. 0</span>
                  <span>Rs. {priceLimit.toLocaleString('en-LK')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
