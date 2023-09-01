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
            <div className="footriconing">
            <FacebookIcon />
            <div className="p-1"></div>
            <TwitterIcon/>
            <div className="p-1"></div>
            <InstagramIcon/>
            <div className="p-1"></div>
            <PinterestIcon/>
              </div> 
          </div>
          </div>

          <div className="col-lg-3"> <p className="hdingtext">   SELLING A PROPERTY</p>
          <div className="row">
            <p className="mt-5">How Does it Work</p>
            <p>Will my Listing be Seen</p>
            <p>How Much could I save</p>
            <p>Pricing</p>
            <p>Payment options</p>
          </div>
          </div>
          <div className="col-lg-3"> <p className="hdingtext">BUYING A PROPERTY</p> 
          <div className="row">
            <p className="mt-5">Why buy a Home with AssignmentSold</p>
            <p> How it Works</p>
            <p>House Hunting Tools</p>
          </div>
          </div>
        
          <div className="col-lg-2"> <p className="hdingtext">QUICK LINKS</p> 
          <div className="row">
            <p className="mt-5"> About Us</p>
            <p>Sell similar property</p>
            <p></p>
          </div>
          </div>
        </div>
        </div>
      </div>
    
  )
}
