import React from 'react';

const FormFooter = ({
  loading,
  onSubmit,
  onForgot,
}) => {
  return (
    <div className="space-y-3">
      <button
        type="submit"
        onClick={onSubmit}
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 py-2.5 text-white font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? 'در حال ورود...' : 'ورود'}
      </button>
      <button
        type="button"
        onClick={onForgot}
        className="w-full text-center text-sm text-blue-700 hover:text-blue-800"
      >
        رمز عبور را فراموش کرده‌اید؟
      </button>
    </div>
  );
};

export default FormFooter;
