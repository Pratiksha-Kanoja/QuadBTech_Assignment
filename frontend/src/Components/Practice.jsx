import React, { useState, useEffect } from 'react';

const Practice = () => {
  // State to manage the toggle state of the switch
  const [isChecked, setIsChecked] = useState(false);

  // Handler function to toggle the state when the switch is clicked
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      {/* Input checkbox controlled by the state */}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      {/* Text indicating the state of the switch */}
      {isChecked ? 'Switch is ON' : 'Switch is OFF'}
    </label>
  );

};

export default Practice;


