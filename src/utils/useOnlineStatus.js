import { useState, useEffect } from "react";    

const useOnLineStatus = () =>{
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener('online', () => setOnlineStatus(true));
        window.addEventListener('offline', () => setOnlineStatus(false));

    },[])
      //boolean value of online status
     return onlineStatus;
}


export default useOnLineStatus;