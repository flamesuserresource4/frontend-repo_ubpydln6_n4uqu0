import React from 'react';
import Spline from '@splinetool/react-spline';
import MusicHeader from './components/MusicHeader';
import LoginForm from './components/LoginForm';
import AudioVisualizer from './components/AudioVisualizer';
import AmbientNotes from './components/AmbientNotes';

function App() {
  return (
    <div dir="rtl" className="relative min-h-screen w-full overflow-hidden bg-neutral-950 text-white">
      {/* 3D animated dark cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle vignette and top gradient for readability (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-10">
        {/* Music aura around the card */}
        <div className="absolute -z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] rounded-full opacity-60 blur-3xl bg-[conic-gradient(at_50%_50%,#f472b6_0deg,#a78bfa_120deg,#60a5fa_240deg,#f472b6_360deg)] animate-pulse" aria-hidden />

        {/* Card */}
        <div className="relative w-full max-w-md">
          {/* Animated ring border (music vibe) */}
          <div className="pointer-events-none absolute -inset-[2px] rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,#f472b680,#a78bfab3,#60a5fa80,#f472b680)] blur-sm animate-[spin_10s_linear_infinite]" aria-hidden />

          <div className="relative rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="absolute inset-x-0 -top-12 h-24 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" aria-hidden />
            <div className="p-6 md:p-8">
              <MusicHeader />

              {/* Visualizer above the form to give a musical feel */}
              <div className="mb-6 flex items-center justify-center">
                <AudioVisualizer />
              </div>

              <LoginForm />
            </div>
          </div>
        </div>

        {/* Floating ambient musical notes */}
        <AmbientNotes />
      </div>
    </div>
  );
}

export default App;
