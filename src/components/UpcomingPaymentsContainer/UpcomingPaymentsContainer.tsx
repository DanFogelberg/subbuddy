import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';
import UpcomingPaymentCard from '../UpcomingPaymentCard/UpcomingPaymentCard';
import { SupabaseClient } from '@supabase/supabase-js';

interface UpcomingPaymentsContainerProps {
  subscriptions: Array<any>;
  supabase: SupabaseClient;
}

const UpcomingPaymentsContainer = (props: UpcomingPaymentsContainerProps) => {
  return (
    <section className="flex flex-col gap-4 pb-8">
      <h3 className="text-left">Kommande betalningar</h3>
      <div className="flex overflow-y-hidden overflow-x-auto gap-3 w-auto whitespace-nowrap mr-[-1.5rem]">
        {props.subscriptions.map((subscription, id) => {
          const today = new Date();
          const nextPayment = new Date(subscription.next_payment);
          const daysLeft = Math.round(
            (nextPayment.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
          );
          let cost;
          if (subscription.cost) cost = subscription.cost;
          else cost = subscription.service.cost;
          return (
            <UpcomingPaymentCard
              key={id}
              name={subscription.service.provider.name}
              cost={cost}
              daysLeft={daysLeft}
              supabase={props.supabase}
              logo={subscription.service.provider.logo}
            />
          );
        })}
      </div>
    </section>
  );
};

export default UpcomingPaymentsContainer;
