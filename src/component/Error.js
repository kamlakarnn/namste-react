// this hooks is used to show the error
import { useRouteError } from "react-router" 


const Error = () =>{
    const err = useRouteError();    
    return(
        <div>
            <h1>git the eror </h1>
            <h2>{err.status + " : " + err.statusText}</h2>
        </div>
    )
}

export default Error