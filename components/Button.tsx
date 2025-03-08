"use client"
import React from 'react';

type ButtonType = 'primary' | 'secondary' | 'border';


type ButtonProps = {
    id?: string;
    type?: ButtonType;
    rounded?: boolean;
    onClick: () => void;
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ id, type = "primary", rounded, onClick, children }) => {
    const buttonClass = `${type}-button ${rounded ? 'rounded-full' : 'rounded-lg'}`;

    return (
        <button id={id} className={buttonClass} type="button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
