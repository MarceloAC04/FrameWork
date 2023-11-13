import React from 'react';
import './FormComponents.css'

export const Input = ( {
    type, 
    id, 
    value, 
    required, 
    additionalClass,
    name,
    placeholder,
    manipulationFunction
 }) => {
    return(
        <input 
        type={type} 
        id={id}
        name={name}
        value={value}
        required={required ? "required" : ""}
        placeholder={placeholder}
        className={`input-component ${additionalClass}`}
        onChange={manipulationFunction}
        autoComplete='off'
        />
    )
};

export const Label = ( {
    htmlFor,
    labelText

}) => {
    return(
        <label htmlFor={htmlFor}>{labelText}</label>
    )
};

export const Button = ( {
    name,
    id,
    textButton,
    type,
    additionalClass,
    manipulationFunction
}) => {
    return(
        <Button
        id={id}
        name={name}
        type={type}
        className={additionalClass}
        onClick={manipulationFunction}
        >
            {textButton}
        </Button>
    )
};

export const Select = ( {
    id, 
    options, 
    required, 
    additionalClass,
    name,
    defaultValue,
    manipulationFunction
}) => {
    return(
        <select name={name} 
                id={id}
                required={required}
                className={`input-component ${additionalClass}`}
                onChange={manipulationFunction}
                value={defaultValue}
        >
            <option value="">Tipo Evento</option>
            {options.map( (o) => {
                return (
                    <option key={Math.random()} value={o.value}>{o.text}</option>
                );
            })}
        </select>
    )
};