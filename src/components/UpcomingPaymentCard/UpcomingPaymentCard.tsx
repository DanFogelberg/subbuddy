import netflixLogo from '../../assets/icons/netflix-logo.png';

interface UpcomingPaymentCardProps{
    name:string;
    cost:number;
    daysLeft:number;
}

const UpcomingPaymentCard = (props:UpcomingPaymentCardProps) => {
    return (
        <article className='bg-black text-font_primary_white rounded-[10px] p-4 flex gap-3 w-[197px] shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px]'>
            <div className='flex flex-col'>
                <img className='w-[50px] h-[50px]' src={netflixLogo} alt="Image of the Netflix logo." />
                <p className='font-semibold'>{props.name}</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-xl font-semibold'>{props.cost} kr</p>
                <p>{props.daysLeft} dagar kvar</p>
            </div>
        </article>
    );
}

export default UpcomingPaymentCard;