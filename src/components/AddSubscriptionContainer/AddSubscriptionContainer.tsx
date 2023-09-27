import { SupabaseClient } from "@supabase/supabase-js";
import AddSubscriptionButton from "../AddSubscriptionButton/AddSubscriptionButton";
import AddSubscriptionInput from "../AddSubscriptionInput/AddSubscriptionInput";
import Button from "../Button/Button";
import PaymentDateOptions from "../PaymentDateOptions/PaymentDateOptions";
import ServicesOptions from "../ServicesOptions/ServicesOptions";
import { useState } from "react";

interface AddSubscriptionContainerProps {
    services:Array<any>;
    supabase:SupabaseClient;
    getSubscriptions:Function;
}

interface InsertData {
    user_id:string|undefined,
    service_id:number,
    next_payment:string,
    cost: null|number
}






const AddSubscriptionContainer = (props:AddSubscriptionContainerProps) => {
    const [serviceId, setServiceId] = useState<number|null>(null);
    const [nextPayment, setNextPayment] = useState<string|null>(null);
    const [cost, setCost] = useState<number|undefined>();
    const [errorMessage, setErrorMessage] = useState<string|null>(null);
    const [resultMessage, setResultMessage] = useState<string|null>(null);

    const handleSubmit = async (serviceId:number|null, nextPayment:string|null, cost:number|undefined = undefined) => {
        setResultMessage(null);
        setErrorMessage(null);
        if(serviceId === null || nextPayment === null)
        {
            setErrorMessage("Vänligen fyll i abonnemang och första betalningstillfälle");
            return;
        }
        if( new Date(nextPayment).getTime() - new Date().getTime() < 0)
        {   
            setErrorMessage("Första betalningsdag har redan passerat");
            return;
        }
        const insertData:InsertData = {
            user_id: ((await props.supabase.auth.getUser()).data.user?.id) ,
            service_id: serviceId,
            next_payment: nextPayment,
            cost: null
            };
        if(cost) insertData.cost = cost;
        const { data, error } = await props.supabase.from("subscription").insert(insertData);
        if(error){
            setErrorMessage("Någonting blev fel...");
        } else
        {
            await props.getSubscriptions();
            setResultMessage("Abonnemang tillagt!");
        }  
    }

    return (
        <section>
            <h2>Lägg till</h2>
            <AddSubscriptionButton title="Typ av abonemang" component={<ServicesOptions services={props.services} setServiceId={setServiceId} />} />
            <AddSubscriptionButton title="Betalningstillfällen" component={<PaymentDateOptions setNextPayment={setNextPayment}/>} />
            <AddSubscriptionInput setCost={setCost}/>
            <Button 
                title="Lägg till sub!"
                clickFunction={async () => {await handleSubmit(serviceId, nextPayment, cost)}}
                backgroundColor="bg-button_primary_orange"
            />
            {errorMessage != null ? <p className="text-red-600">{errorMessage}</p> : <></>}
            {resultMessage != null ? <p className="text-green-600">{resultMessage}</p> : <></>}
            
        </section>
    );
}

export default AddSubscriptionContainer;