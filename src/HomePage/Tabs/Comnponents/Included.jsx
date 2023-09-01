import React from 'react'
import Button from '@mui/material/Button';
import "./Compoment.css"

export default function Included() {
  return (
    <div className='justifycenter'>
      <div>
        <h2 className='mt-5 text-center'>Everything an Agent can do... And More!</h2>
        <p className='text-center'>You can experience the benefits of being on REALTOR.CA (provided by PG Direct Realty LTD.)</p>
        <p className='text-center'>Professional signage, photos, virtual tours and social media postings.</p>
        <p className='text-center'>Direct access to PG Direct Realty LTD. services to help you set you price, manage offers, negotiations, and even showings.</p>
        <p className='text-center'>Want cash back when buying your next property?</p>
        <div className='readbtn'>
       <Button  variant="contained">Learn more</Button>
       </div>
      </div>
    </div>
  )
}
