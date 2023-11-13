import React, { useEffect, useState } from 'react';

type SwitcherProps = {
  options: string[];
  onSwitchChange: (newOption: string, name?: string) => void;
  name?: string;
  value?: string | null;
};

const Switcher: React.FC<SwitcherProps> = ({
  options,
  onSwitchChange,
  name,
  value,
}) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  useEffect(() => {
    const index = options.findIndex(item => item === value);
    if (index !== -1) {
      setSelectedOption(options[index]);
    }
  }, [options]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSwitchChange(option, name);
  };

  return (
    <div className="flex justify-center bg-gray-200 rounded-md">
      {options.map(option => (
        <button
          key={option}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors 
                     ${
                       selectedOption === option
                         ? 'bg-blue-500 text-white'
                         : 'bg-gray-200 text-gray-800'
                     }`}
          onClick={() => handleOptionClick(option)}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Switcher;
