interface ServicesOptionsProps {
    services: Array<any>;
}

const ServicesOptions = (props:ServicesOptionsProps) => {
    return (
        <div className='flex flex-col justify-start items-start gap-2.5'>
        {props.services.map((service, id) => (
            <div className='flex justify-center items-center bg-font_primary_white py-2 px-4 shadow-[rgba(0,_0,_0,_0.25)_0px_2px_2px_0px] rounded-[26px]' key={id}>
                {service.name}
            </div>
        ))}
    </div>
    );
}

export default ServicesOptions;