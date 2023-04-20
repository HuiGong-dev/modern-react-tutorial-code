import React, { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

const Dropdown = ({ options, value, onChange }) => {
  const [isHidden, setIsHidden] = useState(true);
  const icon = (
    <span className="text-xl">
      {isHidden ? <GoChevronLeft /> : <GoChevronDown />}
    </span>
  );
  const handleOptionClick = (option) => {
    setIsHidden(true);
    onChange(option);
  };
  const handleClick = () => {
    setIsHidden(!isHidden);
  };
  const renderedOptions = options.map((option) => (
    <div
      key={option.value}
      onClick={() => {
        handleOptionClick(option);
      }}
    >
      {option.label}
    </div>
  ));
  return (
    <div>
      <div className="flex" onClick={handleClick}>
        {value?.label || 'Select...'}
        {icon}
      </div>
      {!isHidden && renderedOptions}
    </div>
  );
};

export default Dropdown;
