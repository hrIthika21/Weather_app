import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { getWeatherData } from './data/weatherData';


const Navbar=({setCity,getData,gethourlydata})=>{
    const[localCity,setLocalCity]=useState('');

    function handleSearch(){
        setCity(localCity);
        getData(localCity);
        gethourlydata(localCity);
    }

    return (  
        <div className="navbar">
            <div className="navbar-left">
                <img src="https://blogs.vmware.com/cloudprovider/files/2013/01/shutterstock_105420140.jpg" className='logo'>
                </img>
                <h1>Climate Target</h1>
            </div>
            <div className="navbar-right">
                <input placeholder="Search Location" onChange={(ev)=> setLocalCity(ev.target.value)} value={localCity}></input>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' onClick={handleSearch} />  
            </div>
        </div>

    );
}
 
export default Navbar;