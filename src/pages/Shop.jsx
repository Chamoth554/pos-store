import { useEffect, useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { products } from '../data/products'
import ProductGrid from '../components/products/ProductGrid'
import ProductSearch from '../components/products/ProductSearch'
import ProductFilters from '../components/products/ProductFilters'
import Button from '../components/common/Button'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price Low to High' },
  { value: 'price-high', label: 'Price High to Low' },
  { value: 'newest', label: 'Newest' },
]

export default function Shop() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('all')
  const [priceLimit, setPriceLimit] = useState(150000)
  const [sortBy, setSortBy] = useState('featured')
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 9

  useEffect(() => {
    document.title = 'Shop | LIXTEQ'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Browse POS hardware, accessories, and software for Sri Lankan businesses.')
  }, [])

  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()

    let nextProducts = products.filter((product) => {
      const matchesSearch = !term || product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term)
      const matchesCategory = category === 'all' || product.category.toLowerCase().replace(/\s+/g, '-') === category
      const matchesPrice = Number(product.price ?? 0) <= priceLimit
      return matchesSearch && matchesCategory && matchesPrice
    })

    if (sortBy === 'price-low') {
      nextProducts = [...nextProducts].sort((a, b) => (Number(a.price ?? 0) - Number(b.price ?? 0)))
    }
    if (sortBy === 'price-high') {
      nextProducts = [...nextProducts].sort((a, b) => (Number(b.price ?? 0) - Number(a.price ?? 0)))
    }
    if (sortBy === 'newest') {
      nextProducts = [...nextProducts].sort((a, b) => b.id.localeCompare(a.id))
    }

    return nextProducts
  }, [searchTerm, category, priceLimit, sortBy])

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize))
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  const handleCategoryChange = (nextCategory) => {
    setCategory(nextCategory)
    setCurrentPage(1)
  }

  const handleSortChange = (nextSort) => {
    setSortBy(nextSort)
    setCurrentPage(1)
  }

  const handleSearchChange = (nextSearch) => {
    setSearchTerm(nextSearch)
    setCurrentPage(1)
  }

  return (
    <div className="bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Shop</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Browse POS products</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <select value={sortBy} onChange={(event) => handleSortChange(event.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100">
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <Button variant="secondary" className="lg:hidden" onClick={() => setShowMobileFilters(true)}>
              <span className="inline-flex items-center gap-2"><SlidersHorizontal size={16} /> Filters</span>
            </Button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div className="hidden lg:block">
            <ProductFilters
              category={category}
              onCategoryChange={handleCategoryChange}
              priceLimit={priceLimit}
              setPriceLimit={setPriceLimit}
              showMobileFilters={showMobileFilters}
              setShowMobileFilters={setShowMobileFilters}
            />
          </div>

          <div>
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="w-full md:max-w-lg">
                <ProductSearch searchTerm={searchTerm} setSearchTerm={handleSearchChange} />
              </div>
              <div className="md:hidden">
                <select value={sortBy} onChange={(event) => handleSortChange(event.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100">
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6 flex items-center justify-between text-sm text-slate-600">
              <p>{filteredProducts.length} products</p>
              <p>Page {currentPage} of {totalPages}</p>
            </div>

            <ProductGrid products={paginatedProducts} />

            {filteredProducts.length > pageSize ? (
              <div className="mt-8 flex items-center justify-center gap-3">
                <Button variant="secondary" onClick={() => setCurrentPage((page) => Math.max(1, page - 1))} disabled={currentPage === 1}>
                  Previous
                </Button>
                <span className="text-sm font-medium text-slate-700">{currentPage} / {totalPages}</span>
                <Button variant="secondary" onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))} disabled={currentPage === totalPages}>
                  Next
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <ProductFilters
        category={category}
        onCategoryChange={handleCategoryChange}
        priceLimit={priceLimit}
        setPriceLimit={setPriceLimit}
        showMobileFilters={showMobileFilters}
        setShowMobileFilters={setShowMobileFilters}
      />
    </div>
  )
}
