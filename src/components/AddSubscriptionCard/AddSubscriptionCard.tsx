import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';
import rightArrow from '../../assets/icons/right-arrow.svg';
import { SupabaseClient } from '@supabase/supabase-js';

interface AddSubscriptionCardProps {
    title: string;
    logo: string;
}

const AddSubscriptionCard: React.FC<AddSubscriptionCardProps> = (props) => {
    return (
        <article className='bg-font_primary_white text-font_primary_black rounded-[10px] shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px] flex justify-between items-center py-4 px-6 w-full'>
            <div>
                <img className='w-[50px] h-[50px] rounded-[5px]' src={props.logo} alt="Image of the company." />
                <p>{props.title}</p>
            </div>
            <img className='w-2 h-3' src={rightArrow} alt="Arrow pointing right." />
        </article>
    );
}

export default AddSubscriptionCard;