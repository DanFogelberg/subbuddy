import { useState } from "react";

const SwitchIcon = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [switchPlacement, setSwitchPlacement] = useState("justify-start");

    const toggleSwitch = () => {
        setSwitchPlacement(isToggled ? "justify-end" : "justify-start");
        setIsToggled(!isToggled);
    }

    return (
        <div className={`${switchPlacement} transition-all flex items-center border-2 border-font_primary_black w-[30px] h-[17px] rounded-[13px] p-[1px]`} onClick={toggleSwitch}>
            <div className="bg-font_primary_black w-[11px] h-[11px] rounded-[50%]"></div>
        </div>
    );
}

export default SwitchIcon;