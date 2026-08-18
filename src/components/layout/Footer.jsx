import { Camera, Globe, MessageCircle, Mail, MapPin, Phone, Clock, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'POS Packages', to: '/packages' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const categories = ['Desktop PCs', 'Barcode Scanners', 'Thermal Printers', 'Cash Drawers', 'POS Software']

const socials = [
  { name: 'Facebook', href: 'https://facebook.com', icon: Globe },
  { name: 'Instagram', href: 'https://instagram.com', icon: Camera },
  { name: 'TikTok', href: 'https://tiktok.com', icon: Music2 },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-5">
          <div className="xl:col-span-2">
            <Link to="/" className="text-2xl font-black tracking-tight text-white">
              LIXTEQ
            </Link>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              Complete POS solutions for modern businesses.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="transition hover:text-emerald-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Categories</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Customer Support</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2"><MessageCircle size={15} className="text-emerald-400" /> WhatsApp</li>
              <li className="flex items-center gap-2"><Phone size={15} className="text-emerald-400" /> +94 78 777 7810</li>
              <li className="flex items-center gap-2"><Mail size={15} className="text-emerald-400" /> info@lixteq.com</li>
              <li className="flex items-center gap-2"><Clock size={15} className="text-emerald-400" /> Business Hours</li>
              <li className="flex items-center gap-2"><MapPin size={15} className="text-emerald-400" /> Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-slate-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">© 2026 LIXTEQ. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {socials.map(({ name, href, icon: Icon }) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-emerald-500 hover:text-emerald-400" aria-label={name}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
