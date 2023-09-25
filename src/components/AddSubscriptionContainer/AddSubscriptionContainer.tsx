import AddSubscriptionButton from "../AddSubscriptionButton/AddSubscriptionButton";
import AddSubscriptionInput from "../AddSubscriptionInput/AddSubscriptionInput";
import Button from "../Button/Button";
import PaymentDateOptions from "../PaymentDateOptions/PaymentDateOptions";
import ServicesOptions from "../ServicesOptions/ServicesOptions";

interface AddSubscriptionContainerProps {
    services: Array<any>
}

const handleSubmit = () => {
    console.log("Data submitted!");
};

const AddSubscriptionContainer = (props:AddSubscriptionContainerProps) => {
    return (
        <section>
            <h2>Lägg till</h2>
            <AddSubscriptionButton title="Typ av abonemang" component={<ServicesOptions services={props.services} />} />
            <AddSubscriptionButton title="Betalningstillfällen" component={<PaymentDateOptions />} />
            <AddSubscriptionInput />
            <Button title="Lägg till sub!" clickFunction={handleSubmit}/>
        </section>
    );
}

export default AddSubscriptionContainer;