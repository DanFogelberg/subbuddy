import { SupabaseClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';
import Button from '../Button/Button';


interface Subscription{
    id:string;       
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

interface ActiveSubscrionCardProps{
    subscription:Subscription;
    subscriptions:Array<Subscription>;
    supabase:SupabaseClient;
    setSubscriptions:Function;
}
const ActiveSubscriptionCard = (props:ActiveSubscrionCardProps) => {
    const normalHeight = "h-[100px] ";
    const extendedHeight = "h-[200px] ";
    const normalColor = "bg-slate-100 ";
    const extendedColor = "bg-slate-400";

    const [imageUrl, setImageUrl] = useState("");
    const [showMore, setShowMore] = useState(false);
    const [height, setHeight] = useState(normalHeight);
    const [backgroundColor, setBackgroundColor] = useState(normalColor); 
 
    
    useEffect(() => {
        const imageUrlData = props.supabase.storage.from("logos").getPublicUrl(props.subscription.service.provider.logo);
        setImageUrl(imageUrlData.data.publicUrl);
    }, [])

    const deleteSubscription = () => {
        console.log(props.subscription.id);
        props.supabase.from("subscription").delete().match({"id": props.subscription.id}).then((result)=>{
            const newSubscriptions = props.subscriptions;
            const deletedIndex = newSubscriptions.findIndex((subscription) =>{
                if(subscription.id === props.subscription.id) return true;
                else return false;
            })
            newSubscriptions.splice(deletedIndex, 1);
            console.log(newSubscriptions);
            props.setSubscriptions([]);
            props.setSubscriptions([...newSubscriptions]);
        });
        
    }

    const show = () => {
        if(showMore === false)
        {
            setShowMore(true);
            setHeight(extendedHeight);
            setBackgroundColor(extendedColor);
        }
    }

    const hide = () => {   
        setShowMore(false);
        setHeight(normalHeight);
        setBackgroundColor(normalColor);
    }

 


    return (
        <article onClick={() => show()} className={height + backgroundColor + " text-font_primary_black rounded-[10px] shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px] py-4 px-6 transition-all "}>
            <div className='flex justify-between items-center'>
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
            </div>
            {showMore ? <>
                <Button clickFunction={() => deleteSubscription()} title={"Ta bort prenumeration"}/>
                <h1 onClick={() => hide()}>Close X</h1>
            </>
                : <></>}
        </article>
    )
}

export default ActiveSubscriptionCard;