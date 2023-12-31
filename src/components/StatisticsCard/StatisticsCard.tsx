interface StatisticsCardProps {
  cost: number;
  name: string;
}

const StatisticsCard = (props: StatisticsCardProps) => {
  return (
    <article className="bg-font_primary_white rounded-[10px] shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px] flex justify-between items-center py-4 px-6 dark:bg-widget_primary_black mb-3">
      <p className="font-semibold">{props.name}</p>
      <div className="text-right">
        <p className="font-semibold">{props.cost} kr</p>
        <p className="text-xs font-medium text-font_primary_gray dark:text-font_primary_white">
          i månaden
        </p>
      </div>
    </article>
  );
};

export default StatisticsCard;
