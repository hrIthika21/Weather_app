import Navbar from "./Navbar.jsx";
import MainSection from "./MainSection.jsx";
import {useState,useEffect} from 'react';
import {getWeatherData,getHourlyData,transformedData} from './data/weatherData';
import ErrorMessage from "./ErrorMessage.jsx";

function App() {
    const[Weatherdata,setWeatherData]=useState(null);
    const[city, setCity]=useState('Visakhapatnam');
    const[HourlyData, setHourlyData]=useState(null);
    const[day,setDay]=useState([]);
    const[error,setError]=useState(null);
    
    const getData = async() =>{
            try{
            const data=await getWeatherData(city);
            setWeatherData(data);
            return data;
        }catch(error){
            setError("Please, enter the correct data");
        }
    }

    const gethourlydata = async() => {
        try{const hourlydata = await getHourlyData(city);
        setHourlyData(hourlydata);
        const transformed = transformedData(hourlydata.data);
        setDay(transformed);
        return hourlydata;
        }catch(error){
            setError("Please, enter the correct data");
        }
    }

    // const get7Days =async() => {
    //     try{
    //         const hourlydata = await getHourlyData(city);
    //         console.log(hourlydata);
    //         const weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    //         const index_1=weekday[hourlydata.data.list[5].dt_txt.split(" ")[0]];
    //         const index_2=weekday[hourlydata.data.list[10].dt_txt.split(" ")[0]];
    //         const index_3=weekday[hourlydata.data.list[15].dt_txt.split(" ")[0]];
    //         const index_4=weekday[hourlydata.data.list[20].dt_txt.split(" ")[0]];
    //         const index_5=weekday[hourlydata.data.list[25].dt_txt.split(" ")[0]];
    //         const index_6=weekday[hourlydata.data.list[30].dt_txt.split(" ")[0]];
    //         const index_7=weekday[hourlydata.data.list[35].dt_txt.split(" ")[0]];
    //         const day=[index_1,index_2,index_3,index_4,index_5,index_6,index_7];
    //         console.log(index_1);
    //         setDay({day});
    //         return {day};
    //     }catch(error){
    //         console.log(error.message);
    //     }
    // }

    // useEffect(()=>{
    //     get7Days();
    // },[])

    const closeError = () =>{
        setError(null);
    };

    useEffect(()=>{
        gethourlydata();
    },[]);


    useEffect(()=>{
        getData();
    },[]);

    
  return (
    <>
    {error && <ErrorMessage message={error} onClose={closeError} />}
    <Navbar 
    setCity={setCity}
    getData={getData}
    gethourlydata={gethourlydata}
    // get7Days={get7Days}
    />
    <MainSection Weatherdata={Weatherdata}
    HourlyData={HourlyData}
    day={day}
    />
    </>
  )
}

export default App;
