import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import SettingsButton from '../SettingsButton/SettingsButton';
import pencilIcon from '../../assets/icons/pencil-icon.svg';
import Button from '../Button/Button';
import SettingsButtonInput from '../SettingsButtonInput/SettingsButtonInput';
import { SupabaseClient } from '@supabase/supabase-js';

interface ProfileSettingsContainerProps {
  supabase: SupabaseClient;
}

interface UserData {
  email?: string;
  password?: string;
}

const ProfileSettingsContainer: React.FC<
  ProfileSettingsContainerProps
> = props => {
  const [currentEmail, setEmail] = useState('');
  const [currentPassword, setPassword] = useState('********');
  const [previousEmail, setPreviousEmail] = useState('');
  const [previousPassword, setPreviousPassword] = useState('');
  const [isEmailEditable, setIsEmailEditable] = useState(false);
  const [isPasswordEditable, setIsPasswordEditable] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    props.supabase.auth.getUser().then(result => {
      if (result.data.user != null && result.data.user.email != null) {
        setEmail(result.data.user.email);
        setPreviousEmail(result.data.user.email);
      }
    });
  }, []);

  const checkIfEmailIsEditable = () => {
    setIsEmailEditable(!isEmailEditable);
    if (!isEmailEditable) {
      setPreviousEmail(currentEmail);
      setEmail('');
      emailInputRef.current?.focus();
      console.log(isEmailEditable);
    } else {
      setEmail(previousEmail);
    }
  };

  const checkIfPasswordIsEditable = () => {
    setIsPasswordEditable(!isPasswordEditable);
    if (!isPasswordEditable) {
      setPreviousPassword(currentPassword);
      setPassword('');
      passwordInputRef.current?.focus();
    } else {
      setPassword(previousPassword);
    }
  };

  const handleEmailEdit = (e: ChangeEvent<HTMLInputElement>) => {
    if (isEmailEditable) {
      setEmail(e.target.value);
    }
  };

  const handlePasswordEdit = (e: ChangeEvent<HTMLInputElement>) => {
    if (isPasswordEditable) {
      setPassword(e.target.value);
    }
  };

  const saveChanges = async () => {
    setResultMessage(null);
    const newUserData: UserData = {};
    if (currentEmail != previousEmail) newUserData.email = currentEmail;
    if (currentPassword != '********') newUserData.password = currentPassword;

    if (newUserData.email === undefined && newUserData.password === undefined) {
      console.log('ost');
      setErrorMessage('Ändra email eller lösenord');
    } else {
      const result = await props.supabase.auth.updateUser(newUserData);
      if (result.error) {
        if (
          newUserData.password != undefined &&
          newUserData.password.length < 8
        )
          setErrorMessage('Lösenordet måste vara minst 8 tecken');
        else setErrorMessage('Något blev fel!');
        // console.log(result.error.status);
      } else {
        setErrorMessage(null);
        if (newUserData.email === undefined) {
          setResultMessage('Lösenordet har ändrats!');
        } else if (newUserData.password === undefined) {
          setResultMessage(
            'Vi har skickat ett bekräftelsemail till din gamla adress. Klicka på länken i det för att byta till din nya email',
          );
          setPreviousEmail(currentEmail);
        } else
          setResultMessage(
            'Lösenordet har ändrats! Vi har också skickat ett bekräftelsemail till din gamla adress. Klicka på länken i det för att byta till din nya email  ',
          );
      }
    }
  };

  return (
    <section className="flex flex-col gap-8 w-full items-center">
      <h2 className={'w-full text-left text-2xl font-bold mb-4 font-inter'}>
        Profil
      </h2>
      <div className="flex flex-col gap-4 w-full">
        <h4 className="self-start dark:text-font_primary_subtle">Email</h4>
        <SettingsButtonInput
          title={currentEmail}
          icon={pencilIcon}
          inputRef={emailInputRef}
          clickFunction={checkIfEmailIsEditable}
          onChangeFunction={handleEmailEdit}
        />
      </div>
      <h4 className="self-start dark:text-font_primary_subtle">Lösenord</h4>
      <div className="flex flex-col gap-4 w-full">
        <SettingsButtonInput
          title={currentPassword}
          icon={pencilIcon}
          inputRef={passwordInputRef}
          clickFunction={checkIfPasswordIsEditable}
          onChangeFunction={handlePasswordEdit}
        />
      </div>
      <Button
        backgroundColor="bg-button_primary_orange"
        title="Spara ändringar"
        clickFunction={saveChanges}
      />
      {errorMessage != null ? (
        <p className="text-red-600">{errorMessage}</p>
      ) : (
        <></>
      )}
      {resultMessage != null ? (
        <p className="text-green-600">{resultMessage}</p>
      ) : (
        <></>
      )}
    </section>
  );
};

export default ProfileSettingsContainer;
