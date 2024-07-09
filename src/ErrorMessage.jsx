const errorMessage = ({message,onClose}) => {
    return ( 
        <div className="error">
            <span>{message}</span>
            <button onClick={onClose}>click me</button>
        </div>
     );
}
 
export default errorMessage;