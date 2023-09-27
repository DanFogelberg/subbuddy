import RadioButton from '../RadioButton/RadioButton';
import SettingsButton from '../SettingsButton/SettingsButton';

const NotificationsSettingsContainer = () => {
  return (
    <section className="flex flex-col gap-8 w-full items-center">
      <h2 className={'w-full text-left text-2xl font-bold mb-4 font-inter'}>
        Notifikationer
      </h2>
      <div className="flex flex-col gap-4 w-full">
        <h4 className="self-start dark:text-font_primary_subtle">
          Push-notifikationer
        </h4>
        <SettingsButton title="Pausa alla" indicator={<RadioButton />} />
        <SettingsButton
          title="Ändrat pris på subs"
          indicator={<RadioButton />}
        />
        <SettingsButton
          title="Kommande betalningar"
          indicator={<RadioButton />}
        />
      </div>
    </section>
  );
};

export default NotificationsSettingsContainer;
