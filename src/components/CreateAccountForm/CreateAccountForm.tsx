import React from "react";
import Button from "../Button/Button";
import { ChangeEvent, useState } from "react";
import { SupabaseClient } from "@supabase/supabase-js";
import checkboxArrow from '../../assets/icons/checkbox-arrow.svg';

interface CreateAccountProps {
    supabase:SupabaseClient;
    setLoginView:Function;
}

const CreateAccountForm:React.FC<CreateAccountProps> = (props) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");


    const createAccount = (user:string, password:string) => {
        console.log(user, password);
        props.supabase.auth.signUp({
            email: user, 
            password: password
        }).then((response) => { 
            console.log(response);
            if(!response.error)
            {
                console.log("lög")
                props.setLoginView("login");
            }else {
                console.log("Errorz");
            }
        });
    }
    
    const handleUserChange = (e:ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    }
    const handlePasswordChange = (e:ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    return (
        <>
        <h2>Skapa konto</h2>
        <form className="flex flex-col items-start justify-center w-full gap-6" action="">
            <label htmlFor="user-name">Email</label>
            <input className="border-b-[1px] bg-transparent w-full" type="text" name="user-name" onChange = {handleUserChange} required/>
            <label htmlFor="password">Lösenord</label>
            <input className="border-b-[1px] bg-transparent w-full" type="password" name="password" onChange = {handlePasswordChange} required/>
            <div className="flex flex-col items-center gap-4 w-full">
                <Button title="Skapa konto" clickFunction = {() => createAccount(user, password)}type="button"/>
            </div>
        </form>
        <p onClick={() => props.setLoginView("login")}>Har du redan ett konto? Logga in</p>
        </>
    );
    
    
};

export default CreateAccountForm;
