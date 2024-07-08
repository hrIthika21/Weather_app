import axios from "axios";

const baseUrl='https://api.openweathermap.org/data/2.5/weather?';
const apiKey='5c6cbd301294d9c6f9a9188372929098';
const hourlyUrl ='https://api.openweathermap.org/data/2.5/forecast?';

export const getWeatherData = async(cityName)=>{
    try{
        const {data}= await axios.get(baseUrl + `q=${cityName}&appid=${apiKey}`);
        return {data};
    }catch(error){
        throw error;
    }
}

export const getHourlyData = async(cityName)=>{
    try{
        const hourlydata= await axios.get(hourlyUrl + `q=${cityName}&appid=${apiKey}`);
        return hourlydata;

    }catch(error){
        throw error;
    }
}