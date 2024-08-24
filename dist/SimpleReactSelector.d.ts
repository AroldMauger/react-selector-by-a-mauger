import React from 'react';
import './SimpleReactSelector.css';
interface Option {
    value: string;
    label: string;
}
interface SimpleReactSelectorProps {
    options: Option[];
    onChange: (selectedOption: Option | null) => void;
    value?: Option | null;
    placeholder?: string;
    id?: string;
}
declare const SimpleReactSelector: React.FC<SimpleReactSelectorProps>;
export default SimpleReactSelector;
