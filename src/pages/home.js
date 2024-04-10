import { Link } from "react-router-dom";
import BannerImage from '../assets/pizzaBg.jpg'
import '../styles/home.css'

const Home = () => {
    return ( 
       <div className="home" style={{backgroundImage:`url(${BannerImage})`}}>
         <div  >
            <div className="headerContainer" >
                <h1>Heavenly Slice</h1>
                <p>Pick your pizza with your own taste</p>
                <Link to="menu">
                <button>
                Order now
                </button>
                </Link>
            </div>
        </div>
       </div>
     );
}
 
export default Home;