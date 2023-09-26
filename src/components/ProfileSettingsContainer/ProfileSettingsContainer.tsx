import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import SettingsButton from '../SettingsButton/SettingsButton';
import pencilIcon from '../../assets/icons/pencil-icon.svg';
import Button from '../Button/Button';
import SettingsButtonInput from '../SettingsButtonInput/SettingsButtonInput';
import { SupabaseClient } from '@supabase/supabase-js';

interface ProfileSettingsContainerProps {
  supabase:SupabaseClient;
}

interface UserData{
  email?:string;
  password?:string;
}

const ProfileSettingsContainer: React.FC<ProfileSettingsContainerProps> = (props) => {
  const [currentEmail, setEmail] = useState('');
  const [currentPassword, setPassword] = useState('********');
  const [previousEmail, setPreviousEmail] = useState('');
  const [previousPassword, setPreviousPassword] = useState('');
  const [isEmailEditable, setIsEmailEditable] = useState(false);
  const [isPasswordEditable, setIsPasswordEditable] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    props.supabase.auth.getUser().then((result) => {
      if(result.data.user != null && result.data.user.email != null) setEmail(result.data.user.email);
    })


  },[])

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
  }

  const checkIfPasswordIsEditable = () => {
    setIsPasswordEditable(!isPasswordEditable);
    if (!isPasswordEditable) {
        setPreviousPassword(currentPassword);
        setPassword('');
        passwordInputRef.current?.focus();
    } else {
        setPassword(previousPassword);
    }
  }

  const handleEmailEdit = (e:ChangeEvent<HTMLInputElement>) => {
    if(isEmailEditable) {
        setEmail(e.target.value);
    }
  };

  const handlePasswordEdit = (e:ChangeEvent<HTMLInputElement>) => {
    if(isPasswordEditable) {
        setPassword(e.target.value);
    }
  };

  const saveChanges = () => {
    console.log('Ändringar sparade!');
    const newUserData:UserData={};
    if(currentEmail != previousEmail) newUserData.email = currentEmail;
    if(currentPassword != '********') newUserData.password = currentPassword;


    props.supabase.auth.getUser().then((result)=>{console.log(result)});
    if(newUserData.email != undefined || newUserData.password != undefined) props.supabase.auth.updateUser(newUserData).then((result)=> console.log(result))
  };

  return (
    <section className="flex flex-col gap-8 w-full items-center">
      <h3>Profil</h3>
      <div className="flex flex-col gap-4 w-full">
        <h4 className="self-start">Email</h4>
        <SettingsButtonInput 
            title={currentEmail}
            icon={pencilIcon}
            inputRef={emailInputRef}
            clickFunction={checkIfEmailIsEditable}
            onChangeFunction={handleEmailEdit}/>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <SettingsButtonInput 
            title={currentPassword}
            icon={pencilIcon}
            inputRef={passwordInputRef}
            clickFunction={checkIfPasswordIsEditable}
            onChangeFunction={handlePasswordEdit}/>
        <h4 className="self-start">Lösenord</h4>
      </div>
      <Button title="Spara ändringar" clickFunction={saveChanges} />
    </section>
  );
};

export default ProfileSettingsContainer;
