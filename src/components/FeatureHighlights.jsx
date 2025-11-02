import React from 'react';
import { Gamepad2, Bot, Trophy, Brain, BookOpen, Puzzle, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <Gamepad2 className="h-5 w-5 text-indigo-400" />,
    title: 'Play Online Games',
    desc: 'Quick pairing, custom challenges, and play with friends in multiple time controls.',
    anchor: '#play',
  },
  {
    icon: <Bot className="h-5 w-5 text-teal-400" />,
    title: 'Play vs Computer',
    desc: 'Adjustable AI strength from level 1–8 with your choice of color and pace.',
    anchor: '#play',
  },
  {
    icon: <Trophy className="h-5 w-5 text-amber-400" />,
    title: 'Tournaments',
    desc: 'Create or join Arena and Swiss formats with flexible settings and scoring.',
    anchor: '#tournaments',
  },
  {
    icon: <Brain className="h-5 w-5 text-pink-400" />,
    title: 'Engine Analysis',
    desc: 'Post-game evaluations: blunders, mistakes, inaccuracies, and what-if lines.',
    anchor: '#analysis',
  },
  {
    icon: <BookOpen className="h-5 w-5 text-sky-400" />,
    title: 'Learning Tools',
    desc: 'Opening explorer, endgame practice, and guided lessons to build technique.',
    anchor: '#learn',
  },
  {
    icon: <Puzzle className="h-5 w-5 text-violet-400" />,
    title: 'Puzzles & Modes',
    desc: 'Themes, adaptive difficulty, Puzzle Storm, and live Puzzle Racer.',
    anchor: '#puzzles',
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-emerald-400" />,
    title: 'Stats & Ratings',
    desc: 'Track accuracy, streaks, time usage, and rating progress across controls.',
    anchor: '#stats',
  },
];

export default function FeatureHighlights() {
  return (
    <section id="features" className="relative bg-slate-900 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Everything you need to play and improve</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">
          A concise overview of the core areas—jump into what matters most to you.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <a
              key={f.title}
              href={f.anchor}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
              <span className="mt-3 inline-block text-xs font-semibold text-indigo-300 opacity-0 transition group-hover:opacity-100">
                Learn more →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
