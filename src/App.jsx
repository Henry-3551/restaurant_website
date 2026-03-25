import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingCTA from './components/ui/FloatingCTA'
import PageLoader from './components/ui/PageLoader'
import ScrollRestoration from './components/ScrollRestoration'
import ContactPage from './pages/Contact'
import ExperiencePage from './pages/Experience'
import HomePage from './pages/Home'
import NotFoundPage from './pages/NotFound'

const MenuPage = lazy(() => import('./pages/Menu'))
const ReservationsPage = lazy(() => import('./pages/Reservations'))

function App() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <div className="bg-[#040604] text-white">
        <Navbar />
        <main className="flex flex-col gap-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/menu"
              element={
                <Suspense fallback={<PageLoader label="Curating the menu..." />}>
                  <MenuPage />
                </Suspense>
              }
            />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route
              path="/reservations"
              element={
                <Suspense fallback={<PageLoader label="Preparing reservations..." />}>
                  <ReservationsPage />
                </Suspense>
              }
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <FloatingCTA />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
