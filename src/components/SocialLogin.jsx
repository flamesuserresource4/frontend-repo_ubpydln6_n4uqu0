import React from 'react';

const providers = [
  { key: 'google', label: 'Google', color: 'bg-white text-gray-800 border border-gray-300', logo: () => (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.915 32.91 29.363 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C33.64 6.053 28.999 4 24 4 12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20c0-1.341-.138-2.651-.389-3.917z"/>
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.817C14.655 16.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C33.64 6.053 28.999 4 24 4 16.318 4 9.688 8.337 6.306 14.691z"/>
      <path fill="#4CAF50" d="M24 44c5.304 0 10.086-2.032 13.73-5.339l-6.331-5.359C29.363 36 24 36 24 36c-5.329 0-9.834-3.403-11.472-8.144l-6.58 5.066C8.311 39.556 15.548 44 24 44z"/>
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-1.086 3.182-3.384 5.862-6.395 7.298l.006-.004 6.331 5.359C33.106 42.076 36 43 36 43c7.18-4.146 11.636-11.852 11.636-20.333 0-1.341-.138-2.651-.389-3.917z"/>
    </svg>
  )},
  { key: 'github', label: 'GitHub', color: 'bg-gray-900 text-white', logo: () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.424 2.865 8.173 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.851.004 1.706.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.565 4.943.359.309.679.92.679 1.855 0 1.339-.013 2.419-.013 2.747 0 .268.18.58.688.481A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2z" clipRule="evenodd"/>
    </svg>
  )},
];

const SocialLogin = ({ onProviderClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {providers.map((p) => (
        <button
          key={p.key}
          type="button"
          onClick={() => onProviderClick?.(p.key)}
          className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium transition-colors hover:opacity-90 ${p.color}`}
          aria-label={`ورود با ${p.label}`}
        >
          <span className="h-5 w-5" aria-hidden="true">{p.logo()}</span>
          <span>ورود با {p.label}</span>
        </button>
      ))}
    </div>
  );
};

export default SocialLogin;
