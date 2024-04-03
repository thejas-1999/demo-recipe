import React, { useState } from 'react'

const Login = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
  return (
    <div>
        <div className='bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative'>
            <h1 className='text-4xl font-bold text-center'>Login</h1>
            <form action="">
                <div className='relative my-4'>
                    <input type="text" name="username" id="username" className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='username'/>
                    <label htmlFor="" className='absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}>Username</label>
                </div>
                <div className='relative my-4'>
                    <input type="password" name="password" id="password" className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='password'/>
                    <label htmlFor="" className='absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>Password</label>
                </div>
                <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </div>
            </form>
        </div>
    </div>
  )
}

export default Login