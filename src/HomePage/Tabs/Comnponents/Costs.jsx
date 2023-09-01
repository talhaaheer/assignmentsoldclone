import React from 'react'
import Button from '@mui/material/Button';
import "./Compoment.css"


export default function Costs() {
  return (
    <div className='justifycenter'>
          <div>
       <h2 className='mt-5 text-center'>Custom Pricing. Avoid unfair commisions.</h2>
       <p className='text-center'>Customized local packages tailored to your specific requirements</p>
       <p className='text-center'>You Custom marketing plan puts you in the driver's seat and is fully upgradable anytime</p>
       <p className='text-center'>You can save thousands in unfair commissions</p>
       <p className='text-center'>How much can you save?</p>
       <div className='readbtn'>
       <Button  variant="contained">Read Me</Button>
       </div>
      
        </div>
        
    </div>
  )
}
