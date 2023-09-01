import React from 'react'
import Button from '@mui/material/Button';
import "./Compoment.css"

export default function Included() {
  return (
    <div className='justifycenter'>
      <div>
        <h2 className='mt-5 text-center'>We can take care, of everything.</h2>
        <p className='text-center'>Your Schedule matters. We'll work around for you for the ideal showing times</p>
        <p className='text-center'>You can select a lockbox solution that fits both agents and your showing needs.</p>
        <p className='text-center'>Your online tool will keep you up-to-date with real-time requests.</p>
        <p className='text-center'>Want to visit that special property you found online? Our experts would be happy to help</p>
        <div className='readbtn'>
       <Button  variant="contained">Learn more</Button>
       </div>
      </div>
    </div>
  )
}
