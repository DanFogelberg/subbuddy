import { useState, useEffect, useId } from 'react'
import './App.css'
import { createClient } from '@supabase/supabase-js'
import OneSignal from 'react-onesignal';

import LoginForm from './components/LoginForm/LoginForm';
import Menu from './components/Menu/Menu';
import SubscriptionsList from './components/SubscriptionsList/SubscriptionsList';

async function runOneSignal() {
  await OneSignal.init({ appId: 'd5240cd1-4a30-42cc-9279-5a7155b27fba'});
  OneSignal.Slidedown.promptPush();
}
if(location.hostname === "subbuddy.vercel.app") runOneSignal();

//Supabase setup
const supabaseUrl:string = import.meta.env.VITE_SUPABASE_URL
  ? import.meta.env.VITE_SUPABASE_URL
  : ""
const supabaseKey: string = import.meta.env.VITE_SUPABASE_KEY
  ? import.meta.env.VITE_SUPABASE_KEY
  : ""
const supabase = createClient(supabaseUrl, supabaseKey)


function App() {
  //Temporary testing function for Supabase
  const [signedIn, setSignedIn] = useState(false);
  const [subscriptions, setSubscriptions] = useState<Array<string>>([]); //Fix typescript
  const [providers, setProviders] = useState<Array<string>>([]); //Fix typescript
  const [services, setServices] = useState<Array<string>>([]); //Fix typescript

  //Example typescript for useStates
  // const [titles, setTitles]: [
  //   titles: titleObject[],
  //   setTitles: React.Dispatch<React.SetStateAction<titleObject[]>>
  // ] = useState<Array<titleObject>>([]); //**För att typa titles måste vi type setTitles


  useEffect(() => {
    getProviders();
    getServices();
    //login();
    //signup();
  }, []);

  async function getSubscriptions() {
    const { data } = await supabase.from("subscription").select("*, service(id, name, provider(id, name)))");
    if(data === null) setSubscriptions([]);
    else setSubscriptions(data); //Should get provider and service for each subscription
    console.log(data);
  }

  async function getProviders() {
    const { data } = await supabase.from("provider").select();
    if(data === null) setProviders([]);
    else setProviders(data); //Should get provider and service for each subscription
    console.log(data);
  }
  
  async function getServices() {
    const { data } = await supabase.from("service").select();
    if(data === null) setServices([]);
    else setServices(data); //Should get provider and service for each subscription
    console.log(data);
  }

  return (
    <>
      <h1>Subbuddy</h1> 
      {signedIn ? <SubscriptionsList subscriptions = {subscriptions} supabase = {supabase}/> : <><LoginForm supabase = {supabase} setSignedIn = {setSignedIn} getSubscriptions = {getSubscriptions} /><Menu/></>}
    </>
  )
}




//Temporary fetch test function for Supabase. Will only get subscription for user because of Supabase RLS(Row Level Security)





//Temporary sign up test function
async function signup() {
  const { data, error } = await supabase.auth.signUp({
  email: 'example2@email.com',
  password: 'example-password2',
  })
  console.log(data);
}

//Temporary insert test function
async function insert() {
  const { data, error } = await supabase.from("subscription").insert({
  user_id: ((await supabase.auth.getUser()).data.user?.id) ,
  service_id: 1,
  next_payment: "2000-01-01"
  })
  console.log(data);
  console.log(error);
}


export default App
