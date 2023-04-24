import React, { useEffect, useState, useRef } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import Panel from './Panel';

const Dropdown = ({ options, value, onChange }) => {
  const [isHidden, setIsHidden] = useState(true);
  const divEl = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsHidden(true);
      }
    };
    document.addEventListener('click', handler, true);
    const cleanUp = () => {
      document.removeEventListener('click', handler);
    };
    return cleanUp;
  }, []);
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
      className="hover:bg-sky-100 rounded cursor-pointer px-2 py-1"
      key={option.value}
      onClick={() => {
        handleOptionClick(option);
      }}
    >
      {option.label}
    </div>
  ));
  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer "
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        {icon}
      </Panel>
      {!isHidden && (
        <Panel className="absolute top-full  p-2  ">{renderedOptions}</Panel>
      )}
    </div>
  );
};

export default Dropdown;
