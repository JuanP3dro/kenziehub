import React from 'react'
import UserProvider from '../../contexts/userContext'
import Header from './headerHome'
import MainHome from './mainHome'
import Navbar from './navbar'

function Home() {
  return (
    <div>
      <UserProvider>
        <Navbar/>
        <Header/>
        <MainHome/>
      </UserProvider>
      
    </div>
  )
}

export default Home