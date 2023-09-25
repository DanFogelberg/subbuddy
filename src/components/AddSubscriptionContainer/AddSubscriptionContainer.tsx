import { SupabaseClient } from "@supabase/supabase-js";
import AddSubscriptionButton from "../AddSubscriptionButton/AddSubscriptionButton";
import AddSubscriptionInput from "../AddSubscriptionInput/AddSubscriptionInput";
import Button from "../Button/Button";
import PaymentDateOptions from "../PaymentDateOptions/PaymentDateOptions";
import ServicesOptions from "../ServicesOptions/ServicesOptions";
import { useState } from "react";

interface AddSubscriptionContainerProps {
    services: Array<any>;
    supabase: SupabaseClient;
}


//  async function insert() {
const handleSubmit = async (supabase:SupabaseClient, serviceId:number, nextPayment:string) => {
    console.log(serviceId);
    const { data, error } = await supabase.from("subscription").insert({
    user_id: ((await supabase.auth.getUser()).data.user?.id) ,
    service_id: serviceId,
    next_payment: nextPayment
    });
}


const AddSubscriptionContainer = (props:AddSubscriptionContainerProps) => {
    const [serviceId, setServiceId] = useState<number>(0);
    const [nextPayment, setNextPayment] = useState<string>("");

    return (
        <section>
            <h2>Lägg till</h2>
            <AddSubscriptionButton title="Typ av abonemang" component={<ServicesOptions services={props.services} setServiceId={setServiceId} />} />
            <AddSubscriptionButton title="Betalningstillfällen" component={<PaymentDateOptions setNextPayment={setNextPayment}/>} />
            <AddSubscriptionInput />
            <Button title="Lägg till sub!" clickFunction={async () => {await handleSubmit(props.supabase, serviceId, nextPayment)}}/>
        </section>
    );
}

export default AddSubscriptionContainer;