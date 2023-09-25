import SettingsButton from "../SettingsButton/SettingsButton";
import pencilIcon from "../../assets/icons/pencil-icon.svg";

interface ProfileSettingsContainer {
    currentEmail: string;
    currentPassword: string;
}

const ProfileSettingsContainer = (props:ProfileSettingsContainer) => {
    return (
        <section className="flex flex-col gap-8 w-full items-center">
            <h3>Profil</h3>
            <div className="flex flex-col gap-4 w-full">
                <h4 className="self-start">Email</h4>
                <SettingsButton title={props.currentEmail} image={pencilIcon}/>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <h4 className="self-start">Lösenord</h4>
                <SettingsButton title={props.currentPassword} image={pencilIcon}/>
            </div>
        </section>
    );
}

export default ProfileSettingsContainer;