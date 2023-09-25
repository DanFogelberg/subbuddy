import netflixLogo from '../../assets/images/netflix-logo.png';
import AddSubscriptionCard from "../AddSubscriptionCard/AddSubscriptionCard";


interface PopularSubscriptionsContainerProps {
    providers: Array<any>,
}

const PopularSubscriptionsContainer = (props:PopularSubscriptionsContainerProps) => {
    return (
        <section>
            <div className='flex flex-col justify-start items-start gap-2.5'>
                {props.providers.map((provider) => (
                    <AddSubscriptionCard image={netflixLogo} title={provider.name} />
                ))}
            </div>
        </section>
    );
}

export default PopularSubscriptionsContainer;