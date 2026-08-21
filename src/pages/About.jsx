import { useEffect } from 'react'
import {
  Star,
  Quote,
  ExternalLink,
  Zap,
  Package,
  Headphones,
  ShieldCheck,
  Store,
} from 'lucide-react'

import logo from '../assets/lixteq-pos-logo.png'

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
    <div className="min-h-screen bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            ABOUT / BRAND HERO
        ===================================================== */}
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">

          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-emerald-50 blur-3xl" />

          <div className="relative grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:p-12">

            {/* LEFT CONTENT */}
            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                  About LIXTEQ
                </span>
              </div>

              <h1 className="mt-5 max-w-2xl text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Built for Sri Lankan businesses.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                LIXTEQ provides trusted POS hardware, complete retail systems,
                and practical software for modern Sri Lankan shops,
                supermarkets, restaurants, pharmacies, and service businesses.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                We help businesses improve checkout speed, inventory handling,
                customer service, and day-to-day operations with reliable
                systems designed around local business needs.
              </p>

              {/* Small trust points */}
              <div className="mt-7 flex flex-wrap gap-3">

                <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5">
                  <ShieldCheck
                    size={17}
                    className="text-emerald-600"
                  />

                  <span className="text-sm font-semibold text-slate-700">
                    Reliable Systems
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5">
                  <Store
                    size={17}
                    className="text-emerald-600"
                  />

                  <span className="text-sm font-semibold text-slate-700">
                    Retail Ready
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5">
                  <Headphones
                    size={17}
                    className="text-emerald-600"
                  />

                  <span className="text-sm font-semibold text-slate-700">
                    Local Support
                  </span>
                </div>

              </div>
            </div>


            {/* RIGHT LOGO CARD */}
            <div className="relative">

              <div className="relative mx-auto flex min-h-[260px] max-w-md items-center justify-center overflow-hidden rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-8 shadow-2xl">

                {/* Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-emerald-400/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-emerald-500/10 blur-3xl" />

                {/* Glass inner card */}
                <div className="relative flex w-full items-center justify-center rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">

                  <img
                    src={logo}
                    alt="LIXTEQ POS"
                    className="
                      relative
                      z-10
                      h-auto
                      w-full
                      max-w-[270px]
                      object-contain
                      drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                      transition-transform
                      duration-500
                      hover:scale-[1.03]
                    "
                  />

                </div>

                {/* Bottom badge */}
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                  <span className="whitespace-nowrap text-xs font-semibold text-white/80">
                    Smart POS Solutions
                  </span>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            WHY LIXTEQ
        ===================================================== */}
        <section className="mt-16">

          <div className="text-center">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              Why LIXTEQ
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">
              Simple. Reliable. Business-ready.
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Our solutions are designed to make everyday business operations
              easier, faster, and more organized.
            </p>

          </div>


          {/* FEATURES */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">

            {/* Faster Checkout */}
            <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                <Zap size={22} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Faster Checkout
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Speed up billing and reduce waiting time with a modern POS
                experience built for busy businesses.
              </p>

            </div>


            {/* Better Inventory */}
            <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                <Package size={22} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Better Inventory
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Keep track of products, stock levels, prices and daily sales
                more efficiently.
              </p>

            </div>


            {/* Local Support */}
            <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                <Headphones size={22} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Local Support
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Practical solutions and support designed around the needs of
                Sri Lankan businesses.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            TESTIMONIALS
        ===================================================== */}
        <section className="mt-16">

          <div className="text-center">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              Demo Testimonials
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">
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
                className="
                  relative
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
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


          {/* ===================================================
              GOOGLE REVIEW CTA
          =================================================== */}
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
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-emerald-600
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-emerald-700
                hover:shadow-lg
              "
            >
              Leave a Review
              <ExternalLink size={16} />
            </a>

          </div>

        </section>

      </div>
    </div>
  )
}