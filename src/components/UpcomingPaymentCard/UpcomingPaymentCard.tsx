import { SupabaseClient } from '@supabase/supabase-js';
import netflixLogo from '../../assets/images/netflix-logo.png';
import { useState, useEffect} from 'react';

interface UpcomingPaymentCardProps{
    name:string;
    cost:number;
    daysLeft:number;
    supabase: SupabaseClient;
    logo:string;
}

const UpcomingPaymentCard = (props:UpcomingPaymentCardProps) => {
    const [imageUrl, setImageUrl] = useState("");
    
    useEffect(() => {
        const imageUrlData = props.supabase.storage.from("logos").getPublicUrl(props.logo);
        setImageUrl(imageUrlData.data.publicUrl);
    }, [])
    
    
    return (
        <article className='bg-black text-font_primary_white rounded-[10px] p-4 flex gap-3 w-[197px] shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px] dark:bg-widget_primary_black'>
            <div className='flex flex-col'>
                <img className='w-[50px] h-[50px]' src={imageUrl} alt="Image of the Netflix logo." />
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