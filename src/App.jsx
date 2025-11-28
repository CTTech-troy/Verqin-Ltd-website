import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Header  from './components/layout/Header';
import  Footer  from './components/layout/Footer';
import AnimatedRoutes from './components/layout/AnimatedRoutes';
import  Home  from './pages/Home';
import  About  from './pages/About';
import  Services  from './pages/Services';
import  ForEmployers  from './pages/ForEmployers';
import  ForCandidates  from './pages/ForCandidates';
import  Apply  from './pages/Apply';
import  DiversityQuestionnaire  from './pages/DiversityQuestionnaire';
import  Contact  from './pages/Contact';
import  PrivacyPolicy  from './pages/PrivacyPolicy';
import  Terms  from './pages/Terms';
import { Preloader } from './components/ui/Preloader';
function App() {
  const [showLoader, setShowLoader] = useState(true);

  return <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-white">
        {showLoader ? (
          <Preloader onComplete={() => setShowLoader(false)} />
        ) : (
          <>
            <Header />
            <main className="flex-1">
              <AnimatedRoutes>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/for-employers" element={<ForEmployers />} />
                  <Route path="/for-candidates" element={<ForCandidates />} />
                  <Route path="/apply" element={<Apply />} />
                  <Route path="/diversity-questionnaire" element={<DiversityQuestionnaire />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<Terms />} />
                </Routes>
              </AnimatedRoutes>
            </main>
            <Footer />
          </>
        )}
      </div>
    </BrowserRouter>;
}

export default App;