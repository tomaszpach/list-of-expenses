import React from 'react';

const Input = ({title, pattern, step, inputTitle, type, name, placeholder, onChange}) => {
    return (
        <label>
            <span>{title}</span>
            <input className="default" pattern={pattern} step={step} title={inputTitle} required type={type} name={name}
                   placeholder={placeholder} onChange={(e) => onChange(e)}/>
        </label>
    );
};

export default Input;
