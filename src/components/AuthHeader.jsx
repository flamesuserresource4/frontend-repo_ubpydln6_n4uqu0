import React from 'react';

const AuthHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center space-y-2">
      <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">{title}</h1>
      {subtitle ? (
        <p className="text-sm md:text-base text-gray-600">{subtitle}</p>
      ) : null}
    </div>
  );
};

export default AuthHeader;
