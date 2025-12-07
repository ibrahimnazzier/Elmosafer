import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Flights from './pages/Flights';
import Packages from './pages/Packages';
import Visa from './pages/Visa';
import Activities from './pages/Activities';

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/visa" element={<Visa />} />
            <Route path="/activities" element={<Activities />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;