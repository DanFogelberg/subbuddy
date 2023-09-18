import React from "react";
import Button from "../Button/Button";
import { ChangeEvent, useState } from "react";
import { SupabaseClient } from "@supabase/supabase-js";

interface SubscriptionListProps {
    supabase:SupabaseClient;
    subscriptions:Array<any>; //Needs stricter type
}

const SubscriptionsList:React.FC<SubscriptionListProps> = (props) => {


   

    return (
        <>
        <h2>Ost</h2>
        {props.subscriptions.map((subscription, id) => {
           return (<h2 key={id}>{subscription.service.name} --- {subscription.service.provider.name}</h2>) //Next_payment for testing
        })}


        </>
    );
    
    
};

export default SubscriptionsList;
