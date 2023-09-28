interface AddSubscriptionInputProps {
  setCost: Function;
}

const AddSubscriptionInput = (props: AddSubscriptionInputProps) => {
  return (
    <input
        className="bg-widget_primary_white w-full py-2 px-4 shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px] rounded-[26px] dark:bg-widget_primary_black"
        type="number"
        min="0"
        placeholder="Kostnad per tillfälle..."
        onChange={e => props.setCost(e.target.value)}
    />
  );
};

export default AddSubscriptionInput;
