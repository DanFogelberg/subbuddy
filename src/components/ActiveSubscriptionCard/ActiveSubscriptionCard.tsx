import { SupabaseClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import chartIcon from '../../assets/icons/chart-icon.svg';
import closeIcon from '../../assets/icons/close-icon.svg';

interface Subscription {
  id: string;
  cost: number | undefined;
  service: {
    name: string;
    cost: number;
    provider: {
      name: string;
      logo: string;
    };
  };
}

interface ActiveSubscrionCardProps {
  subscription: Subscription;
  subscriptions: Array<Subscription>;
  supabase: SupabaseClient;
  setSubscriptions: Function;
}
const ActiveSubscriptionCard = (props: ActiveSubscrionCardProps) => {
  const normalHeight = 'h-fit';
  const extendedHeight = 'h-fit';
  const normalColor = 'bg-widget_primary_white';
  const darkModeColor = 'bg-widget_primary_black';
  const extendedColor = 'bg-button_primary_orange';
  const darkModeFont = 'text-font_primary_white';
  const darkModeExtendedFont = 'text-font_primary_black';

  const [imageUrl, setImageUrl] = useState('');
  const [showMore, setShowMore] = useState(false);
  const [height, setHeight] = useState(normalHeight);
  const [backgroundColor, setBackgroundColor] = useState(normalColor);
  const [darkModeBackgroundColor, setDarkBackgroundColor] =
    useState(darkModeColor);
  const [darkModeFontColor, setDarkModeFontColor] = useState(darkModeFont);

  useEffect(() => {
    const imageUrlData = props.supabase.storage
      .from('logos')
      .getPublicUrl(props.subscription.service.provider.logo);
    setImageUrl(imageUrlData.data.publicUrl);
  }, []);

  const deleteSubscription = () => {
    console.log(props.subscription.id);
    props.supabase
      .from('subscription')
      .delete()
      .match({ id: props.subscription.id })
      .then(() => {
        const newSubscriptions = props.subscriptions;
        const deletedIndex = newSubscriptions.findIndex(subscription => {
          if (subscription.id === props.subscription.id) return true;
          else return false;
        });
        newSubscriptions.splice(deletedIndex, 1);
        console.log(newSubscriptions);
        props.setSubscriptions([]);
        props.setSubscriptions([...newSubscriptions]);
      });
  };

  const show = () => {
    if (showMore === false) {
      setShowMore(true);
      setHeight(extendedHeight);
      setBackgroundColor(extendedColor);
      setDarkBackgroundColor(extendedColor);
      setDarkModeFontColor(darkModeExtendedFont);
    }
  };

  const hide = () => {
    setShowMore(false);
    setHeight(normalHeight);
    setBackgroundColor(normalColor);
    setDarkBackgroundColor(darkModeColor);
    setDarkModeFontColor(darkModeFont);
  };

  return (
    <article
      onClick={() => show()}
      className={`${height} ${backgroundColor} flex flex-col gap-4 justify-center rounded-[10px] shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px] py-4 px-6 transition-all mb-3 dark:${darkModeBackgroundColor} dark:${darkModeFontColor}`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            className="w-[50px] h-[50px] rounded-[5px]"
            src={imageUrl}
            alt="Image of the company logo."
          />
          <div className="text-left">
            <p className="font-semibold">
              {props.subscription.service.provider.name}
            </p>
            <p className="text-xs">{props.subscription.service.name}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-semibold">
            {props.subscription.cost
              ? props.subscription.cost
              : props.subscription.service.cost}{' '}
            kr
          </p>
          <p className="text-xs font-medium">Månadsvis</p>
        </div>
      </div>
      {showMore ? (
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="font-medium text-font_primary_gray">Abonemangsinfo</p>
            <p className="font-semibold">{props.subscription.service.name}</p>
            <button className="bg-button_primary_black rounded-[20px] px-3 py-1.5 text-font_primary_white font-semibold">
              Ändra
            </button>
          </div>
          <div>
            <p className="text-left pb-2">Prisförändringar</p>
            <div className="flex gap-4">
              <img src={chartIcon} alt="Icon of a chart." />
              <p className="text-left">
                Detta priset har ökat med 15% det senaste året
              </p>
            </div>
          </div>
          <Button
            clickFunction={() => deleteSubscription()}
            title="Ta bort prenumeration"
            backgroundColor="bg-button_primary_black"
            fontColor="text-font_primary_white"
          />
          <div
            className="flex justify-center items-center gap-[7px]"
            onClick={() => hide()}
          >
            <p className="text-xs">Close</p>
            <img
              className="w-2.5 h-2.5"
              src={closeIcon}
              alt="Icon of an X"
            ></img>
          </div>
        </div>
      ) : (
        <></>
      )}
    </article>
  );
};

export default ActiveSubscriptionCard;
