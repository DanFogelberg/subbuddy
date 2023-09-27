interface SettingsButtonProps {
  title: string;
  indicator?: string | React.ReactNode;
  setView?: Function;
  clickFunction?: Function;
}

const SettingsButton = (props: SettingsButtonProps) => {
  return (
    <div
      className="bg-widget_primary_white flex justify-between items-center rounded-[10px] w-full shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px] p-4 dark:bg-widget_primary_black"
      onClick={() => props.setView && props.setView()}
    >
      <p>{props.title}</p>
      {typeof props.indicator === 'string' ? (
        <img
          className="dark:invert"
          src={props.indicator}
          alt="Icon of an arrow"
          onClick={() => {
            props.clickFunction && props.clickFunction();
          }}
        />
      ) : (
        props.indicator
      )}
    </div>
  );
};

export default SettingsButton;
