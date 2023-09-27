import plusIcon from '../../assets/icons/plus-icon.svg';

interface AddSubscriptionIconProps {
  setSubscriptionsView: Function;
}

const AddSubscriptionIcon = (props: AddSubscriptionIconProps) => {
  return (
    <div
      onClick={() => props.setSubscriptionsView('search')}
      className="bg-font_primary_black w-10 h-10 rounded-full flex justify-center items-center absolute top-6 right-6 dark:bg-widget_primary_black"
    >
      <img className="w-[18px] h-[18px]" src={plusIcon} alt="Plus sign icon." />
    </div>
  );
};

export default AddSubscriptionIcon;
