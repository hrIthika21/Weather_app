import "./weather.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const ErrorMessage = ({message,onClose}) => {
    return ( 
        <div className="error">
            <span>{message}</span>
            <button onClick={onClose}><FontAwesomeIcon icon={faXmark} style={{color: "#ff0000",}} /></button>
        </div>
     );
}
 
export default ErrorMessage;