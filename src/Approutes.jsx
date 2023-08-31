import React from 'react'
import {Route,Routes} from "react-router-dom"
import App from './App'
import Listing from "./HomePage/Listing/Listing"
import Listproperties from "./HomePage/Listproperties/Listproperties"
import Howitworks from "./HomePage/Howitworks/Howitworks"
import Finddeals from "./HomePage/Finddeals/Finddeals"
// import Findanagent from "./HomePage/Findanagent/Findanagent"

export default function Approutes() {
  return (
    <>
      <Routes>
        <Route path = "/" Component={App}/>
        <Route path = "/Listing" Component={Listing}/>
        <Route path = "/Listproperties" Component={Listproperties}/>
        <Route path = "/Howitworks" Component={Howitworks}/>
        <Route path = "/Finddeals" Component={Finddeals}/>
        {/* <Route path = "/Findanagent" Component={Findanagent}/> */}
      </Routes>
    </>
  )
}
