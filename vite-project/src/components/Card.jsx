// src/components/Card.jsx
import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800 
        shadow-lg rounded-xl 
        p-6 
        transition-shadow duration-300 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;