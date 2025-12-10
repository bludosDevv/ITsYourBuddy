import { useState } from 'react';
import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import ScriptingPage from '@/pages/ScriptingPage';
import AboutPage from '@/pages/AboutPage';
import BottomNav from '@/components/BottomNav';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="App min-h-screen relative">
      <Toaster position="top-right" richColors />
      <BrowserRouter>
        <div className="pb-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/scripting" element={<ScriptingPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <BottomNav />
      </BrowserRouter>
    </div>
  );
}

export default App;