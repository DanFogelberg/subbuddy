import { useState, useEffect } from 'react'
import './App.css'
import { createClient } from '@supabase/supabase-js'



//Supabase setup
const supabaseUrl:string = import.meta.env.VITE_SUPABASE_URL
  ? import.meta.env.VITE_SUPABASE_URL
  : ""
const supabaseKey: string = import.meta.env.VITE_SUPABASE_KEY
  ? import.meta.env.VITE_SUPABASE_KEY
  : ""
const supabase = createClient(supabaseUrl, supabaseKey)


function App() {
  const [count, setCount] = useState(0)
  
  //Temporary initial fetch from Supabase
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Subbuddy</h1>
    </>
  )
}


//Temporary test function for fetching data from Supabase
async function getData() {
  const { data } = await supabase.from("user").select();
  console.log(data);

}

export default App
