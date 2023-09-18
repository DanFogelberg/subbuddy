import React from 'react';
import { MouseEventHandler } from 'react';

interface ButtonProps {
    title: string;
    clickFunction: Function;
    type?: "button" | "submit" | "reset"
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button className={`w-72 h-42 rounded-[26px] px-5 py-[7px] bg-button_primary_black hover:bg-button_primary_black_pressed text-font_primary_white`} type={props.type} onClick = {(e) => {e.preventDefault(); props.clickFunction()}}>{props.title}</button>
    );
};

export default Button;
