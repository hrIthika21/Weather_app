import axios from "axios";

const baseUrl='https://api.openweathermap.org/data/2.5/weather?';
const apiKey='5c6cbd301294d9c6f9a9188372929098';

export const getWeatherData = async(cityName)=>{
    try{
        const data= await axios.get(baseUrl + `q=${cityName}&appid=${apiKey}`);
        console.log("data received");
        return data;
    }catch(error){
        throw error;
    }
}