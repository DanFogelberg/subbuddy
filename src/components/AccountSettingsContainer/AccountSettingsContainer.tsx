import SettingsButton from "../SettingsButton/SettingsButton";
import rightArrow from "../../assets/icons/right-arrow.svg";
import downArrow from "../../assets/icons/down-arrow.svg";
import Button from "../Button/Button";

interface AccountSettingsContainerProps {
    setProfileView: Function;
    setNotificationsView: Function;
}

const AccountSettingsContainer = (props:AccountSettingsContainerProps) => {

    const logoutFunction = () => {
        console.log('Logout function here!');
    }

    return (
        <section className="flex flex-col gap-8 w-full items-center">
            <h3>Mitt Konto</h3>
            <div className="flex flex-col gap-4 w-full">
                <h4 className="self-start">Konto</h4>
                <SettingsButton title="Profil" image={rightArrow} setView={props.setProfileView} />
                <SettingsButton title="Notifikationer" image={rightArrow} setView={props.setNotificationsView} />
                <SettingsButton title="Ljust/Mörkt läge" image={rightArrow} />
            </div>
            <div className="flex flex-col gap-4 w-full">
                <h4 className="self-start">Support</h4>
                <SettingsButton title="Kundservice" image={rightArrow} />
            </div>
            <div className="flex flex-col gap-4 w-full">
                <h4 className="self-start">Dokument och Avtal</h4>
                <SettingsButton title="Integritetspolicy" image={rightArrow} />
                <SettingsButton title="Ladda ner användardata" image={downArrow} />
            </div>
            <Button title="Logga ut" clickFunction={logoutFunction}/>
        </section>
    );
}

export default AccountSettingsContainer;