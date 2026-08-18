import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp({
  phone = '94787777810',
  message = 'Hi! I would like to know more about your POS packages.',
}) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-green-500 text-black shadow-lg shadow-emerald-500/30 transition-transform duration-300 hover:scale-110 sm:bottom-8 sm:right-8"
      >
        {/* Outer pulse ring */}
        <span className="absolute inset-0 -z-10 rounded-full bg-emerald-400/50 animate-wa-ping" />

        {/* Periodic bump */}
        <span className="absolute inset-0 rounded-full animate-wa-bump" />

        <MessageCircle size={26} className="relative z-10" strokeWidth={2.4} />

        {/* Tooltip */}
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
          Chat with us
          <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-900" />
        </span>
      </a>

      {/* Scoped keyframes */}
      <style>{`
        @keyframes wa-bump {
          0%, 80%, 100% { transform: scale(1); }
          85% { transform: scale(1.12); }
          90% { transform: scale(0.96); }
          95% { transform: scale(1.05); }
        }
        .animate-wa-bump {
          animation: wa-bump 3.2s ease-in-out infinite;
        }

        @keyframes wa-ping {
          0% { transform: scale(1); opacity: 0.6; }
          80%, 100% { transform: scale(1.9); opacity: 0; }
        }
        .animate-wa-ping {
          animation: wa-ping 2.6s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </>
  )
}