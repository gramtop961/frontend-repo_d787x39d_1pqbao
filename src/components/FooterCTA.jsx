import React from 'react';
import { Gamepad2 } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer className="bg-slate-950 pb-16 pt-10 text-white">
      <div className="mx-auto max-w-6xl space-y-6 px-6 text-center">
        <h3 className="text-2xl font-semibold">Ready to play and learn?</h3>
        <p className="mx-auto max-w-2xl text-slate-300">
          Jump into fast matchmaking, challenge friends, train endgames, and analyze your games with a powerful engine—all in one clean, focused interface.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a
            href="#play"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
          >
            <Gamepad2 className="h-5 w-5" />
            Start Playing
          </a>
          <a
            href="#learn"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Explore Training
          </a>
        </div>
        <p className="pt-4 text-xs text-slate-500">
          This educational page summarizes key features inspired by a leading free chess platform.
        </p>
      </div>
    </footer>
  );
}
