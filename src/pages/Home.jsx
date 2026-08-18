import { useEffect } from 'react'
import Hero from '../components/home/Hero'
import Categories from '../components/home/Categories'
import FeaturedPackages from '../components/home/FeaturedPackages'
import BestSellers from '../components/home/BestSellers'
import WhyChooseUs from '../components/home/WhyChooseUs'
import BusinessSolutions from '../components/home/BusinessSolutions'
import SoftwareSection from '../components/home/SoftwareSection'
import CTASection from '../components/home/CTASection'
import SolutionsSection from '../components/home/SolutionsSection'

export default function Home() {
  useEffect(() => {
    document.title = 'LIXTEQ | Complete POS Solutions'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'Reliable POS hardware, complete billing systems and offline POS software for modern Sri Lankan businesses.')
    }
  }, [])

  return (
    <>
      <Hero />
      <Categories />
      <FeaturedPackages />
      <SolutionsSection />
      
      <WhyChooseUs />
      <BusinessSolutions />
      <SoftwareSection />
      <CTASection />
    </>
  )
}
