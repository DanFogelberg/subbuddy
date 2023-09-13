import React from "react";
import Button from "../Button/Button";

const LoginForm = () => {
    return (
        <>
        <h2>Logga in</h2>
        <form className="flex flex-col items-start justify-center w-full gap-6" action="">
            <label htmlFor="user-name">Användarnamn</label>
            <input className="border-b-[1px] bg-transparent w-full" type="text" name="user-name" required/>
            <label htmlFor="password">Lösenord</label>
            <input className="border-b-[1px] bg-transparent w-full" type="password" name="password" required/>
            <div className="mb-[84px]">
                <input className="mr-3" type="checkbox" name="remember-me" />
                <label htmlFor="remember-me">Kom ihåg mig</label>
            </div>
            <div className="flex flex-col items-center gap-4 w-full">
                <Button title="Logga in" type="submit" />
                <Button title="Skapa konto" type="button"/>
            </div>
        </form>
        </>
    );
};

export default LoginForm;
