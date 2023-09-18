const StatisticsCard = () => {
    return (
        <article className='bg-font_primary_white text-font_primary_black rounded-[10px] shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px] flex justify-between items-center py-4 px-6'>
            <p className="font-semibold">Streaming</p>
            <div className="text-right">
                <p className="font-semibold">218 kr</p>
                <p className="text-xs font-medium">i månaden</p>
            </div>
        </article>
    );
}

export default StatisticsCard;