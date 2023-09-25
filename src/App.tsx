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
import ProvidersContainer from './components/ProvidersContainer/ProvidersContainer';
import AddSubscriptionIcon from './components/AddSubscriptionIcon/AddSubscriptionIcon';
import AddSubscriptionContainer from './components/AddSubscriptionContainer/AddSubscriptionContainer';
import ProfileContainer from './components/AccountSettingsContainer/AccountSettingsContainer';
import BackIcon from './components/BackIcon/BackIcon';
import AccountSettingsContainer from './components/AccountSettingsContainer/AccountSettingsContainer';
import ProfileSettingsContainer from './components/ProfileSettingsContainer/ProfileSettingsContainer';
import NotificationsSettingsContainer from './components/NotificationsSettingsContainer/NotificationsSettingsContainer';

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


interface Provider{
  name:string;
  id: number;
}

function App() {
  //Temporary testing function for Supabase
  const [signedIn, setSignedIn] = useState(false);
  const [subscriptions, setSubscriptions] = useState<Array<any>>([]); //Fix typescript
  const [providers, setProviders] = useState<Array<any>>([]); //Fix typescript
  const [topProviders, setTopProviders] = useState<Array<any>>([]);
  const [categoryProviders, setCategoryProviders] = useState<Array<any>>([]);
  const [services, setServices] = useState<Array<any>>([]); //Fix typescript
  const [totalCost, setTotalCost] = useState<number>(0);
  const [streamingCost, setStreamingCost] = useState<number>(0);
  const [musicCost, setMusicCost] = useState<number>(0);
  const [paperCost, setPaperCost] = useState<number>(0);
  const [addedProvider, setAddedProvider] = useState<Provider>({name: "", id: 0});
  const [addedProviderServices, setAddedProviderServices] = useState<Array<Provider>>([]);
  
  const [view, setView] = useState<string>("home"); //Limit options here  "home" "subscriptions" "profile"
  const [subscriptionsView, setSubscriptionsView] = useState<string>("allSubs"); //Views on "subscriptions" page: allSubs categories search
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
  }, []);

  useEffect(() => {
    calculateCosts();
  }, [subscriptions]);

  useEffect(() => {
    const newCategoryProviders:Array<any> = [];
    providers.forEach((provider) => {
      if(provider.category === categoryView) newCategoryProviders.push(provider);
    })
    setCategoryProviders(newCategoryProviders);
  }, [categoryView])

  useEffect(() => {
    const newAddedProviderServices:Array<Provider> = [];
    services.forEach((service) => {
      if(service.provider_id === addedProvider.id) newAddedProviderServices.push(service);
    })
    setAddedProviderServices(newAddedProviderServices);
  },[addedProvider] )

  useEffect(() => {
    setView("home");

  },[signedIn])

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
        let cost = 0;
        if(subscription.cost) {
          cost = subscription.cost;
        }else {
          cost = subscription.service.cost;
        }

        totalCost += cost;
        if(subscription.service.provider.category === "streaming") streamingCost += cost;
        else if(subscription.service.provider.category === "music") musicCost += cost;
        else if(subscription.service.provider.category === "paper") paperCost += cost; //Fix!
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
          <AddSubscriptionIcon setSubscriptionsView={setSubscriptionsView}/>
          {subscriptions.map((subscription, id) => {
            return <ActiveSubscriptionCard subscription={subscription} supabase={supabase} key={id}/>
          })}
        </>  
        : subscriptionsView === "search" ? 
        <>
          <BackIcon setView={() => {setSubscriptionsView("allSubs")}} />
          <h2>Kategorier</h2>
          <CategoriesContainer setCategoryView = {setCategoryView} setSubscriptionsView = {setSubscriptionsView}/>
          <h2>Populära subs</h2>
          <ProvidersContainer providers={topProviders} supabase={supabase} setSubscriptionsView={setSubscriptionsView} setAddedProvider={setAddedProvider}/>
          
        </> 
        : subscriptionsView === "category" ? 
        <>
           <BackIcon setView={() => {setSubscriptionsView("search")}} />
          {/* Needs own component for picking title based on categoryView. */}
          <h1>{categoryView}</h1> 
          <ProvidersContainer providers={categoryProviders} supabase={supabase} setSubscriptionsView={setSubscriptionsView} setAddedProvider={setAddedProvider}/>
          
        </> 
        : //Addsub
        <>
          <BackIcon setView={() => {setSubscriptionsView("search")}} />
          <h2>{addedProvider.name}</h2>
          <AddSubscriptionContainer services={addedProviderServices} supabase={supabase}/>
          
        </>
      : profileView === "myAccount" ?
      <> 
        <AccountSettingsContainer supabase={supabase} setSignedIn={setSignedIn} setProfileView={() => setProfileView("profile")} setNotificationsView={() => setProfileView("notifications")}/>
      </>
      : profileView === "profile" ?
      <>
        <BackIcon setView={() => {setProfileView("myAccount")}} />
        <ProfileSettingsContainer currentEmail='Lägg till det email som används' currentPassword='Lägg till användarens lösenord?'/>
      </>
      :
      <>
        <BackIcon setView={() => {setProfileView("myAccount")}} />
        <NotificationsSettingsContainer />
      </>
      }
      <Menu setView = {setView}/>
    </>
  )

  return (<LoginForm supabase = {supabase} setSignedIn = {setSignedIn} getSubscriptions = {getSubscriptions}/>)
}


export default App
