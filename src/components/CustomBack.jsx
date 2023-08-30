import React from 'react';

function CustomBack() {
  const handleClick = () => {
    window.history.back();
  };

  return (
    <button onClick={handleClick}>Back</button>
  );
}

export default CustomBack;
