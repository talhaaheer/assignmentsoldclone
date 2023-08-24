// import React from 'react'
import "./Footer.css"
import Button from '@mui/material/Button';
export default function Footer() {
  return (
    <div>
      <div className="  mt-5">
        <div className="row sellpro">
            <div className="col-lg-6 aligncenter justifycenter">
       <h3 className="dyw">Do You Want to sell your property?</h3> 
            </div>
            <div className="col-lg-6 btnlist">
            <Button className="wanttosell" variant="contained">List Your Property now.</Button>

            </div>
        </div>
      </div>
    </div>
  )
}
