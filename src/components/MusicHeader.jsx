import { Music, Headphones } from "lucide-react";

export default function MusicHeader() {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="relative">
        <div className="absolute inset-0 rounded-xl blur-xl bg-gradient-to-tr from-pink-500/40 via-purple-500/40 to-indigo-500/40" />
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-3 shadow-lg">
          <Music className="w-7 h-7 text-white" />
        </div>
      </div>
      <div>
        <h1 className="text-white text-2xl font-semibold tracking-tight">
          Melody Login
        </h1>
        <p className="text-white/70 text-sm flex items-center gap-1">
          <Headphones className="w-4 h-4" />
          وارد حساب خود شوید و موسیقی را آغاز کنید
        </p>
      </div>
    </div>
  );
}
