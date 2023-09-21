import rightArrow from '../../assets/icons/right-arrow.svg';

interface AddSubscriptionCardProps {
    title: string;
    providerImage: string;
}

const AddSubscriptionCard: React.FC<AddSubscriptionCardProps> = (props) => {
    return (
        <article className='bg-font_primary_white text-font_primary_black rounded-[10px] shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px] flex justify-between items-center py-4 px-6'>
            <div>
                <img src={props.providerImage} alt="Image of the company." />
                <p>{props.title}</p>
            </div>
            <img src={rightArrow} alt="Arrow pointing right." />
        </article>
    );
}

export default AddSubscriptionCard;