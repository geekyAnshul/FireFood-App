import Body from "./Body";
import data from "../../utils/data";

const Card=(props)=>{
    const {resData} = props;
    // const {id,name,cloudinaryImageId,locality,avgRating}=resData;
    return (
        <div key={resData.id} className='cards'>
            
            <img src="resData.cloudinaryImageId" ></img>
            <h2>{resData.name}</h2>
            <div className='flex'>
                <h5>{resData.locality}</h5>
                <div className='rating'>Rating :{resData.avgRating}</div>
            </div>
            <div className='price'>code: {resData.id}</div>
        </div>
    )
  }

  export default Card;






  import data from '../../utils/data';
import Card from './Card';
import Search from './Search';
import { useEffect, useState } from 'react';

const Body=()=>{
      const [list,setList]=useState(data);

    //   useEffect(()=>{
    //     fetchData()
    //   },[]);

    //   const fetchData = async()=>{
    //     const data =  await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

    //     const json = await data.json();
    //     console.log(json);
    //     setList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    //     console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    //  };
     
    


    return (
      <div className='body'>
          <div className='filter'>
        <div className="btn" onClick={()=>{}} >Top Rated Restraunts</div>
        </div>
    
         <div className='res-card'>
         

          {list.map((elem)=>{
            return (
            <Card key={elem.id} resData={elem}/>
          )})}
        
         </div>
      </div>
    )
  }
  


  export default Body;







  const Navbar=()=>{
    return (
        <div id='header'>
        <div className='logo'>
       <img src='https://png.pngtree.com/png-clipart/20230520/original/pngtree-burger-logo-png-image_9166715.png'></img>
       </div>
       <div className='sidebar'>
       <div className='menu'>
            <h2>Home</h2>
            <h2>About Us</h2>
            <h2>Contact Us</h2>
            <h2>Menu</h2>
       </div>
      </div>
       </div>
    )
  }

  export default Navbar;