import { useState } from 'react';
import downArrow from '../../assets/icons/down-arrow.svg';

interface AddSubscriptionButtonProps {
    title: string;
    services: Array<any>;
}

const AddSubscriptionButton: React.FC<AddSubscriptionButtonProps> = (props) => {
    const [dropDownActive, setDropDownActive] = useState(false);

    const showDropDown = () => {
        setDropDownActive(!dropDownActive);
    }

    return(
        <div className='flex flex-col gap-4'>
            <div className="bg-font_primary_white flex justify-between items-center py-2 px-4 shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px] rounded-[26px]" onClick={showDropDown}>
                <p>{props.title}</p>
                <img className='h-6 w-6' src={downArrow} alt="Arrow pointing down." />
            </div>
            {dropDownActive && (
            <div className='flex flex-col justify-start items-start gap-2.5'>
                {props.services.map((service, id) => (
                    <div className='flex justify-center items-center bg-font_primary_white py-2 px-4 shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px] rounded-[26px]' key={id}>
                        {service.name}
                    </div>
                ))}
            </div>
            )}
        </div>
    );
}

export default AddSubscriptionButton;