import { Link } from 'react-router-dom'
import { Camera, InstagramLogo, PlusCircle, Search } from '../../icons/icon'
import './Navbar.css'

const Navbar = () => {
    return (
        <header className='navbar'>
            <div>
                <Link to='/instagram'>
                    <InstagramLogo />
                </Link>
            </div>


            <form action="/search">
                <input type="text" placeholder='Search' />
                <span className='search'>
                    <Search />
                </span>
            </form>

            <nav className='left-links'>
                {/* <Link to='/'>  <Home />  </Link> */}
                <Link to='/instagram/signin' className='btn-login link'> Login </Link>

                <Link to='/instagram/signin'>
                <div className='camera'>
                    <PlusCircle />
                    <Camera />
                </div>
                </Link>

                <Link to='/instagram/profile' className='link'> Default Profile </Link>
                {/* <Link to='/instagram/signup' className='link'> Signup </Link> */}
            </nav>
        </header>
    )
}
export default Navbar