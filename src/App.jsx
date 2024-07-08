import Navbar from "./Navbar.jsx";
import MainSection from "./MainSection.jsx";
import {useState,useEffect} from 'react';
import {getWeatherData,getHourlyData} from './data/weatherData';

function App() {
    const[Weatherdata,setWeatherData]=useState(null);
    const[city, setCity]=useState('Visakhapatnam');
    const[HourlyData,setHourlyData]=useState(null);
    const[day,setDay]=useState([]);
    
    const getData = async() =>{
            try{
            const data=await getWeatherData(city);
            setWeatherData(data);
            return data;
        }catch(error){
            console.log(error.message);
        }
    }

    const gethourlydata = async() => {
        try{const hourlydata = await getHourlyData(city);
        setHourlyData(hourlydata);
        getDay();
        return hourlydata;
        }catch(error){
            console.log(error.message);
        }
    }

    const getDay =async() => {
        try{
            const weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            const index_1=weekday[HourlyData.data.index[5].dt_txt.split(" ")[0].getDay()];
            const index_2=weekday[HourlyData.data.index[10].dt_txt.split(" ")[0].getDay()];
            const index_3=weekday[HourlyData.data.index[15].dt_txt.split(" ")[0].getDay()];
            const index_4=weekday[HourlyData.data.index[20].dt_txt.split(" ")[0].getDay()];
            const index_5=weekday[HourlyData.data.index[25].dt_txt.split(" ")[0].getDay()];
            const index_6=weekday[HourlyData.data.index[30].dt_txt.split(" ")[0].getDay()];
            const index_7=weekday[HourlyData.data.index[35].dt_txt.split(" ")[0].getDay()];
            const day=[index_1,index_2,index_3,index_4,index_5,index_6,index_7];
            setDay(day);
            return day;
        }catch(error){
            console.log(error.message);
        }
    }

    useEffect(()=>{
        gethourlydata();
    },[]);


    useEffect(()=>{
        getData();
    },[]);

    
  return (
    <>
    <Navbar setCity={setCity}
    getData={getData}
    gethourlydata={gethourlydata}
    />
    <MainSection Weatherdata={Weatherdata}
    HourlyData={HourlyData}
    day={day}
    />
    </>
  )
}

export default App;
