import React from 'react'
import Header from '../components/Header'
import Input from '../components/Input'

const Login = () => {
  return (
    <div className='bg-black/30 h-screen flex justify-center items-center'>
      <div className="bg-white text-black rounded-md px-4 py-3 mx-5 ">
            <Header value='Login Here' headerClass='text-2xl text-center mb-2'/>
            <Input labelValue='Username' inputClass='block py-5 border my-2 border-gray-700 px-4 rounded-md hover:outline-none' inputName='username' holder='Eg. John Doe'/>

      </div>
    </div>
  )
}

export default Login
