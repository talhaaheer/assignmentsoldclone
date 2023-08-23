
import './App.css'
import Navbars from "./HomePage/Navbar/Navbar"
import Marquees from './HomePage/Marquee/Marquee';
import Agentpic from './HomePage/Agentpic/Agentpic';
import Header from './HomePage/Header/Header';
import Cards from './HomePage/Cards/Cards';

function App() {

  return (
    <div className='pb-10'>
      <Navbars/>
      <div className="container  mt-2">
      <div>
       <h1 className='liveoff'>Live Off-Market Inventory</h1> 
      </div>
      </div>
      <Marquees/>
      <div className="container mt-3">
      <Agentpic/>
      </div>
      <div className="container mt-3">
      <Header/>
      </div>
      <div className="container mt-5">
        <Cards/>
      </div>
    </div>
  )
}

export default App
