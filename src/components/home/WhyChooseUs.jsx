import { Award, ShieldCheck, HardDrive, Headphones } from 'lucide-react'

const features = [
  { title: 'Complete Solutions', description: 'Integrated hardware and software packages for stores of every size.', icon: Award },
  { title: 'Quality Hardware', description: 'Tested devices and reliable components for daily business use.', icon: HardDrive },
  { title: 'Offline POS Software', description: 'Works smoothly even without a stable internet connection.', icon: ShieldCheck },
  { title: 'Local Support', description: 'Real help before and after installation for Sri Lankan businesses.', icon: Headphones },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Why choose us</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Why Choose POS MART</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
