import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import "./weather.css"


const Navbar = () => {
    return (  
        <div className="navbar">
            <div className="navbar-left">
                <img src="https://blogs.vmware.com/cloudprovider/files/2013/01/shutterstock_105420140.jpg">
                </img>
                <h1>Climate Target</h1>
            </div>
            <div className="navbar-right">
                <input placeholder="Search Location"></input>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='icon'/>  
            </div>
        </div>

    );
}
 
export default Navbar;