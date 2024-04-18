import React from 'react'
import SignUpInput from '../components/SignUpInput'
import SideBar from '../components/SideBar';


const SignUp = () => {
  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto px-4 md:px-8">
      <SideBar />
      <SignUpInput />
    </div>
  );
}

export default SignUp
