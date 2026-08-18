import { useEffect, useState } from 'react'
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact | LIXTEQ'
  }, [])

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setStatus('')

    // =====================================================
    // EMAILJS - ENABLE THIS LATER
    // When you get the EmailJS details, uncomment this.
    // =====================================================

    /*
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        'YOUR_PUBLIC_KEY'
      )

      setStatus('success')

      setForm({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    } catch (error) {
      console.error('Email sending failed:', error)
      setStatus('error')
    } finally {
      setLoading(false)
    }

    return
    */

    // =====================================================
    // TEMPORARY DEMO SUBMISSION
    // This will be replaced with EmailJS later.
    // =====================================================

    setTimeout(() => {
      console.log('================================')
      console.log('       LIXTEQ CONTACT FORM')
      console.log('================================')
      console.log('Name:', form.name)
      console.log('Email:', form.email)
      console.log('Phone:', form.phone)
      console.log('Message:', form.message)
      console.log('================================')

      setStatus('success')

      setForm({
        name: '',
        email: '',
        phone: '',
        message: '',
      })

      setLoading(false)
    }, 800)
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            PAGE HEADER
        ========================== */}
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Contact
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Talk to our team
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Have a question about LIXTEQ? Send us a message and our team
            will get back to you shortly.
          </p>
        </div>

        {/* =========================
            CONTACT CARDS
        ========================== */}
        <div className="grid gap-6 md:grid-cols-3">

  {/* Phone */}
  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50">
      <Phone
        size={22}
        className="text-emerald-600"
      />
    </div>

    <h2 className="mt-4 text-xl font-semibold text-slate-900">
      Phone
    </h2>

    <a
      href="tel:+94787777810"
      className="mt-2 block !text-slate-600 transition hover:!text-emerald-600"
    >
      +94 78 777 7810
    </a>

  </div>


  {/* Email */}
  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50">
      <Mail
        size={22}
        className="text-emerald-600"
      />
    </div>

    <h2 className="mt-4 text-xl font-semibold text-slate-900">
      Email
    </h2>

    <a
      href="mailto:info@lixteq.com"
      className="mt-2 block !text-slate-600 transition hover:!text-emerald-600"
    >
      info@lixteq.com
    </a>

  </div>


  {/* WhatsApp */}
  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50">
      <MessageCircle
        size={22}
        className="text-emerald-600"
      />
    </div>

    <h2 className="mt-4 text-xl font-semibold text-slate-900">
      WhatsApp
    </h2>

    <a
      href="https://wa.me/94787777810"
      target="_blank"
      rel="noreferrer"
      className="mt-2 block !text-slate-600 transition hover:!text-emerald-600"
    >
      078 777 7810
    </a>

  </div>

</div>

        {/* =========================
            FORM + LOCATION
        ========================== */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">

          {/* =========================
              CONTACT FORM
          ========================== */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-2">

            <div className="mb-7">
              <h2 className="text-2xl font-bold text-slate-900">
                Send us a message
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Fill out the form below and our team will get back to you.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/10"
                  />
                </div>

              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+94 78 777 7810"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/10"
                />
              </div>

              {/* Success Message */}
              {status === 'success' && (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                  ✓ Your message has been sent successfully. We'll contact
                  you soon.
                </div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  Something went wrong. Please try again.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                <Send size={17} />

                {loading ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          </div>

          {/* =========================
              LOCATION CARD
          ========================== */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-center gap-3 text-slate-900">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
                <MapPin
                  size={21}
                  className="text-emerald-600"
                />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Our Location
                </p>

                <p className="font-semibold">
                  Colombo, Sri Lanka
                </p>
              </div>

            </div>

            {/* Location Placeholder */}
            <div className="mt-6 flex min-h-[220px] items-center justify-center rounded-2xl bg-slate-100 p-6 text-center">

              <div>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                  <MapPin
                    size={28}
                    className="text-emerald-600"
                  />
                </div>

                <p className="mt-4 font-semibold text-slate-800">
                  Colombo, Sri Lanka
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  LIXTEQ
                </p>
              </div>

            </div>

            {/* Contact Details */}
            <div className="mt-6 space-y-4 text-sm text-slate-600">

              <a
                href="tel:+94787777810"
                className="flex items-center gap-3 transition hover:text-emerald-600"
              >
                <Phone
                  size={17}
                  className="shrink-0"
                />

                <span>
                  +94 78 777 7810
                </span>
              </a>

              <a
                href="mailto:info@lixteq.com"
                className="flex items-center gap-3 transition hover:text-emerald-600"
              >
                <Mail
                  size={17}
                  className="shrink-0"
                />

                <span>
                  info@lixteq.com
                </span>
              </a>

              <a
                href="https://wa.me/94787777810"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition hover:text-emerald-600"
              >
                <MessageCircle
                  size={17}
                  className="shrink-0"
                />

                <span>
                  WhatsApp
                </span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}