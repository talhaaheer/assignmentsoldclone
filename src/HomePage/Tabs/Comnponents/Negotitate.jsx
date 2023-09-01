import React from 'react'
import Button from '@mui/material/Button';
import "./Compoment.css"

export default function Included() {
  return (
    <div className='justifycenter'>
      <div>
        <h2 className='mt-5 text-center'>Negotitate and close the deal.</h2>
        <p className='text-center'>Your offers, negotiations and the paperwork can be handled for you.</p>
        <p className='text-center'>You have the option to have buyers or agents send offers directly to your custom dashboard.</p>
        <p className='text-center'>You can access our experienced real estate lawyers to provide guidaance and advice, all the way to closing</p>
        <p className='text-center'>Buyers can enjoy our handy OfferMaker.</p>
        <div className='readbtn'>
       <Button  variant="contained">Learn more</Button>
       </div>
      </div>
    </div>
  )
}
