import React from 'react'
import './Header.css'
import Rangeslider from '../Rangeslider/Rangeslider'
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
    <div className="col-lg-3"> 
    <div className="row">
        <div className="col-lg-6">
            <Rangeslider/>
        </div>
        <div className="col-lg-6">
        <Rangeslider/>

        </div>
    </div>
     </div>
    <div className="col-lg-5"> buton</div>
</div>
    </div>
    <div className="col-lg-1">
    srch
    </div>
    </div>
    </div>
    
    </div>
  )
}

export default Header