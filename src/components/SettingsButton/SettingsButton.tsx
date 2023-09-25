interface SettingsButtonProps {
    title: string;
    image: string;
    setView?: Function;
    }

const SettingsButton = (props:SettingsButtonProps) => {
    return (
        <div className="bg-font_primary_white flex justify-between items-center rounded-[10px] w-full shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px] p-4" onClick={() => props.setView && props.setView()}>
            <p>{props.title}</p>
            <img src={props.image} alt="Icon of an arrow" />
        </div>
    );
}

export default SettingsButton;