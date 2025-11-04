import React, { useState } from 'react';

const InputField = ({
  label,
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  autoComplete,
}) => {
  const [show, setShow] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={isPassword && show ? 'text' : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
        />
        {isPassword ? (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute inset-y-0 left-2 flex items-center text-sm text-blue-600 hover:text-blue-700"
            aria-label={show ? 'مخفی کردن رمز' : 'نمایش رمز'}
          >
            {show ? 'مخفی' : 'نمایش'}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default InputField;
