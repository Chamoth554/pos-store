import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import Home from './pages/Home'
import Packages from './pages/Packages'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import OfflinePOS from './pages/solutions/OfflinePOS'
import CloudPOS from './pages/solutions/CloudPOS'
import CustomPOS from './pages/solutions/CustomPOS'
import FloatingWhatsApp from './components/common/FloatingWhatsApp'


export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased transition-colors duration-200">
          <Navbar />
          <ScrollToTop />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/packages/offline-pos" element={<OfflinePOS />} />
              <Route path="/packages/cloud-pos" element={<CloudPOS />} />
              <Route path="/packages/custom-pos" element={<CustomPOS />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}