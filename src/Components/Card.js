import { GoStarFill } from "react-icons/go";

const Card=(props)=>{
    const {resdata} = props;  //object destructuring is done like this 
    return (
        <div key={resdata.info.id} className='cards'>
            
            <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+resdata.info.cloudinaryImageId} ></img>
            <h2 className="naam">{resdata.info.name}</h2>
            <div className='flex'>
                <h5 className="locality">{resdata.info.locality}</h5>
                <div className='rating'> <GoStarFill /> {resdata.info.avgRating}</div>
            </div>
            <div className='price'>{resdata.info.costForTwo}</div>
        </div>
    )
  };



//Higher order components..................!!!!!    NO USAGE IN THIS PROJECT!!!!    ....................................................
 export const withPromoted = (Card)=>{
    return ()=>{
        return (
              <div>
                <h1>Promoted</h1>
                <Card {...props}/>
              </div>
        )
    }
  }

  export default Card;