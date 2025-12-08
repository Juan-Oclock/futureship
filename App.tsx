import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'));

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white font-sans text-slate-800">
      <ScrollToTop />
      
      {/* Sticky Footer - positioned behind main content */}
      <div className="fixed bottom-0 left-0 right-0 z-0">
        <Footer />
      </div>
      
      {/* Main content wrapper - sits above footer */}
      <div className="relative z-10 flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </Suspense>
        </main>
      </div>
      
      {/* Spacer for footer reveal - this creates the gap for the sticky footer */}
      <div className="h-[480px] md:h-[420px] bg-stone-100"></div>
    </div>
  );
};

export default App;