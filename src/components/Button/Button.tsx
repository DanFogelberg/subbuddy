import React from 'react';
import { MouseEventHandler } from 'react';

interface ButtonProps {
  title: string;
  clickFunction: Function;
  type?: 'button' | 'submit' | 'reset';
  backgroundColor: 'bg-button_primary_black' | 'bg-button_primary_orange';
  darkBackgroundColor?: 'bg-button_primary_orange' |
  'bg-widget_primary_black';
  fontColor: 'text-font_primary_black' | 
  'text-font_primary_white';
}

const Button: React.FC<ButtonProps> = props => {
  return (
    <button
      className={`w-72 h-42 max-w-full rounded-[26px] px-5 py-[7px] ${props.backgroundColor} ${props.fontColor} shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px] hover:bg-button_primary_black_pressed font-semibold dark:${props.darkBackgroundColor}`}
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
