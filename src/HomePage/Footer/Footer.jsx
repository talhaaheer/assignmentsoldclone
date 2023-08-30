// import React from 'react'
import "./Footer.css"
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
export default function Footer() {
  return (
    <div>
        <div className="row sellpro mt-5">
            <div className="col-lg-6 aligncenter justifycenter">
       <h3 className="dyw">Do You Want to sell your property?</h3> 
            </div>
            <div className="col-lg-6 btnlist">
            <Button className="wanttosell" variant="contained">List Your Property now.</Button>
            </div>
        </div>
        <div className="container mt-5">
 <div className="row">
          <div className="col-lg-4 "> <p className="hdingtext">EXPLORE ASSIGNMENTSOLD.CA </p> 
          <div className="row thisis">
            <p className="mt-5"> <LocationOnIcon className="footricon"/>Lorem ipsum dolor sit amet</p>
            <p> <LocalPhoneIcon className="footricon"/>Contact Us: +1 (588) 986-5960 </p>
            <p><EmailIcon className="footricon"/> Contact@Assignmentsold.ca</p>
            <div className="footricon">
            <FacebookIcon />
            <TwitterIcon/>
            <InstagramIcon/>
            <PinterestIcon/>
              </div> 
          </div>
          </div>

          <div className="col-lg-3 hdingtext">SELLING A PROPERTY</div>
          <div className="col-lg-3 hdingtext">BUYING A PROPERTY</div>
          <div className="col-lg-2 hdingtext">QUICK LINKS</div>
        </div>
        </div>
      </div>
    
  )
}
