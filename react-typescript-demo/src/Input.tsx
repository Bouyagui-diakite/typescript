import React from 'react';

type InputPropos = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({value, handleChange}: InputPropos) => {
    return (
        <input type="text" value={value} onChange={handleChange} />

    );
};

export default Input;