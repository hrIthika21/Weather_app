import "./weather.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';



function MainSection({Weatherdata,HourlyData,day}) {
    console.log(Weatherdata);
    console.log(HourlyData);
    console.log(day);

    return (
        <div className="container">
            {Weatherdata !== null ?  (
                <div className="family">
                    <div className="location">
                        <h5>{Weatherdata.data.name} | {Weatherdata.data.sys.country}</h5>
                        <img src={`http://openweathermap.org/img/wn/${Weatherdata.data.weather[0].icon}@2x.png`} alt='weather icon' className="weather-icon"></img>
                        <p className="temperature">{(Weatherdata.data.main.temp-273.15).toFixed(1)}&deg;C</p>
                        <div className="footer">
                        <div className="feels_like">
                            <h1>Feels Like</h1>
                            <p> {(Weatherdata.data.main.feels_like-273.15).toFixed(1)} &deg;C</p>
                        </div>
                        <div className="humidity">
                            <h1>Humidity</h1>
                            <p>{(Weatherdata.data.main.humidity).toFixed(1)}%</p>
                        </div>
                        <div className="preciptation">
                            <h1>Pressure</h1>
                            <p>{(Weatherdata.data.main.pressure)}hPa</p>
                        </div>
                        <div className="wind">
                            <h1>Wind  </h1>
                            <p>{(Weatherdata.data.wind.speed).toFixed(1)}km/h</p>
                        </div>
                    </div>
                </div>
            </div>
            ): 
            null
            }
            {HourlyData !== null? (
                <div className="both">
                    <div className="hourly">
                        <div className="item-1" role="button">
                            <p>{HourlyData.data.list[0].dt_txt.split(' ')[0].split("-").slice(1,3).join("-")}</p>
                            <p style={{marginTop:"-10px"}}>{HourlyData.data.list[0].dt_txt.split(' ')[1].split(":").slice(0,2).join(":")}</p>
                            <img src={`http://openweathermap.org/img/wn/${HourlyData.data.list[0].weather[0].icon}@2x.png`} alt="weather-icon"></img>
                            <p>{(HourlyData.data.list[0].main.temp-273.15).toFixed(1)} &deg;C</p>
                        </div>
                        <div className="item-2" role="button">
                            <p>{HourlyData.data.list[1].dt_txt.split(' ')[0].split("-").slice(1,3).join("-")}</p>
                            <p style={{marginTop:"-10px"}}>{HourlyData.data.list[1].dt_txt.split(' ')[1].split(":").slice(0,2).join(":")}</p>
                            <img src={`http://openweathermap.org/img/wn/${HourlyData.data.list[1].weather[0].icon}@2x.png`} alt="weather-icon"></img>
                            <p>{(HourlyData.data.list[1].main.temp-273.15).toFixed(1)}&deg;C</p>
                        </div>
                        <div className="item-3" role="button">
                            <p>{HourlyData.data.list[2].dt_txt.split(' ')[0].split("-").slice(1,3).join("-")}</p>
                            <p style={{marginTop:"-10px"}}>{HourlyData.data.list[2].dt_txt.split(' ')[1].split(":").slice(0,2).join(":")}</p>
                            <img src={`http://openweathermap.org/img/wn/${HourlyData.data.list[2].weather[0].icon}@2x.png`} alt="weather-icon"></img>
                            <p>{(HourlyData.data.list[2].main.temp-273.15).toFixed(1)}&deg;C</p>
                        </div>
                        <div className="item-4" role="button">
                            <p>{HourlyData.data.list[3].dt_txt.split(' ')[0].split("-").slice(1,3).join("-")}</p>
                            <p style={{marginTop:"-10px"}}>{HourlyData.data.list[3].dt_txt.split(' ')[1].split(":").slice(0,2).join(":")}</p>
                            <img src={`http://openweathermap.org/img/wn/${HourlyData.data.list[3].weather[0].icon}@2x.png`} alt="weather-icon"></img>
                            <p>{(HourlyData.data.list[3].main.temp-273.15).toFixed(1)}&deg;C</p>
                        </div>
                        <div className="item-5" role="button">
                            <p>{HourlyData.data.list[4].dt_txt.split(' ')[0].split("-").slice(1,3).join("-")}</p>
                            <p style={{marginTop:"-10px"}}>{HourlyData.data.list[4].dt_txt.split(' ')[1].split(":").slice(0,2).join(":")}</p>
                            <img src={`http://openweathermap.org/img/wn/${HourlyData.data.list[4].weather[0].icon}@2x.png`} alt="weather-icon"></img>
                            <p>{(HourlyData.data.list[4].main.temp-273.15).toFixed(1)}&deg;C</p>
                        </div>
                        <div className="item-6" role="button">
                            <p>{HourlyData.data.list[5].dt_txt.split(' ')[0].split("-").slice(1,3).join("-")}</p>
                            <p style={{marginTop:"-10px"}}>{HourlyData.data.list[5].dt_txt.split(' ')[1].split(":").slice(0,2).join(":")}</p>
                            <img src={`http://openweathermap.org/img/wn/${HourlyData.data.list[5].weather[0].icon}@2x.png`} alt="weather-icon"></img>
                            <p>{(HourlyData.data.list[5].main.temp-273.15).toFixed(1)}&deg;C</p>
                        </div>
                        <div className="item-7" role="button">
                            <p>{HourlyData.data.list[6].dt_txt.split(' ')[0].split("-").slice(1,3).join("-")}</p>
                            <p style={{marginTop:"-10px"}}>{HourlyData.data.list[6].dt_txt.split(' ')[1].split(":").slice(0,2).join(":")}</p>
                            <img src={`http://openweathermap.org/img/wn/${HourlyData.data.list[6].weather[0].icon}@2x.png`} alt="weather-icon"></img>
                            <p>{(HourlyData.data.list[6].main.temp-273.15).toFixed(1)}&deg;C</p>
                        </div>
                        <div className="item-8" role="button">
                            <p>{HourlyData.data.list[7].dt_txt.split(' ')[0].split("-").slice(1,3).join("-")}</p>
                            <p style={{marginTop:"-10px"}}>{HourlyData.data.list[7].dt_txt.split(' ')[1].split(":").slice(0,2).join(":")}</p>
                            <img src={`http://openweathermap.org/img/wn/${HourlyData.data.list[7].weather[0].icon}@2x.png`} alt="weather-icon"></img>
                            <p>{(HourlyData.data.list[7].main.temp-273.15).toFixed(1)}&deg;C</p>
                        </div>
                        <div className="item-9" role="button">
                            <p>{HourlyData.data.list[8].dt_txt.split(' ')[0].split("-").slice(1,3).join("-")}</p>
                            <p style={{marginTop:"-10px"}}>{HourlyData.data.list[8].dt_txt.split(' ')[1].split(":").slice(0,2).join(":")}</p>
                            <img src={`http://openweathermap.org/img/wn/${HourlyData.data.list[8].weather[0].icon}@2x.png`} alt="weather-icon"></img>
                            <p>{(HourlyData.data.list[8].main.temp-273.15).toFixed(1)}&deg;C</p>
                        </div>
                    </div>
                    <div className="weekly">
                        <div className="index-1" role="button">
                            <p>{day[0].day}</p>
                            <img src={`http://openweathermap.org/img/wn/${day[0].weather[0].icon}@2x.png`} alt="weather-icon"></img>
                            <p>Temp : {(day[0].main.temp-273.15).toFixed(1)} &deg;C</p>
                            <p>Humid : {day[0].main.humidity}%</p>
                        </div>
                        <div className="index-2" role="button">
                            <p>{day[1].day}</p>
                            <img src={`http://openweathermap.org/img/wn/${day[1].weather[0].icon}@2x.png`} alt="weather-icon"></img>
                            <p>Temp : {(day[1].main.temp-273.15).toFixed(1)} &deg;C </p>
                            <p>Humid : {day[1].main.humidity}%</p>
                        </div>
                        <div className="index-3" role="button">
                            <p>{day[2].day}</p>
                            <img src={`http://openweathermap.org/img/wn/${day[2].weather[0].icon}@2x.png`} alt="weather-icon"></img>
                            <p>Temp : {(day[2].main.temp-273.15).toFixed(1)} &deg;C </p>
                            <p>Humid : {day[2].main.humidity}%</p>
                        </div>
                        <div className="index-4" role="button">
                            <p>{day[3].day}</p>
                            <img src={`http://openweathermap.org/img/wn/${day[3].weather[0].icon}@2x.png`} alt="weather-icon"></img>
                            <p>Temp : {(day[3].main.temp-273.15).toFixed(1)} &deg;C</p>
                            <p>Humid : {day[3].main.humidity}%</p>
                        </div>
                        <div className="index-5" role="button">
                            <p>{day[4].day}</p>
                            <img src={`http://openweathermap.org/img/wn/${day[4].weather[0].icon}@2x.png`} alt="weather-icon"></img>
                            <p>Temp : {(day[4].main.temp-273.15).toFixed(1)} &deg;C </p>
                            <p>Humid : {day[4].main.humidity}%</p>
                        </div>
                    </div>
                </div>

            ):
            null
            }
        </div>
    );
}
 
export default MainSection;