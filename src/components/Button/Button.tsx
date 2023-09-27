import React from 'react';
import { MouseEventHandler } from 'react';

interface ButtonProps {
  title: string;
  clickFunction: Function;
  type?: 'button' | 'submit' | 'reset';
  backgroundColor: 'bg-button_primary_black' | 'bg-button_primary_orange';
}

const Button: React.FC<ButtonProps> = props => {
  return (
    <button
      className={`w-72 h-42 rounded-[26px] px-5 py-[7px] ${props.backgroundColor} hover:bg-button_primary_black_pressed text-font_primary_white font-semibold`}
      type={props.type}
      onClick={e => {
        e.preventDefault();
        props.clickFunction();
      }}
    >
      {props.title}
    </button>
  );
};

export default Button;
