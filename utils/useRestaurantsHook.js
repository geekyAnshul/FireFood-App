import { useEffect, useState } from "react";
const useRestaurantHook =(id)=>{
     const [resInfo,setresInfo]=useState(null);

     useEffect(()=>{
        fetchMenu(id);
     },[]);
    
     const fetchMenu= async()=>{
        const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const json=await data.json();
        setresInfo(json.data);
     }



    return resInfo;
}

export default useRestaurantHook;