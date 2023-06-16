import React from 'react';
import '../stylesheets/Button.css';

function Button({text, ifClickButton, handleClick}){
    return (
        <button 
            className={ifClickButton ? 'click-button' : 'restart-button'}
            onClick={handleClick}
        >
            {text}
        </button>
    )
}

export default Button;