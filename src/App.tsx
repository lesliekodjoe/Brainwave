import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from './components/Button';
import Header from './components/Header';


function App() {

  const handleClick = () => {
    console.log("Connected")
  }

  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
      </div>
    </>
  )
}

export default App
