
import './App.css'
import Navbars from "./HomePage/Navbar/Navbar"
import Marquees from './HomePage/Marquee/Marquee';
import Agentpic from './HomePage/Agentpic/Agentpic';
import Header from './HomePage/Header/Header';

function App() {

  return (
    <>
      <Navbars/>
      <div className="container  mt-2">
      <div>
       <h1>Live Off-Market Inventory</h1> 
      </div>
      </div>
      <Marquees/>
      <div className="container mt-3">
      <Agentpic/>
      </div>
      <div className="container mt-3">
      <Header/>
      </div>
    </>
  )
}

export default App
