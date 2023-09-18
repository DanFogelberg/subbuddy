import rightArrow from '../../assets/icons/right-arrow.svg';

const MonthlyCostCard = () => {
    return (
        <article className='bg-button_primary_orange rounded-[10px] p-6 shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px] active:shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px]'>
            <div className="flex flex-col gap-6 items-start">
                <p>Fasta kostnader denna månad</p>
                <div className='w-full flex flex-row justify-between items-center'>
                    <p className="text-5xl">*** kr</p>
                    <img className='h-6 w-6' src={rightArrow} alt="Right arrow icon." />
                </div>
            </div>
        </article>
    );
}

export default MonthlyCostCard;