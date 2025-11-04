import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("ایمیل و رمز عبور را وارد کنید");
      return;
    }
    setLoading(true);
    try {
      // Fake delay to showcase animation
      await new Promise((r) => setTimeout(r, 900));
      alert(`خوش آمدید!\n${email}`);
    } catch (err) {
      setError("خطایی رخ داد");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label className="block text-sm text-white/80 mb-2">ایمیل</label>
        <div className="relative">
          <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400/60"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-white/80 mb-2">رمز عبور</label>
        <div className="relative">
          <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
          <input
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full pl-11 pr-12 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400/60"
          />
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {error && (
        <div className="text-rose-200 text-sm bg-rose-500/20 border border-rose-400/30 rounded-lg px-3 py-2">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-3 font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-500/10 focus:ring-white/40 disabled:opacity-70"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          ورود
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </span>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 group-hover:translate-x-0 transition-transform duration-700" />
      </button>

      <p className="text-center text-white/70 text-sm">
        حسابی ندارید؟
        <a href="#" className="text-white hover:underline mx-1">ثبت‌نام</a>
      </p>
    </form>
  );
}
