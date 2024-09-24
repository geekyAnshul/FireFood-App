import { useState } from "react";
import Itemlist from "./Itemlist";


const ResCategory=({data })=>{
    const [showItem,setShowItem]=useState(false);

    const handleClick = ()=>{
        setShowItem(!showItem);
    }
    return (
        <div>
            <div className=" w-8/12 mx-auto my-10 bg-zinc-100 shadow-md p-5"  >
                <h1 className=" font-bold text-lg">{data.title} ({data.itemCards.length})</h1>
                <div className="ml-[900px] cursor-pointer" onClick={handleClick}>▼</div>
                {showItem && <Itemlist items={data.itemCards}/>}
            </div>
           
        </div>
    )
}

export default ResCategory;