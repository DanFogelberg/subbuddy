import React from 'react';
import Button from '../Button/Button';
import { ChangeEvent, useState } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';
import checkboxArrow from '../../assets/icons/checkbox-arrow.svg';

interface CreateAccountProps {
  supabase: SupabaseClient;
  setLoginView: Function;
  setShowIntegrityPolicy: Function;
}
const CreateAccountForm: React.FC<CreateAccountProps> = props => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const createAccount = (user: string, password: string) => {
    setErrorMessage(null);
    if (password.length < 8) {
      setErrorMessage('Lösenordet måste vara minst 8 tecken');
      return;
    }
    props.supabase.auth
      .signUp({
        email: user,
        password: password,
      })
      .then(response => {
        console.log(response);
        if (!response.error) {
          props.setLoginView('login');
        } else {
          setErrorMessage('Någonting gick fel!');
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
      <h2 className='text-left mb-[40px]'>Skapa konto</h2>
      <form
        className="flex flex-col items-start justify-center w-full gap-6"
        action=""
      >
        <label htmlFor="user-name">Email</label>
        <input
          className="border-b-[1px] bg-transparent w-full"
          type="text"
          name="user-name"
          onChange={handleUserChange}
          required
        />
        <label htmlFor="password">Lösenord</label>
        <input
          className="border-b-[1px] bg-transparent w-full"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          required
        />
        <div className="flex flex-col items-center gap-4 w-full">
          <Button
            title="Skapa konto"
            clickFunction={() => createAccount(user, password)}
            type="button"
            backgroundColor="bg-button_primary_orange"
            fontColor='text-font_primary_white'
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
          Har du redan ett konto? Logga in
        </p>
        <p className='text-xs underline text-font_primary_gray' onClick={() => props.setShowIntegrityPolicy('true')}>
          Läs SubBuds integritetspolicy
        </p>
      </div>
    </>
  );
};

export default CreateAccountForm;
