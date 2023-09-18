import React from "react";
import Button from "../Button/Button";
import { ChangeEvent, useState } from "react";
import { SupabaseClient } from "@supabase/supabase-js";

interface LoginProps {
    supabase:SupabaseClient;
    setSignedIn:Function;
    getSubscriptions:Function;
}

const LoginForm:React.FC<LoginProps> = (props) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (user: string, password: string) => {
        props.supabase.auth.signInWithPassword({
            email: user,
            password: password
            }).then((response) => {
                if(response.error === null)
                {
                    props.setSignedIn(true)
                    props.getSubscriptions();  
                }
            });
    }
    const createAccount = (user:string, password:string) => {
        console.log(user, password);
        props.supabase.auth.signUp({
            email: user, 
            password: password
        }).then((response) => console.log(response));
    }
    
    const handleUserChange = (e:ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    }
    const handlePasswordChange = (e:ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        console.log(e.target.value);
    }

    return (
        <>
        <h2>Logga in</h2>
        <form className="flex flex-col items-start justify-center w-full gap-6" action="">
            <label htmlFor="user-name">Användarnamn</label>
            <input className="border-b-[1px] bg-transparent w-full" type="text" name="user-name" onChange = {handleUserChange} required/>
            <label htmlFor="password">Lösenord</label>
            <input className="border-b-[1px] bg-transparent w-full" type="password" name="password" onChange = {handlePasswordChange} required/>
            <div className="mb-[84px]">
                <input className="mr-3" type="checkbox" name="remember-me" />
                <label htmlFor="remember-me">Kom ihåg mig</label>
            </div>
            <div className="flex flex-col items-center gap-4 w-full">
                <Button title="Logga in" clickFunction = {() => signIn(user, password)} type= "button"/>
                <Button title="Skapa konto" clickFunction = {() => createAccount(user, password)}type="button"/>
            </div>
        </form>
        </>
    );
    
    
};

export default LoginForm;
