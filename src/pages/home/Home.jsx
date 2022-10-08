import Navbar from '../../components/navbar/Navbar'
import './Home.css'
import IronMan from '../home/assets/iron-man.jpg'
import { EllipsisHorizontal, Verified } from '../../icons/icon'
import { Link, NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <Navbar/>
         <div className="home flex">
          <img src={IronMan} alt="iron-man" />
          <div className="details flex">

             <div className="profile-info flex">
             <span className='flex'>
             <h3>Marvel Heros</h3>
             <Verified/>
             </span>
              <Link to='/instagram/signin' className='link'>
              <button>Message</button>
              </Link>
              <Link to='/instagram/signin' className='link'>
             <button>Follow</button>
              </Link>
              <EllipsisHorizontal/>
             </div>

             <div className="count-info flex">
                <h5><span>169+</span>posts</h5>
                <h5><span>1000M+</span>followers</h5>
                <h5><span>0</span>following</h5>
               </div>

             <div className="about flex">
                <h4>Iron Man</h4>
                <p>Busy flying and eliminating enemies!!</p>
              
                <NavLink to='/instagram/signin'>marvel.com</NavLink>
              
             </div>
              
          </div>
          </div> 
              <h1 style={{textAlign:"center", marginTop:"4em", color:"darkgrey"}}>Site Under Construction</h1>
     </>
  )
}
export default Home