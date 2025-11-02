import React from 'react';
import Hero from './components/Hero';
import FeatureHighlights from './components/FeatureHighlights';
import SectionDetails from './components/SectionDetails';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-indigo-500" />
            <span className="font-semibold">Chess Guide</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#play" className="hover:text-white">Play</a>
            <a href="#tournaments" className="hover:text-white">Tournaments</a>
            <a href="#analysis" className="hover:text-white">Analysis</a>
            <a href="#learn" className="hover:text-white">Learn</a>
            <a href="#puzzles" className="hover:text-white">Puzzles</a>
            <a href="#stats" className="hover:text-white">Stats</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <FeatureHighlights />
        <SectionDetails />
        <FooterCTA />
      </main>
    </div>
  );
}

export default App;
