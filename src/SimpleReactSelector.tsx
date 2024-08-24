import React, { useState } from 'react';
import './SimpleReactSelector.css';

interface Option {
  value: string;
  label: string;
}

type NullableSelectedOption = Option | null

interface SimpleReactSelectorProps {
  options: Option[];
  onChange: (selectedOption: NullableSelectedOption) => void;
  value?: NullableSelectedOption;
  placeholder?: string;
  id?: string;  
}

const SimpleReactSelector: React.FC<SimpleReactSelectorProps> = ({ options, onChange, value, placeholder, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<NullableSelectedOption>(value || null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className="custom-selector"  id={id}>
      <div className="custom-selector__selected" onClick={toggleDropdown}>
        {selected ? selected.label : placeholder}
      </div>
      {isOpen && (
        <ul className="custom-selector__options">
          {options.map(option => (
            <li
              key={option.value}
              className="custom-selector__option"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SimpleReactSelector;
