import { useState } from 'react';

interface ServicesOptionsProps {
  services: Array<any>;
  setServiceId: Function;
}

const ServicesOptions = (props: ServicesOptionsProps) => {
  const [clickedCardId, setClickedCardId] = useState<number | null>(null);

  return (
    <div className="flex flex-col justify-start items-start gap-2.5 pb-4">
      {props.services.map((service, id) => (
        <div
          onClick={() => {
            props.setServiceId(service.id);
            setClickedCardId(id);  // Set the clicked card id
          }}
          className={`flex justify-center items-center py-2 px-4 rounded-[26px] ${
            id === clickedCardId
              ? 'bg-button_primary_orange'
              : 'bg-font_primary_white shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px] dark:bg-widget_primary_black'
          }`}
          key={id}
        >
          {service.name}
        </div>
      ))}
    </div>
  );
};

export default ServicesOptions;
