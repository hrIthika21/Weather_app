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

export const transformedData =  (data) =>{
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const indices = [8, 16, 24, 32, 39];
  
    const transformedData = indices.map(index => {
        const item = data.list[index];
        const date = new Date(item.dt_txt);
        const dayName = weekday[date.getDay()]; // Get the name of the day

    return {
      ...item,
      day: dayName,
    };
  });

  return transformedData;
};

