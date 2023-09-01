
import './App.css'
// import Navbars from "./HomePage/Navbar/Navbar"
import Marquees from './HomePage/Marquee/Marquee';
import Agentpic from './HomePage/Agentpic/Agentpic';
import Header from './HomePage/Header/Header';
import Maincards from './HomePage/Cards/Cards';
import Footer from './HomePage/Footer/Footer';
import Navbartwo from './HomePage/Navbar/Navbartwo';
import Tabs from './HomePage/Tabs/Tabs';


function App() {

  return (
    <div className='pb-10'>
      <Navbartwo/>
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
        <Maincards/>
      </div>
      <div className="container">
        <h1 className='mt-5 text-center '>The <span className='blueclr'>Assignment Sold.ca</span> Difference </h1>
      <h5 className='text-center'>Forward thinking real estate trusted for over 25 years</h5>
      <h4 className='text-center'>Here’s how it works</h4>
      </div>
      <div className="container mt-5">
      <Tabs/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
