import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BottomNavigation from './components/BottomNavigation';
import Home from './pages/Home';
import Detection from './pages/Detection';
import Diseases from './pages/Diseases';
import Stores from './pages/Stores';
import Results from './pages/Results';
import { DetectionResult } from './types';

function App() {
  const [detectionResult, setDetectionResult] = useState<DetectionResult | null>(null);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        <Header />
        <main className="container mx-auto px-4 py-8 pb-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/detection" 
              element={<Detection setDetectionResult={setDetectionResult} />} 
            />
            <Route path="/diseases" element={<Diseases />} />
            <Route path="/stores" element={<Stores />} />
            <Route 
              path="/results" 
              element={<Results detectionResult={detectionResult} />} 
            />
          </Routes>
        </main>
        <BottomNavigation />
      </div>
    </Router>
  );
}

export default App;