import netflixLogo from '../../assets/images/netflix-logo.png';

const ActiveSubscriptionCard = () => {
    return (
        <article className='bg-font_primary_white text-font_primary_black rounded-[10px] shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px] flex justify-between items-center py-4 px-6'>
            <div className='flex items-center gap-4'>
                <img className='w-[50px] h-[50px] rounded-[5px]' src={netflixLogo} alt="Image of the Netflix logo." />
                <div className='text-left'>
                    <p className="font-semibold">Netflix</p>
                    <p className='text-xs'>Standard</p>
                </div>
            </div>
            <div className="text-right">
                <p className="font-semibold">129 kr</p>
                <p className="text-xs font-medium">1 månad</p>
            </div>
        </article>
    );
}

export default ActiveSubscriptionCard;