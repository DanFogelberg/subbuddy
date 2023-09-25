interface ProfileButtonProps {
    title: string;
    image: string;
}

const ProfileButton = (props:ProfileButtonProps) => {
    return (
        <div className="bg-font_primary_white flex justify-between items-center rounded-[10px] w-full shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px] p-4">
            <p>{props.title}</p>
            <img className="w-[5px] h-2.5" src={props.image} alt="Icon of an arrow" />
        </div>
    );
}

export default ProfileButton;