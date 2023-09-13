import { useState, useEffect, useId } from 'react'
import './App.css'
import { createClient } from '@supabase/supabase-js'
import OneSignal from 'react-onesignal';

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
  useEffect(() => {
    //getData();
    //login();
    //signup();
    
  }, []);

  return (
    <>
      <h1>Subbuddy</h1>
    </>
  )
}


//Temporary fetch test function for Supabase. Will only get subscription for user because of Supabase RLS(Row Level Security)
async function getData() {
  const { data } = await supabase.from("subscription").select();
  console.log(data);

}

//Temporary login test function
async function login() {
  const { data, error } = await supabase.auth.signInWithPassword({
  email: 'example2@email.com',
  password: 'example-password2',
  })
  console.log(data);
  insert();
  getData();


}

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
