
import { useRouteError } from "react-router-dom"


const Error=()=>{
     const err=useRouteError();  //useRouteError detect the error route.........................
     console.log(err);
    return (
        <div className="errpage">
            <h1 className="oops">Oops!!!!</h1>
            <h2 className="wrong">Something went Wrong....</h2>
            <h1 className="error">{err.status}   {err.statusText } </h1>
            <p className="errpara">{err.data} </p>
        </div>
    );
};

export default Error;