import React from 'react'
import Button from '@mui/material/Button';
import "./Compoment.css"

export default function Included() {
  return (
    <div className='justifycenter'>
      <div>
        <h2 className='mt-5 text-center'>You will be guided through the process with our experts!</h2>
        <p className='text-center'>You can recieve the expert analysis to help price your property</p>
        <p className='text-center'>You can access our local experts that have vast industry experience with your local market</p>
        <p className='text-center'>Your opinion and knowledge matters and will be taken into consideration in helping you price your house right</p>
        <p className='text-center'>Want cash back when buying your next property?</p>
        <div className='readbtn'>
       <Button  variant="contained">Learn more</Button>
       </div>
      </div>
    </div>
  )
}
