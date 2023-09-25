import { SupabaseClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';


interface ActiveSubscrionCardProps{
    subscription:{
        cost:number|undefined;
        service:{
            name:string;
            cost:number;
            provider:{
                name:string;
                logo:string;
            }
        }
    }

    supabase:SupabaseClient
}
const ActiveSubscriptionCard = (props:ActiveSubscrionCardProps) => {
    const [imageUrl, setImageUrl] = useState("");
    
    useEffect(() => {
        const imageUrlData = props.supabase.storage.from("logos").getPublicUrl(props.subscription.service.provider.logo);
        setImageUrl(imageUrlData.data.publicUrl);
    }, [])

    return (
        <article className='bg-font_primary_white text-font_primary_black rounded-[10px] shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px] flex justify-between items-center py-4 px-6'>
            <div className='flex items-center gap-4'>
                <img className='w-[50px] h-[50px] rounded-[5px]' src={imageUrl} alt="Image of the logo." />
                <div className='text-left'>
                    <p className="font-semibold">{props.subscription.service.provider.name}</p>
                    <p className='text-xs'>{props.subscription.service.name}</p>
                </div>
            </div>
            <div className="text-right">
                <p className="font-semibold">{props.subscription.cost ? props.subscription.cost : props.subscription.service.cost} kr</p>
                <p className="text-xs font-medium">1 månad</p>
            </div>
        </article>
    );
}

export default ActiveSubscriptionCard;