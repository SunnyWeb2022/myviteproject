// import { useContext, useState } from 'react'
// import UserAppProvider from './assets/contextapi/UserContext'

// import './App.css'
import UserAppProvider from "./assets/contextapi/UserContext"
// import Context from "./assets/contextapi/context"


function App() {
 
  //  const [myName,setmyName]=useState(AppContextapi)

  return (
    <>
      <div className="container mx-auto border bg-pink-700 mt-10 text-center p-5 rotate-0 rounded-full ">
       <h1 className='text-3xl font-bold bg-green text-white py-4'>Hello Web</h1>
        <button class="bg-green-700 px-4 font-bold border-0 outline-none py-2 text-white hover:bg-yellow-600 sm:px-8 sm:py-3 rounded-xl">After</button>

        <UserAppProvider />
       {/* <Context /> */}
      </div>
       
    </>
  )
}

export default App
