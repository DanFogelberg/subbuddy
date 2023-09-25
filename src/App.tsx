import { useState, useEffect, useId } from 'react'
import './App.css'
import { createClient } from '@supabase/supabase-js'
import OneSignal from 'react-onesignal';

import LoginForm from './components/LoginForm/LoginForm';
import Menu from './components/Menu/Menu';
import MonthlyCostCard from './components/MonthlyCostCard/MonthlyCostCard';
import StatisticsCard from './components/StatisticsCard/StatisticsCard';
import UpcomingPaymentsContainer from './components/UpcomingPaymentsContainer/UpcomingPaymentsContainer';
import CategoriesContainer from './components/CategoriesContainer/CategoriesContainer';
import ActiveSubscriptionCard from './components/ActiveSubscriptionCard/ActiveSubscriptionCard';
import AddSubscriptionCard from './components/AddSubscriptionCard/AddSubscriptionCard';
import PopularSubscriptionsContainer from './components/PopularSubscriptionsContainer/PopularSubscriptionsContainer';
import AddSubscriptionIcon from './components/AddSubscriptionIcon/AddSubscriptionIcon';

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
  const [subscriptions, setSubscriptions] = useState<Array<any>>([]); //Fix typescript
  const [providers, setProviders] = useState<Array<any>>([]); //Fix typescript
  const [topProviders, setTopProviders] = useState<Array<any>>([]);
  const [services, setServices] = useState<Array<any>>([]); //Fix typescript
  const [totalCost, setTotalCost] = useState<number>(0);
  const [streamingCost, setStreamingCost] = useState<number>(0);
  const [musicCost, setMusicCost] = useState<number>(0);
  const [paperCost, setPaperCost] = useState<number>(0);
  
  const [view, setView] = useState<string>("home"); //Limit options here  "home" "subscriptions" "profile"
  const [subscriptionsView, setSubscriptionsView] = useState<string>("search"); //Views on "subscriptions" page: allSubs categories search
  const [categoryView, setCategoryView] = useState<string>(""); //Sets content on subscriptions category page: streaming, paper, music

  const [profileView, setProfileView] = useState<string>("myAccount"); //Vies on "profile" page: myAccount, profile, notifications

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

  useEffect(() => {
    calculateCosts();
  }, [subscriptions]);

  async function getSubscriptions() {
    const { data } = await supabase.from("subscription").select("*, service(id, name, days_per_payment, cost, provider(id, name, category, logo)))");
    if(data === null) setSubscriptions([]);
    else setSubscriptions(data);
    console.log(data);
  }

  async function getProviders() {
    const { data } = await supabase.from("provider").select();
    if(data === null) setProviders([]);
    else {
      setProviders(data);
      setTopProviders(data.slice(0,3)) //Not actually top providers right now. Providers fetch should be ordered in some way.
    }
  }


  const calculateCosts = () => {
    let totalCost = 0;
    let streamingCost = 0;
    let musicCost = 0;
    let paperCost = 0;
    const today = new Date();
    subscriptions.forEach((subscription) => {
      let date = new Date(subscription.next_payment);
      while(date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear() && date.getDate() > today.getDate()) //What to do when date has passed?
      {
        totalCost += subscription.service.cost;
        if(subscription.service.provider.category === "streaming") streamingCost += subscription.service.cost;
        else if(subscription.service.provider.category === "music") musicCost += subscription.service.cost;
        else if(subscription.service.provider.category === "paper") paperCost += subscription.service.cost; //Fix!
        date.setDate(date.getDate() + subscription.service.days_per_payment);
      }
      setTotalCost(totalCost);
      setStreamingCost(streamingCost);
      setMusicCost(musicCost);
      setPaperCost(paperCost);
    })  
  }
  
  async function getServices() {
    const { data } = await supabase.from("service").select();
    if(data === null) setServices([]);
    else setServices(data); 
  }

  

  if(signedIn) return (
    <>
      <h1>Subbuddy</h1>
      {view ===  "home" ? <>
        <MonthlyCostCard totalCost = {totalCost}/>
        <UpcomingPaymentsContainer subscriptions = {subscriptions} supabase = {supabase}/>
        <h2>statistik</h2>{/* temp h2 */}
        {streamingCost > 0 ? <StatisticsCard name = "Streaming" cost = {streamingCost}/>: <></>}
        {musicCost > 0 ? <StatisticsCard name = "Music" cost = {musicCost}/>: <></>}
        {paperCost > 0 ? <StatisticsCard name = "Tidning" cost = {paperCost}/>: <></>}
      </> 
      : view === "subscriptions" ? 
        subscriptionsView === "allSubs" ? 
        <>
          {subscriptions.map((subscription, id) => {
            return <ActiveSubscriptionCard subscription={subscription} supabase={supabase} key={id}/>
          })}
          
        </>  
        : subscriptionsView === "search" ? 
        <>
          <h2>Kategorier</h2>
          <AddSubscriptionIcon />
          <CategoriesContainer setCategoryView = {setCategoryView} setSubscriptionsView = {setSubscriptionsView}/>
          <h2>Populära subs</h2>
          <PopularSubscriptionsContainer topProviders={topProviders} supabase={supabase}/>
          
        </> 
        : subscriptionsView === "category" ? 
        <>
          <p onClick = {() => {setSubscriptionsView("addSubscription")}}>Här är den specifika kategorin: {categoryView}. Tjohej! .map och kolla kategori.</p>
        </> 
        : //Addsub
        <>
          Här lägger vi till en specifik sub! Borde vara en egen modul där vi skickar ner subben.
        </>
      : profileView === "myAccount" ?
      <> 
        <h2 onClick = {() => setProfileView("profile")}>profajl</h2>
        <h2 onClick = {() => setProfileView("notifications")}>notifications</h2>
      </>
      : profileView === "profile" ?
      <>
        <h2 onClick = {() => setProfileView("myAccount")}>Back</h2>
        <h2>Det är profile</h2>
      </>
      :
      <>
        <h2 onClick = {() => setProfileView("myAccount")}>Back</h2>
        <h2>Det är notifications</h2>
      </>
      }
      <Menu setView = {setView}/>
    </>
  )

  return (<LoginForm supabase = {supabase} setSignedIn = {setSignedIn} getSubscriptions = {getSubscriptions}/>)
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
