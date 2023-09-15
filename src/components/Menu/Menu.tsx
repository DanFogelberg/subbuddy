import homeIconWhite from '../../assets/icons/home-icon-white.svg';
import bellIconWhite from '../../assets/icons/bell-icon-white.svg';
import profileIconWhite from '../../assets/icons/profile-icon-white.svg';

const Menu = () => {
    return (
        <nav className='w-[342px] bg-black flex flex-row justify-between rounded-[64px] px-10 py-1'>
            <div className='flex flex-col items-center gap-1 px-3.5 py-2'>
                <img className='h-6 w-6' src={homeIconWhite} alt="Home icon." />
                <p>Hem</p>
            </div>
            <div className='flex flex-col items-center gap-1 px-3.5 py-2'>
                <img className='h-6 w-6' src={bellIconWhite} alt="" />
                <p>Subs</p>
            </div>
            <div className='flex flex-col items-center gap-1 px-3.5 py-2'>
                <img className='h-6 w-6' src={profileIconWhite} alt="" />
                <p>Profil</p>
            </div>
        </nav>
    );
};

export default Menu;
