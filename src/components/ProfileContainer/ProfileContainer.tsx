import ProfileButton from "../ProfileButton/ProfileButton";
import rightArrow from "../../assets/icons/right-arrow.svg";
import downArrow from "../../assets/icons/down-arrow.svg";
import Button from "../Button/Button";

const ProfileContainer = () => {

    const handleSubmit = () => {
        console.log("Data submitted!");
    };

    return (
        <section className="flex flex-col gap-8 w-full items-center">
            <h3>Mitt Konto</h3>
            <div className="flex flex-col gap-4 w-full">
                <h4 className="self-start">Konto</h4>
                <ProfileButton title="Profil" image={rightArrow} setView={handleSubmit} />
                <ProfileButton title="Notifikationer" image={rightArrow} />
                <ProfileButton title="Ljust/Mörkt läge" image={rightArrow} />
            </div>
            <div className="flex flex-col gap-4 w-full">
                <h4 className="self-start">Support</h4>
                <ProfileButton title="Kundservice" image={rightArrow} />
            </div>
            <div className="flex flex-col gap-4 w-full">
                <h4 className="self-start">Dokument och Avtal</h4>
                <ProfileButton title="Integritetspolicy" image={rightArrow} />
                <ProfileButton title="Ladda ner användardata" image={downArrow} />
            </div>
            <Button title="Logga ut" clickFunction={handleSubmit}/>
        </section>
    );
}

export default ProfileContainer;