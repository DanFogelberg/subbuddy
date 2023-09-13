import React from "react";
import Button from "../Button/Button";
import { ChangeEvent, useState } from "react";

const LoginForm = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const login = (accountName: string, password: string) => {
        console.log(accountName, password);
    }
    const createAccount = (user:string, password:string) => {
        console.log(user, password);
    }
    
    const handleUserChange = (e:ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
        console.log(e.target.value);
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
                <Button title="Logga in" clickFunction = {() => login(user, password)}/>
                <Button title="Skapa konto" clickFunction = {() => createAccount(user, password)}type="button"/>
            </div>
        </form>
        </>
    );
    
    
};

export default LoginForm;
