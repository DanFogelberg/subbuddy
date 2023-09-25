import { SupabaseClient } from '@supabase/supabase-js';
import netflixLogo from '../../assets/images/netflix-logo.png';
import AddSubscriptionCard from "../AddSubscriptionCard/AddSubscriptionCard";


interface PopularSubscriptionsContainerProps {
    topProviders: Array<any>,
    supabase: SupabaseClient;
}

const PopularSubscriptionsContainer = (props:PopularSubscriptionsContainerProps) => {
    return (
        <section>
            <div className='flex flex-col justify-start items-start gap-2.5'>
            {props.topProviders.map((provider, id) => {
                const logoUrl = props.supabase.storage.from("logos").getPublicUrl(provider.logo).data.publicUrl;
                return <AddSubscriptionCard key={id} title={provider.name} logo={logoUrl} />;
            })}
            </div>
        </section>
    );
}

export default PopularSubscriptionsContainer;