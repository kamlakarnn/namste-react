import { useState, useEffect } from "react"; 
import resList from "./mockData";



const useRestraunantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
        fetchData();
  }, []);

  const fetchData = () => {
    console.log(resList, "resList");
    
    // This returns the single object, not an array containing the object
const data =  resList.find((res) => res.data.id === resId);

    console.log(data, "data of restaurant menu");
    setResInfo(data ? [data] : null); // Wrap in array to maintain consistency with previous code
  };
  return resInfo;
};

export default useRestraunantMenu;
