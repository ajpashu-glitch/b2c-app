import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Learn from './pages/Learn'
import SubjectPage from './pages/SubjectPage'
import SkillCheck from './pages/SkillCheck'
import Awards from './pages/Awards'
import Membership from './pages/Membership'
import GrownUps from './pages/GrownUps'
import Auth from './pages/Auth'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:border focus:border-line focus:bg-sunshine-500 focus:px-5 focus:py-2 focus:font-display focus:font-bold"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/:subjectId" element={<SubjectPage />} />
          <Route path="/skill-check" element={<SkillCheck />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/grown-ups" element={<GrownUps />} />
          <Route path="/sign-in" element={<Auth mode="sign-in" />} />
          <Route path="/join" element={<Auth mode="join" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
