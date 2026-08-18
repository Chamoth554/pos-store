import { useEffect } from 'react'
import {
  Star,
  Quote,
  ExternalLink,
} from 'lucide-react'

export default function About() {
  useEffect(() => {
    document.title = 'About Us | LIXTEQ'
  }, [])

  const sampleReviews = [
    {
      name: 'Kasun Perera',
      business: 'Retail Business',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: 'The POS system is simple to use and has made our daily billing and stock management much easier.',
    },
    {
      name: 'Nadeesha Fernando',
      business: 'Grocery Store',
      image: 'https://i.pravatar.cc/150?img=47',
      rating: 5,
      text: 'A practical solution for our business. The interface is clean, fast and easy for our staff to understand.',
    },
    {
      name: 'Tharindu Silva',
      business: 'Small Business Owner',
      image: 'https://i.pravatar.cc/150?img=11',
      rating: 5,
      text: 'Very useful system for managing sales and products. It has helped us organize our everyday operations.',
    },
  ]

  return (
    <div className="bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ABOUT */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            About us
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Built for Sri Lankan businesses
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            LIXTEQ provides trusted POS hardware, complete retail systems,
            and practical software for modern Sri Lankan shops, supermarkets,
            restaurants, pharmacies, and service businesses.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-600">
            We help businesses improve checkout speed, inventory handling,
            customer service, and day-to-day operations with reliable systems
            designed for local conditions.
          </p>

        </div>


        {/* WHY LIXTEQ */}
        <div className="mt-14 text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Why LIXTEQ
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Simple. Reliable. Business-ready.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Our solutions are designed to make everyday business operations
            easier, faster, and more organized.
          </p>

        </div>


        {/* FEATURES */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-xl">
              ⚡
            </div>

            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Faster Checkout
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Speed up billing and reduce waiting time with a modern POS
              experience.
            </p>
          </div>


          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-xl">
              📦
            </div>

            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Better Inventory
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Keep track of products, stock levels, prices and daily sales
              more efficiently.
            </p>
          </div>


          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-xl">
              🛠️
            </div>

            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Local Support
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Practical solutions and support designed around the needs of
              Sri Lankan businesses.
            </p>
          </div>

        </div>


        {/* TESTIMONIALS */}
        <div className="mt-16">

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Demo Testimonials
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              What our customers say
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Sample customer feedback layout. Replace these with verified
              customer testimonials when available.
            </p>

          </div>


          {/* REVIEW CARDS */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">

            {sampleReviews.map((review, index) => (
              <div
                key={index}
                className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                {/* Quote */}
                <div className="absolute right-6 top-6 text-slate-100">
                  <Quote size={42} />
                </div>


                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={17}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>


                {/* Review */}
                <p className="relative mt-5 text-sm leading-7 text-slate-600">
                  "{review.text}"
                </p>


                {/* User */}
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">

                  <img
                    src={review.image}
                    alt={review.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-emerald-50"
                  />

                  <div>
                    <p className="font-semibold text-slate-900">
                      {review.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {review.business}
                    </p>
                  </div>

                </div>

              </div>
            ))}

          </div>


          {/* GOOGLE REVIEW CTA */}
          <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row">

            <div>

              <div className="flex items-center gap-2">

                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <span className="font-semibold text-slate-900">
                  Google Reviews
                </span>

              </div>

              <p className="mt-2 text-sm text-slate-500">
                Have you worked with LIXTEQ? We'd love to hear your feedback.
              </p>

            </div>


            {/* Add your Google Review URL later */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Leave a Review
              <ExternalLink size={16} />
            </a>

          </div>

        </div>

      </div>
    </div>
  )
}