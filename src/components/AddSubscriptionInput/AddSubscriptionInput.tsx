interface AddSubscriptionInputProps{
    setCost: Function;
}

const AddSubscriptionInput = (props:AddSubscriptionInputProps) => {
    return (
        <input type="number" min="0" placeholder="Kostnad per tillfälle..." onChange={(e)=>props.setCost(e.target.value)}/>
    );
}

export default AddSubscriptionInput;