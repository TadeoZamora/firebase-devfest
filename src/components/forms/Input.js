import React from 'react';

const InputForm = ({type,name,placeholder,onChange,className,value}) => {
    return (
        <input type={type} name ={name} placeholder={placeholder} onChange={onChange} className={className} value={value}/>
    );
};

export default InputForm;