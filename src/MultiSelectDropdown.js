import React, { useState, useEffect } from "react";

const MultiSelectDropdown = ({ options, value, readonly }) => {
    const [selectedValues, setSelectedValues] = useState(value);
    const [selectedText, setSelectedText] = useState("");

    const handleCheckboxChange = (optionValue) => {
        if (readonly) {
            return; // Do nothing if the dropdown is readonly
        }

        if (selectedValues.includes(optionValue)) {
            // Deselect the option if it's already selected
            setSelectedValues(selectedValues.filter((val) => val !== optionValue));
        } else {
            // Select the option if it's not selected
            setSelectedValues([...selectedValues, optionValue]);
        }
    };
    useEffect(() => {
        if (!readonly) {
            setSelectedValues([]); // Clear selected values when readonly is false
        } else {
            setSelectedValues(value);
        }
    }, [readonly, value]);
    useEffect(() => {
        setSelectedText(selectedValues.join(", "));
    }, [selectedValues]);
    return (
        <div className="border-2 p-4 rounded-md">
            <div>
                <input
                    type="text"
                    placeholder="e.g Australia"
                    value={selectedText}
                    onChange={(e) => setSelectedText(e.target.value)}
                    className='border-b-2 border-gray-500 p-1 outline-none'
                />
            </div>
            <div className="max-h-40 overflow-y-auto">
            {options.map((option,index) => (
                <div key={index} className='py-1 text-xl flex justify-start items-center'>
                    <input
                        type="checkbox"
                        value={option.value}
                        checked={selectedValues.includes(option.value)}
                        onChange={() => handleCheckboxChange(option.value)}
                        disabled={readonly}
                        className="h-5 w-5"
                    />
                    <span className="mx-2">{option.label}</span>
                </div>
            ))}
            </div>
        </div>
    );
};

export default MultiSelectDropdown;
