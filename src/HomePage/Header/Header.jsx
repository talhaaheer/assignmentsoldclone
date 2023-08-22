// import * as React from 'react';
import './Header.css'
import Rangeslider from '../Rangeslider/Rangeslider'
import Dropdown from 'react-bootstrap/Dropdown';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import BedIcon from '@mui/icons-material/Bed';
import Button from '@mui/material/Button';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
function Header() {
  return (
    <div>
        <div className='asign'><h3 className='assignmet p-2 m-0'>Assignments</h3></div>
    <div className='hedercls'>
    <div className="row headerrow">
        {/* <div className='p-1'></div> */}
    <div className="col-lg-11">
<div className="row p-2">
    <div className="col-lg-4">search</div>
    <div className="col-lg-3 rangeslidr"> 
    <div className="row">
        <div className="col-lg-6">
            <Rangeslider/>
        </div>
        <div className="col-lg-6">
        <Rangeslider/>

        </div>
    </div>
     </div>
    <div className="col-lg-5">
        <div className="row">
            <div className="col-lg-4 buldtyp">
            <Dropdown>
      <Dropdown.Toggle className='buildbutn' variant="" id="dropdown-basic">
        <ApartmentOutlinedIcon/>Building Type
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
        <BedIcon/>Beds
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
            <div className="col-lg-4 colfilter">
            <Button className='flter' variant="outlined"> <FilterListIcon/>Filter</Button>
            </div>
        </div>
    </div>
</div>
    </div>
    <div className="col-lg-1">
    <SearchIcon className='serchicon'/>
    </div>
    </div>
    </div>
    
    </div>
  )
}

export default Header