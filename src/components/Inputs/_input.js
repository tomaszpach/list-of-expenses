import React from 'react';

const Input = ({title, value, pattern, refe, step, inputTitle, type, name, placeholder, autoFocus, onChange}) => {
    return (
        <label>
            <span>{title}</span>
            <input className="default"
                   value={value}
                   ref={refe}
                   pattern={pattern}
                   step={step}
                   title={inputTitle}
                   type={type}
                   name={name}
                   placeholder={placeholder}
                   onChange={(e) => onChange(e)}
                   autoFocus={autoFocus}
                   required
            />
        </label>
    );
};

export default Input;
