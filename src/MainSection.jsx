import "./weather.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
 


const MainSection = () => {
    return ( 
        <div className="container">
            <div className="location">
                <h5>Visakhapatnam | India</h5>
                <p>29 &deg;C</p>
                <div className="footer">
                    <div className="temperature">
                        <h1>Temperature</h1>
                        <p>29 &deg;C</p>
                    </div>
                    <div className="humidity">
                        <h1>Humidity</h1>
                        <p>86%</p>
                    </div>
                    <div className="preciptation">
                        <h1>Preciptation</h1>
                        <p>5%</p>
                    </div>
                    <div className="wind">
                        <h1>Wind</h1>
                        <p>16km/h</p>
                    </div>
                </div>
            </div>
            <div className="hourly">
                <div className="item-1" role="button">
                    <p>12:00am</p>
                    <p>26 &deg;C</p>
                </div>
                <div className="item-2" role="button">
                    <p>2:00am</p>
                    <p>25 &deg;C</p>
                </div>
                <div className="item-3" role="button">
                    <p>4:00am</p>
                    <p>24 &deg;C</p>
                </div>
                <div className="item-4" role="button">
                    <p>6:00am</p>
                    <p>25 &deg;C</p>
                </div>
                <div className="item-5" role="button">
                    <p>8:00am</p>
                    <p>26 &deg;C</p>
                </div>
                <div className="item-6" role="button">
                    <p>10:00am</p>
                    <p>30 &deg;C</p>
                </div>
                <div className="item-7" role="button">
                    <p>12:00pm</p>
                    <p>32 &deg;C</p>
                </div>
                <div className="item-8" role="button">
                    <p>2:00pm</p>
                    <p>33 &deg;C</p>
                </div>
                <div className="item-9" role="button">
                    <p>4:00pm</p>
                    <p>32 &deg;C</p>
                </div>
                <div className="item-10" role="button">
                    <p>6:00pm</p>
                    <p>30 &deg;C</p>
                </div>
                <div className="item-11" role="button">
                    <p>8:00pm</p>
                    <p>25 &deg;C</p>
                </div>
                <div className="item-12" role="button">
                    <p>10:00pm</p>
                    <p>25 &deg;C</p>
                </div>
            </div>
            <div className="weekly">
                <div className="index-1" role="button">
                    <p>Thurs</p>
                    <p>  32 &deg;C |  27 &deg;C</p>
                </div>
                <div className="index-2" role="button">
                    <p>Fri</p>
                    <p>  31 &deg;C |  26 &deg;C</p>
                </div>
                <div className="index-3" role="button">
                    <p>Sat</p>
                    <p>  31 &deg;C |  26 &deg;C</p>
                </div>
                <div className="index-4" role="button">
                    <p>Sun</p>
                    <p>  31 &deg;C |  26 &deg;C</p>
                </div>
                <div className="index-5" role="button">
                    <p>Mon</p>
                    <p>  30 &deg;C |  26 &deg;C</p>
                </div>
                <div className="index-6" role="button">
                    <p>Tue</p>
                    <p>  31 &deg;C |  26 &deg;C</p>
                </div>
                <div className="index-7" role="button">
                    <p>Wed</p>
                    <p>  31 &deg;C |  27 &deg;C</p>
                </div>
                <div className="index-8" role="button">
                    <p>Thurs</p>
                    <p>  30 &deg;C |  27 &deg;C</p>
                </div>
            </div>
        </div>
    );
}
 
export default MainSection;