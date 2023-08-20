import { useState } from 'react'
import './App.css'
import Navbars from "./HomePage/Navbar/Navbar"
import SoccerCard from './HomePage/SoccerCArd/SoccerCard';
import Accordians from "./HomePage/accordians/Accordians"
import Marquees from './HomePage/Marquee/Marquee';

function App() {

  return (
    <>
      <Navbars/>
      <Marquees/>
      <div className="container">
      <SoccerCard/>
      < Accordians/>
      </div>
    </>
  )
}

export default App
