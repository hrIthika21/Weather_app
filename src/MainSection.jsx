import "./weather.css"

const MainSection = () => {
    return ( 
        <div className="container">
            <div className="location">
                <p>Visakhapatnam|India</p>
                <p>29ºC</p>
            </div>
        <div className="hourly"></div>
        <div className="weekly"></div>
        </div>
    );
}
 
export default MainSection;