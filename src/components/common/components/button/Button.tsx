import React from 'react';
import stButton from './Button.module.scss'

export type ButtonPropsType = {

}

const Button = ({}: ButtonPropsType) => {
    return (
        <div className={stButton.componentButton}>
            <button></button>
        </div>
    );
};

export default Button;