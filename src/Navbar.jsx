import "./weather.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopefaMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (  
        <div className="navbar">
            <div className="navbar-left">
                <img src="https://blogs.vmware.com/cloudprovider/files/2013/01/shutterstock_105420140.jpg">
                </img>
                <h1>Climate Target</h1>
            </div>
            <div className="content-right">
                <input placeholder="search Location"></input>
                <FontAwesomeIcon icon={faMagnifyingGlassLocation} style={{color: "#b4b1b2",}} />
            </div>
        </div>
    );
}
 
export default Navbar;