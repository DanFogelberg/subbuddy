import { SupabaseClient } from '@supabase/supabase-js';
import netflixLogo from '../../assets/images/netflix-logo.png';
import AddSubscriptionCard from "../AddSubscriptionCard/AddSubscriptionCard";


interface ProvidersContainerProps {
    providers: Array<any>;
    supabase: SupabaseClient;
    setSubscriptionsView: Function;
    setAddedProvider: Function;
}

const ProvidersContainer = (props:ProvidersContainerProps) => {
    return (
        <section>
            <div className='flex flex-col justify-start items-start gap-2.5'>
            {props.providers.map((provider, id) => {
                const logoUrl = props.supabase.storage.from("logos").getPublicUrl(provider.logo).data.publicUrl;
                return <AddSubscriptionCard key={id} title={provider.name} logo={logoUrl} setSubscriptionsView={props.setSubscriptionsView} setAddedProvider={props.setAddedProvider} provider={provider}/>;
            })}
            </div>
        </section>
    );
}

export default ProvidersContainer;