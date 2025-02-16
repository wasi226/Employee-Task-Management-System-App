import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  
  const submitHandler=(e)=>{
    e.preventDefault()
    handleLogin(email,password)
    setEmail("")
    setPassword("")
  }
   

  return (
    <div className='LoginPage w-full h-screen  bg-gradient-to-bl from-black via-green-900 to-black flex items-center justify-center' >
        <div className='card w-[30%] h-[50%] bg-gradient-to-br from-black to-green-800 rounded-xl flex items-center justify-center text-white flex-col p-5' >
            <h1 className='text-3xl font-semibold mb-5'>Login</h1>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='text-white flex items-center justify-center flex-col'>


            {/*Email*/}
            <input value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }} required className='w-full border-1 text-xl my-2 p-2' type="email" placeholder='Enter your email' />
            

            {/*Password*/}
            <input value={password} onChange={(e)=>{
               setPassword(e.target.value)
            }}
             required className='w-full border-1 text-xl my-2 p-2' type="password" placeholder='Enter password' />
            
            
            <button className='bg-green-800 text-white hover:bg-green-600 px-5 py-2 rounded-full cursor-pointer active:scale-95 mt-3'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Login
