// import * as React from 'react';
import './Header.css'
import Rangeslider from '../Rangeslider/Rangeslider'
import Dropdown from 'react-bootstrap/Dropdown';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import BedIcon from '@mui/icons-material/Bed';
import Button from '@mui/material/Button';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import Autocompletee from '../Autocomplete/Autocompletee';
import MapIcon from '@mui/icons-material/Map';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import { useState } from 'react';
function Header() {
  const [activebutton,setActiveButton] =useState('mixed');
  const [count,setCount] = useState(0);
  const [ccount,setcCount] = useState(7);
  const handleMixedClick= () =>{
    setActiveButton("mixed")
  }
  const handleListClick= () =>{
    setActiveButton("list")
  }
  const handleMapClick= () =>{
  setCount(count+2)
    setActiveButton("Map")
  }
  const handleIncrement= () =>{
  setCount(count+1)
  }
  const handleDecrement= () =>{
    setCount(count-2)
  }


  console.log("Button present state", activebutton);
  return (
    <div>
      <div className='asign'><h3 className='assignmet p-2 m-0'>Assignments</h3></div>
      <div className='hedercls'>
        <div className="row headerrow">
          {/* <div className='p-1'></div> */}
          <div className="col-lg-11">
            <div className="row p-2">
              <div className="col-lg-4 pt-2 pb-2">
                <Autocompletee />
              </div>
              <div className="col-lg-3 rangeslidr pt-2 pb-2">
                <div className="row">
                  <div className="col-lg-6">
                    <Rangeslider />
                  </div>
                  <div className="col-lg-6">
                    <Rangeslider />
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="row pt-2 pb-2">
                  <div className="col-lg-4 buldtyp">
                    <Dropdown>
                      <Dropdown.Toggle className='buildbutn' variant="" id="dropdown-basic">
                        <ApartmentOutlinedIcon />Building Type
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="col-lg-4 colbed">
                    <Dropdown>
                      <Dropdown.Toggle className='beds' variant="" id="dropdown-basic">
                        <BedIcon />Beds
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="col-lg-4 colfilter">
                    <Button className='flter' variant="outlined"> <FilterListIcon />Filter</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1 colsearch">
            <SearchIcon className='serchicon' />
          </div>
        </div>
      </div>

      <div className="container">
        <div>
          <h1>Count: {count} </h1>
          <button className="btn-primary btn " onClick={handleIncrement}>Increment</button>
          <button className="btn-warning btn" onClick={handleDecrement}>Decrement</button>
        </div>
        {
          count === 2 || ccount === 6 ? (
            <div>
            Hello I am visible
          </div>
          ) : (   <div>
            Hello I am invisible
          </div>)
        }

     

        
        <div className="row mt-5">
          <div className="col-lg-6 col-12">
            <h4 className='lprice'>
              At Low Price <span className='rsult'>(Results 20)</span>
            </h4>
          </div>
          <div className="col-lg-6 col-12 fourbtn">
            <Button className='sorti' variant="contained"><UnfoldLessIcon/>Sorting</Button>
            <div className='srchtt'></div>
            <Button  variant="outlined" onClick={handleMixedClick}>
              <div className={activebutton === "mixed" ? 'partdvtwo': "partdv"}>
                <div>
                  <CloseFullscreenIcon className={activebutton ==="mixed" ? "icnstwo":"icns" } />
                </div>
                <div >
                  Mixed
                </div>
              </div>
            </Button>
            <Button onClick={handleListClick} variant="text">
              <div  className={activebutton === "list" ? 'partdvtwo': "partdv"}>
                <div>
                  <FormatListBulletedIcon  className={activebutton ==="list" ? "icnstwo":"icns"} />
                </div>
                <div>
                  List
                </div> </div>
            </Button>
            <Button onClick={handleMapClick} variant="text">
              <div className={activebutton === "Map" ? 'partdvtwo': "partdv"}>
                <div>
                  <MapIcon className={activebutton ==="Map" ? "icnstwo":"icns"} />
                </div>
                <div>
                  Map
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header