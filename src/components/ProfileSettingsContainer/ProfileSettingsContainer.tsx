import SettingsButton from "../SettingsButton/SettingsButton";
import pencilIcon from "../../assets/icons/pencil-icon.svg";
import Button from "../Button/Button";

interface ProfileSettingsContainer {
    currentEmail: string;
    currentPassword: string;
}

const ProfileSettingsContainer = (props:ProfileSettingsContainer) => {

    const saveChanges = () => {
        console.log('Ändringar sparade!');
    }


    return (
        <section className="flex flex-col gap-8 w-full items-center">
            <h3>Profil</h3>
            <div className="flex flex-col gap-4 w-full">
                <h4 className="self-start">Email</h4>
                <SettingsButton title={props.currentEmail} indicator={pencilIcon}/>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <h4 className="self-start">Lösenord</h4>
                <SettingsButton title={props.currentPassword} indicator={pencilIcon}/>
            </div>
            <Button title="Spara ändringar" clickFunction={saveChanges}/>
        </section>
    );
}

export default ProfileSettingsContainer;