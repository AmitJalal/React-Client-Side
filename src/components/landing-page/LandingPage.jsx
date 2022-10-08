import { Link } from 'react-router-dom'
import "./LandingPage.css"
import LandingImage from '../../assets/landingimage2.png'
const LandingPage = () => {
    return (
        <main>
            <section className="left">
                <img src={LandingImage} alt="landing-img" />
            </section>

            <section className="right">
                <h1>10x TEAM 04</h1>
                <Link to="/instagram">
                    <div>
                        <button className='btn'>ENTER</button>
                    </div>
                </Link>
            </section>
        </main>
    )
}
export default LandingPage