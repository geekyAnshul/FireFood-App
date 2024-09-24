import Card ,{ withPromoted} from "./Card";
import { useEffect, useState } from "react";
//import reslist from "../../utils/data";
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";
import useOnlinestatus from "../../utils/useOnlineStatus";
import { withPromoted } from "./Card";



const Body=()=>{
   const [list,setlist]=useState([]);
   const [fakelist,setfakelist]=useState([]);
   const [searchtxt,setsearchtxt]=useState("");
   const withPromotion = withPromoted(Card);
  
   useEffect(()=>{
       fetchData();
   },[]);

   const fetchData=async ()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    setlist(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setfakelist(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
   };

// check if users internet connectivity is good-----------------------------------------------------------------
   const onlinestatus=useOnlinestatus();
   if(onlinestatus==false) {
    return <div><h1 className="offline">No Internet Connection....</h1>
    <h1 className="off"> Your Internet went on a mini vacation! Refresh once it's back, and we’ll continue our journey!!!</h1> 
    </div>}

// Agar koi card nhi load hua ho to usse shimmer dikaahne ka------------------------------
   if(list.length===0){
    return <Shimmer/>;
   }
   
//main code-------------------------------------------------------------------------------------------------------
    return (
        <div>
        <div className='filter mb-10'>
{/* search bar------------ search text was empty then, no when you type it will update due to  SETSEARCHTEXT------- */}
        <input className="input" type="text" placeholder="Search Your Restaraunt" value={searchtxt} 
        onChange={(e)=>{setsearchtxt(e.target.value);}}></input>

{/* filter and show only those cards that are in input......................list me filter use kro if (card name includes searchtext) */}
        <div className="searchbtn" 
        onClick={()=>{
             const filtersearch=list.filter((res)=>                            //list.filter((para)=>para.name.includes(searchtxt))
                 res.info.name.toLowerCase().includes(searchtxt.toLowerCase()));
             setfakelist(filtersearch);
        }}>Search</div>


{/* filter on the basis of ratings of hotels.............list.filter((para)=>para.rating>4) */}
        <div className='btn' onClick={()=>{
          const filtered = list.filter(
            (elem)=>elem.info.avgRating > 4
          );
          setfakelist(filtered);
        }}
        >Top Rated Restaraunts</div>
        </div>
        
      {/* list.map((para)=> <Card data={para}/>) */}
        <div className='res-card'>
        {fakelist.map((elem)=>(
            <Link style={{textDecoration: 'none'}} to={/indore/+elem.info.id} key={elem.info.id}>
                {elem.info.Promoted ? <withPromotion resdata={elem} /> : <Card  resdata={elem}/>}
            </Link>
        ))}
        </div>
        </div>
    );
};
export default Body;