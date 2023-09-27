import { Component, useState } from 'react';
import downArrow from '../../assets/icons/down-arrow.svg';

interface AddSubscriptionButtonProps {
  title: string;
  component: React.ReactNode;
}

const AddSubscriptionButton: React.FC<AddSubscriptionButtonProps> = props => {
  const [dropDownActive, setDropDownActive] = useState(false);

  const showDropDown = () => {
    setDropDownActive(!dropDownActive);
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        className="bg-widget_primary_white flex justify-between items-center py-2 px-4 shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px] rounded-[26px] dark:bg-widget_primary_black"
        onClick={showDropDown}
      >
        <p>{props.title}</p>
        <img
          className="h-[5px] w-2.5 dark:invert"
          src={downArrow}
          alt="Arrow pointing down."
        />
      </div>
      {dropDownActive && props.component}
    </div>
  );
};

export default AddSubscriptionButton;
