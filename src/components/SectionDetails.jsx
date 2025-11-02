import React from 'react';
import { Gamepad2, Bot, Trophy, Brain, BookOpen, Target, Puzzle, BarChart3 } from 'lucide-react';

function Card({ id, icon, title, points }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <ul className="mt-4 space-y-2 text-slate-300">
          {points.map((p, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-indigo-400" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function SectionDetails() {
  return (
    <div className="relative bg-slate-950 py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-2">
        <Card
          id="play"
          icon={<Gamepad2 className="h-5 w-5 text-indigo-400" />}
          title="Play Online Games"
          points={[
            'Quick Pairing by time control: Bullet, Blitz, Rapid, Classical.',
            'Custom challenges: set time, increment, rated/unrated, and variants like Chess960.',
            'Play with friends via direct link or username invite.',
            'Versus Computer: pick color, time, and level 1–8 AI strength.',
          ]}
        />
        <Card
          id="tournaments"
          icon={<Trophy className="h-5 w-5 text-amber-400" />}
          title="Create and Join Tournaments"
          points={[
            'Arena tournaments: set duration, rated/unrated, custom name and description.',
            'Arena scoring favors activity and win streaks for bonus points.',
            'Swiss format: ideal for clubs or classes with fixed rounds.',
            'Browse and join public events any time.',
          ]}
        />
        <Card
          id="analysis"
          icon={<Brain className="h-5 w-5 text-pink-400" />}
          title="Analyze Games"
          points={[
            'Automatic Stockfish analysis after your game.',
            'Detect blunders, mistakes, inaccuracies with move-by-move evaluation.',
            'Experiment with what-if lines and variations on the analysis board.',
            'Dive deeper with Game Insights: accuracy, phases, and time usage.',
          ]}
        />
        <Card
          id="learn"
          icon={<BookOpen className="h-5 w-5 text-sky-400" />}
          title="Study Openings, Endgames, and Tactics"
          points={[
            'Opening Explorer: search master games, global database, or your own games.',
            'Endgame Training: interactive drills for essential theoretical endings.',
            'Tactics Trainer: themed puzzles (forks, pins, discovered attacks, etc.).',
            'Adaptive difficulty that scales with your performance.',
          ]}
        />
        <Card
          id="puzzles"
          icon={<Puzzle className="h-5 w-5 text-violet-400" />}
          title="Puzzle Section"
          points={[
            'Randomized puzzles tailored to your current rating.',
            'Select puzzle themes to target specific tactical patterns.',
            'Puzzle Storm: solve as many as possible within 3 minutes.',
            'Puzzle Racer: real-time races against others solving the same set.',
          ]}
        />
        <Card
          id="stats"
          icon={<BarChart3 className="h-5 w-5 text-emerald-400" />}
          title="Review Statistics & Rating Progress"
          points={[
            'View rating graphs across Bullet, Blitz, Rapid, and Classical.',
            'Check accuracy trends, win rate, streaks, and time spent per move.',
            'Browse complete game history with quick links to analysis.',
            'Spot strengths and weaknesses across opening, middlegame, and endgame.',
          ]}
        />
      </div>
    </div>
  );
}
