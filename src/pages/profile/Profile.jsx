import "./Profile.css"
import React from 'react'


import Card from "../../components/card/card"
import data from './User'
import Navbar from "../../components/navbar/Navbar"

const Profile = () => {

  return (
    <>
    <Navbar/>
    <div className="cards-wrapper">
  
    <div className="cards">
    <Card data={data}/>
    </div>
    </div>
    </>
  )
}
 export default Profile