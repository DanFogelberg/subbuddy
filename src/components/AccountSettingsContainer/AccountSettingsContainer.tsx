import SettingsButton from '../SettingsButton/SettingsButton';
import rightArrow from '../../assets/icons/right-arrow.svg';
import downArrow from '../../assets/icons/down-arrow.svg';
import Button from '../Button/Button';
import SwitchIcon from '../SwitchIcon/SwitchIcon';
import { SupabaseClient } from '@supabase/supabase-js';

interface AccountSettingsContainerProps {
  setProfileView: Function;
  setNotificationsView: Function;
  supabase: SupabaseClient;
  setSignedIn: Function;
  setShowIntegrityPolicy: Function;
}

const AccountSettingsContainer = (props: AccountSettingsContainerProps) => {
  const logoutFunction = () => {
    props.supabase.auth.signOut();
    props.setSignedIn(false);
  };

  return (
    <section className="flex flex-col gap-8 w-full items-center">
      <h2 className="w-full text-left">Mitt konto</h2>
      <div className="flex flex-col gap-4 w-full">
        <h4 className="self-start dark:text-font_primary_subtle">Konto</h4>
        <SettingsButton
          title="Profil"
          indicator={rightArrow}
          setView={props.setProfileView}
        />
        <SettingsButton
          title="Notifikationer"
          indicator={rightArrow}
          setView={props.setNotificationsView}
        />
        <SettingsButton title="Ljust/Mörkt läge" indicator={<SwitchIcon />} />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h4 className="self-start dark:text-font_primary_subtle">Support</h4>
        <SettingsButton title="Kundservice" indicator={rightArrow} />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h4 className="self-start dark:text-font_primary_subtle">
          Dokument och Avtal
        </h4>
        <SettingsButton
          title="Integritetspolicy"
          indicator={rightArrow}
          setView={() => props.setShowIntegrityPolicy('true')}
        />
        <SettingsButton title="Ladda ner användardata" indicator={downArrow} />
      </div>
      <Button
        title="Logga ut"
        clickFunction={logoutFunction}
        backgroundColor="bg-button_primary_black"
      />
      <Button //Needs delete account function
        title="Radera konto"
        clickFunction={logoutFunction}
        backgroundColor="bg-button_primary_orange"
      />
    </section>
  );
};

export default AccountSettingsContainer;
