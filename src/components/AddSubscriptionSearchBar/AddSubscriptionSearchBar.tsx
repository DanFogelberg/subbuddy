import searchIcon from '../../assets/icons/search-icon.svg';

const AddSubscriptionSearchBar = () => {
    return (
        <div className="bg-widget_primary_white flex gap-3 py-3 px-4 rounded-[40px] mb-8 shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px]">
            <img src={searchIcon} alt="Icon of a magnifying glass." />
            <input
                className='outline-none text-font_primary_black'
                type="text"
                placeholder='Sök efter subs...'
            />
        </div>
    );
}

export default AddSubscriptionSearchBar;