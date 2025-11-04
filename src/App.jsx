import React, { useState } from 'react';
import AuthHeader from './components/AuthHeader';
import InputField from './components/InputField';
import SocialLogin from './components/SocialLogin';
import FormFooter from './components/FormFooter';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const validate = () => {
    if (!email || !password) return 'لطفاً همه فیلدها را تکمیل کنید.';
    const emailOk = /\S+@\S+\.\S+/.test(email);
    if (!emailOk) return 'ایمیل معتبر وارد کنید.';
    if (password.length < 6) return 'رمز عبور باید حداقل ۶ کاراکتر باشد.';
    return null;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault?.();
    setMessage(null);
    const err = validate();
    if (err) {
      setMessage({ type: 'error', text: err });
      return;
    }
    try {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 900));
      setMessage({ type: 'success', text: 'با موفقیت وارد شدید! 🎉' });
    } catch (error) {
      setMessage({ type: 'error', text: 'خطا در ورود. دوباره تلاش کنید.' });
    } finally {
      setLoading(false);
    }
  };

  const handleProvider = (provider) => {
    setMessage({ type: 'info', text: `ورود با ${provider} هنوز متصل نشده است.` });
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
          <AuthHeader title="ورود به حساب کاربری" subtitle="خوش آمدید! لطفاً اطلاعات خود را وارد کنید." />

          {message ? (
            <div
              className={`mt-4 rounded-lg px-4 py-2 text-sm border ${
                message.type === 'success'
                  ? 'bg-green-50 text-green-800 border-green-200'
                  : message.type === 'error'
                  ? 'bg-red-50 text-red-800 border-red-200'
                  : 'bg-amber-50 text-amber-800 border-amber-200'
              }`}
            >
              {message.text}
            </div>
          ) : null}

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <InputField
              label="ایمیل"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <InputField
              label="رمز عبور"
              name="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />

            <div className="flex items-center justify-between text-sm select-none">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">مرا به خاطر بسپار</span>
              </label>
              <button type="button" className="text-blue-700 hover:text-blue-800" onClick={() => setMessage({ type: 'info', text: 'لینک بازیابی رمز برای شما ارسال شد (نمونه).' })}>
                فراموشی رمز؟
              </button>
            </div>

            <FormFooter loading={loading} onSubmit={handleSubmit} onForgot={() => setMessage({ type: 'info', text: 'لطفاً ایمیل خود را بررسی کنید.' })} />

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-3 text-xs text-gray-500">یا</span>
              </div>
            </div>

            <SocialLogin onProviderClick={handleProvider} />
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          با ورود شما، شرایط استفاده و سیاست حفظ حریم خصوصی را می‌پذیرید.
        </p>
      </div>
    </div>
  );
}

export default App;
