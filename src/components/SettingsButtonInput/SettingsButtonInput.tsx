interface SettingsButtonInputProps {
  title: string;
  icon?: string;
  clickFunction?: Function;
  inputRef?: React.Ref<HTMLInputElement>;
  onChangeFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SettingsButtonInput = (props: SettingsButtonInputProps) => {
  return (
    <div className="bg-font_primary_white flex justify-between items-center rounded-[10px] w-full shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px] p-4 dark:bg-widget_primary_black font-medium">
      <input
        className="w-full outline-none dark:bg-widget_primary_black"
        type="text"
        value={props.title}
        onChange={props.onChangeFunction}
        ref={props.inputRef}
      />
      <img
        className="dark:invert"
        src={props.icon}
        alt="Icon to indicate the use of the input."
        onClick={() => {
          props.clickFunction && props.clickFunction();
        }}
      />
    </div>
  );
};

export default SettingsButtonInput;
