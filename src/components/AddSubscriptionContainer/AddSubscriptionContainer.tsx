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

interface InsertData {
    user_id:string|undefined,
    service_id:number,
    next_payment:string,
    cost: null|number
}


//  async function insert() {
const handleSubmit = async (supabase:SupabaseClient, serviceId:number, nextPayment:string, cost:number|undefined = undefined) => {
    const insertData:InsertData = {
        user_id: ((await supabase.auth.getUser()).data.user?.id) ,
        service_id: serviceId,
        next_payment: nextPayment,
        cost: null
        };
    if(cost) insertData.cost = cost;
    const { data, error } = await supabase.from("subscription").insert(insertData);
}


const AddSubscriptionContainer = (props:AddSubscriptionContainerProps) => {
    const [serviceId, setServiceId] = useState<number>(0);
    const [nextPayment, setNextPayment] = useState<string>("");
    const [cost, setCost] = useState<number|undefined>();

    return (
        <section>
            <h2>Lägg till</h2>
            <AddSubscriptionButton title="Typ av abonemang" component={<ServicesOptions services={props.services} setServiceId={setServiceId} />} />
            <AddSubscriptionButton title="Betalningstillfällen" component={<PaymentDateOptions setNextPayment={setNextPayment}/>} />
            <AddSubscriptionInput setCost={setCost}/>
            <Button title="Lägg till sub!" clickFunction={async () => {await handleSubmit(props.supabase, serviceId, nextPayment, cost)}}/>
        </section>
    );
}

export default AddSubscriptionContainer;