//import { useEffect, useState } from "react";
import useRestaurantHook from "../../utils/useRestaurantsHook";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { GoStarFill } from "react-icons/go";
import ResCategory from "./ResCategory";
import { useState } from "react";


const ResMenu=()=>{

  const { id } = useParams();
  const resInfo=useRestaurantHook(id);


    if(resInfo===null){
        return <Shimmer/>
      }
    

    // Extract restaurant information,  const {grandChildObj ka child}=object.childobj.grandChildObj
  const { name, costForTwoMessage, locality,cuisines,avgRating,veg  } =
  resInfo?.cards?.[2]?.card?.card?.info || {};
  
  const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);
    
    return (
          <div className="meenu">

{/*<<<<<<<<<<<<<<<<<<<<<<<<<<<< The top things only NAME & COST-FOR-TWO-MSG>>>>>>>>>>>>>>>>>>>>>> */}
        <div className="mundi">
           <h1 className="name">{name}</h1>
           <h1 className="cost">{costForTwoMessage}</h1>
        </div>

{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<,AVG-RATING>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
           <div className="last" style={{display:"flex"}}>
            <h2 className="h1" style={{padding:"5px 10px",width:"100px",color:"black",backgroundColor:"rgb(234, 227, 22)",marginLeft:"20%",marginBottom:"10px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"5px"}}><GoStarFill /> : {avgRating}</h2>

{/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<VEG OR NON VEG>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            {veg===true ? <h2 style={{backgroundColor:"rgb(32, 183, 55)", height:"33px", width:"130px",padding:"1px 1px",borderRadius:"5px",color:"white",fontSize:"14px",marginLeft:"2%",display:"flex",alignItems:"center",justifyContent:"center"}}>Veg-Meal</h2>  : <h2 style={{backgroundColor:"red", width:"130px", height:"33px",borderRadius:"10px",color:"white",fontSize:"14px",marginLeft:"2%",display:"flex",alignItems:"center",justifyContent:"center"}}>Non Veg-Meal</h2>}
            </div>

{/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  CUISINES >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  */}
        <div className="khaana">
              <h1 style={{marginLeft:"20%",marginTop:"20px",fontSize:"25px"}}>
                Cuisines
              </h1>
            <ul className="rit">
              {cuisines.map((cu)=>{
                  return  <li>{cu}</li>;
              })}
            </ul>
        </div>


            <div>
              {categories.map((c,index)=>
              <ResCategory key={c?.card?.card?.title}  data={c?.card?.card} 
              />)}
            </div>
          </div>
    )
};
export default ResMenu;





