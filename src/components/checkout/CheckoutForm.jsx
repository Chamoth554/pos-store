export default function CheckoutForm({ formData, handleChange, handleSubmit, isSubmitting }) {
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Full Name
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            placeholder="Enter full name"
            required
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Phone Number
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            placeholder="Enter phone number"
            required
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            placeholder="Enter email" 
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          City
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            placeholder="Enter city"
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-slate-700">
        Address
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="mt-2 min-h-28 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
          placeholder="Enter delivery address"
          required
        />
      </label>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          District
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            placeholder="Enter district"
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Delivery Method
          <select
            name="deliveryMethod"
            value={formData.deliveryMethod}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
          >
            <option value="Store Pickup">Store Pickup</option>
            <option value="Islandwide Delivery">Islandwide Delivery</option>
          </select>
        </label>
      </div>

      <label className="block text-sm font-medium text-slate-700">
        Order Notes
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="mt-2 min-h-24 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
          placeholder="Add notes or installation requirements"
        />
      </label>

      <button type="submit" disabled={isSubmitting} className="w-full rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60">
        {isSubmitting ? 'Submitting...' : 'Place Order'}
      </button>
    </form>
  )
}
