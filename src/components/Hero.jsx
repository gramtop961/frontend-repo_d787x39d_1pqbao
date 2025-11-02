import React from 'react';
import Spline from '@splinetool/react-spline';
import { Gamepad2, Brain } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/UGnf9D1Hp3OG8vSG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, transparent 55%, rgba(2,6,23,0.75) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center sm:pt-28">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
          <Gamepad2 className="h-4 w-4" />
          Chess • Gaming • Education • Strategy
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          Master Chess with a Modern, Minimal Experience
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300 sm:text-lg">
          Explore how a top-tier free platform lets you play, train, and analyze like a pro. Dive into online matches, tournaments, engine analysis, studies, puzzles, and more.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
          >
            <Brain className="h-5 w-5" />
            Explore Features
          </a>
          <a
            href="#learn"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Learn & Train
          </a>
        </div>
      </div>
    </section>
  );
}
