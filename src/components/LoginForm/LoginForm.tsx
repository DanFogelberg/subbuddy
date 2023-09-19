import React from "react";
import Button from "../Button/Button";
import { ChangeEvent, useState } from "react";
import { SupabaseClient } from "@supabase/supabase-js";
import checkboxArrow from '../../assets/icons/checkbox-arrow.svg';

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
            <div className="mb-[84px] relative">
                <input className="appearance-none mr-3 w-4 h-4 rounded-[2px] border-solid border-[1px]  border-black checked:bg-black peer" type="checkbox" name="remember-me" />
                <label htmlFor="remember-me">Kom ihåg mig</label>
                <img className="absolute w-2.5 h-2.5 pointer-events-none top-[19%] left-[2.5%] hidden peer-checked:block" src={checkboxArrow} alt="Checkbox arrow." />
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
