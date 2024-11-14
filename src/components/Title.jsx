import React from 'react';

const Title = ({ children }) => {
  return (
    <h1 className="text-4xl font-display font-bold text-center text-primary my-4 stroke-current text-stroke-2">
      {children}
    </h1>
  );
};

export default Title;