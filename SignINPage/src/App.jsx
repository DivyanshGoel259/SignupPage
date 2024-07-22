import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route,Routes,useNavigate} from "react-router-dom"
import React,{Suspense} from "react"
const SignIn = React.lazy(()=>import("./components/SignInCard"))
const SignUp = React.lazy(()=>import("./components/LoginCard"))


function App() {


  return (
    <>
    
    
    <BrowserRouter>
    
    <Suspense fallback={<div className="flex justify-center items-center h-screen">
    <div className="border-4  border-gray-100 border-solid rounded-full h-10 w-10 animate-spin" style={{ borderTopColor: '#3498db' }}></div>
  </div>}>
    <Routes>
      <Route path="/" element = {<AppBar/>}/>
      <Route path='/Signup' element = {<SignUp/>}/>
      <Route path='/Signin' element = {<SignIn/>}/>
    </Routes>
    </Suspense>
    
    </BrowserRouter>
    </>
  )
}

function AppBar(){
  const navigate = useNavigate()

  return <div className={"flex  justify-center p-4 items-center"}>
    <button className={"rounded-full py-[6px] px-4 bg-[#E6E6E6] text-[#808080] hover:text-blue-800 hover:font-semibold hover:bg-green-100"} onClick={()=>{
      navigate("/Signup")
    }}>
      SignUp
    </button>
    <button className={"rounded-full py-[6px] px-4 bg-[#E6E6E6] text-[#808080] hover:bg-green-100 hover:text-blue-800 hover:font-semibold ml-2"} onClick={()=>{
      navigate("/Signin")
    }}>
      SignIn
    </button>
  </div>
}

export default App
