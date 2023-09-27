import backArrow from '../../assets/icons/back-arrow.svg';

interface BackIconProps {
    setView: Function;
}

const BackIcon = (props:BackIconProps) => {
    return (
        <div className='mb-4' onClick={() => props.setView && props.setView()}>
            <img className='dark:invert' src={backArrow} alt="Back arrow icon." />
        </div>
    );
}

export default BackIcon;