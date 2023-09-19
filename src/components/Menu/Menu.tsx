import homeIconWhite from '../../assets/icons/home-icon-white.svg';
import bellIconWhite from '../../assets/icons/bell-icon-white.svg';
import profileIconWhite from '../../assets/icons/profile-icon-white.svg';

interface MenuProps {
    setView:Function 
}


const Menu = (props:MenuProps) => {



    return (
        <nav className='bg-black flex flex-row justify-between rounded-[64px] px-10 py-1 shadow-[rgba(0,_0,_0,_0.50)_0px_0px_8px_0px] text-font_primary_white text-[10px]'>
            <div className='flex flex-col items-center gap-1 px-3.5 py-2' onClick = {() => props.setView("home")}>
                <img className='h-6 w-6' src={homeIconWhite} alt="Home icon." />
                <p >Hem</p>
            </div>
            <div className='flex flex-col items-center gap-1 px-3.5 py-2' onClick = {() => props.setView("subscriptions")}>
                <img className='h-6 w-6' src={bellIconWhite} alt="Bell icon." />
                <p>Subs</p>
            </div>
            <div className='flex flex-col items-center gap-1 px-3.5 py-2' onClick = {() => props.setView("profile")}>
                <img className='h-6 w-6' src={profileIconWhite} alt="Profile icon." />
                <p>Profil</p>
            </div>
        </nav>
    );
};

export default Menu;
