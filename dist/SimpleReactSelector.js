import React, { useState } from 'react';
import './SimpleReactSelector.css';
var SimpleReactSelector = function (_a) {
    var options = _a.options, onChange = _a.onChange, value = _a.value, placeholder = _a.placeholder, id = _a.id;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(value || null), selected = _c[0], setSelected = _c[1];
    var toggleDropdown = function () { return setIsOpen(!isOpen); };
    var handleOptionClick = function (option) {
        setSelected(option);
        setIsOpen(false);
        onChange(option);
    };
    return (React.createElement("div", { className: "custom-selector", id: id },
        React.createElement("div", { className: "custom-selector__selected", onClick: toggleDropdown }, selected ? selected.label : placeholder),
        isOpen && (React.createElement("ul", { className: "custom-selector__options" }, options.map(function (option) { return (React.createElement("li", { key: option.value, className: "custom-selector__option", onClick: function () { return handleOptionClick(option); } }, option.label)); })))));
};
export default SimpleReactSelector;
