import React from 'react'
import SideBar from '../components/SideBar'
import MainContent from '../components/MainContent'

const Dashboard = () => {
  return (
    <div className='block md:flex h-screen w-screen'>
      <SideBar/>
      <MainContent/>
    </div>
  )
}

export default Dashboard
