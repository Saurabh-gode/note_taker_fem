"use client"
import React from 'react';

type ButtonType = 'primary' | 'secondary' | 'border' | 'neutral';


type ButtonProps = {
    id?: string;
    type?: ButtonType;
    rounded?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ id, type = "primary", rounded, onClick, children }) => {
    const buttonClass = `${type}-button ${rounded ? 'rounded-full' : 'rounded-lg'}`;

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onClick(event);
    }

    return (
        <button id={id} className={buttonClass} type="button" onClick={clickHandler}>
            {children}
        </button>
    );
};

export default Button;
