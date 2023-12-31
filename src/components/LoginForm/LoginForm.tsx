import React from 'react';
import Button from '../Button/Button';
import { ChangeEvent, useState } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';
import checkboxArrow from '../../assets/icons/checkbox-arrow.svg';

interface LoginProps {
  supabase: SupabaseClient;
  setSignedIn: Function;
  getSubscriptions: Function;
  setLoginView: Function;
  setShowIntegrityPolicy: Function;
}

const LoginForm: React.FC<LoginProps> = props => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const signIn = (user: string, password: string) => {
    setErrorMessage(null);
    if (user.length < 3 || password.length < 1) {
      setErrorMessage('Fyll i email och lösenord');
      return;
    }
    props.supabase.auth
      .signInWithPassword({
        email: user,
        password: password,
      })
      .then(response => {
        if (response.error === null) {
          props.setSignedIn(true);
          props.getSubscriptions();
        } else {
          console.log(response.error.status);
          if (response.error.status === 400)
            setErrorMessage('Fel email eller lösenord');
          else setErrorMessage('Det blev fel!');
        }
      });
  };

  const handleUserChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <h2 className='text-left mb-[40px]'>Logga in</h2>
      <form
        className="flex flex-col items-start justify-center w-full gap-6"
        action=""
      >
        <label htmlFor="user-name">Email</label>
        <input
          className="border-b-[1px] bg-transparent w-full outline-none"
          type="text"
          name="user-name"
          onChange={handleUserChange}
          required
        />
        <label htmlFor="password">Lösenord</label>
        <input
          className="border-b-[1px] bg-transparent w-full outline-none"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          required
        />
        <div className="mb-[84px] relative">
          <input
            className="appearance-none mr-3 w-4 h-4 rounded-[2px] border-solid border-[1px]  border-black checked:bg-black peer"
            type="checkbox"
            name="remember-me"
          />
          <label htmlFor="remember-me">Kom ihåg mig</label>
          <img
            className="absolute w-2.5 h-2.5 pointer-events-none top-[19%] left-[2.5%] hidden peer-checked:block"
            src={checkboxArrow}
            alt="Checkbox arrow."
          />
        </div>
        <div className="flex flex-col items-center gap-4 w-full">
          <Button
            title="Logga in"
            clickFunction={() => signIn(user, password)}
            type="button"
            backgroundColor="bg-button_primary_black"
            fontColor='text-font_primary_white'
            darkBackgroundColor='bg-widget_primary_black'
          />
          <Button
            title="Skapa konto"
            clickFunction={() => props.setLoginView('createAccount')}
            type="button"
            backgroundColor="bg-button_primary_orange"
            fontColor='text-font_primary_black'
          />
        </div>
      </form>
      {errorMessage != null ? (
        <p className="text-red-600">{errorMessage}</p>
      ) : (
        <></>
      )}
      <div className='flex flex-col gap-3 pt-[84px]'>
        <p className='text-xs underline text-font_primary_gray' onClick={() => props.setLoginView('login')}>
            Glömt ditt lösenord? SubBud hjälper dig!
        </p>
        <p className='text-xs underline text-font_primary_gray' onClick={() => props.setShowIntegrityPolicy('true')}>
            Läs SubBuds integritetspolicy
        </p>
      </div>
    </>
  );
};

export default LoginForm;
