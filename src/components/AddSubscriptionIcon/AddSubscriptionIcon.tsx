import plusIcon from '../../assets/icons/plus-icon.svg';

const AddSubscriptionIcon = () => {
    return(
        <div className='bg-black w-10 h-10 rounded-full flex justify-center items-center'>
            <img className='w-[18px] h-[18px]' src={plusIcon} alt="Plus sign icon." />
        </div>
    );
}

export default AddSubscriptionIcon;