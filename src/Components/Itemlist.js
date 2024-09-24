import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartsSlice";

const Itemlist = ({items}) =>{
   
    const dispatch = useDispatch();
    const handleAdd=(item)=>{
          dispatch(addItem(item));
    }
    return (
            <div  >
                {items.map((item)=>(
                    <div key={item.card.info.id} className="flex justify-between items-center border-b-gray-300 border-b-2">
                    <div className=" py-2 w-9/12 px-5" key={item.card.info.id}>
                        <span className=" font-bold text-md text-gray-900">{item.card.info.name}</span>
                        <span className=" text-green-600 text-md font-semibold"> - ₹{ item.card.info.price ?  (item.card.info.price/100) :  item.card.info.defaultPrice/100 }</span>
                        <p className="text-xs text-gray-600 py-1">{item.card.info.description}</p>
                        </div>
                      
                         <div className=" w-32 flex-shrink-0 mt-2 py-2 px-3">
                            <div className=" bg-green-600  text-white w-16 cursor-pointer px-2 font-medium absolute" onClick={()=>handleAdd(item)}>Add +</div>
                             <img className="w-full h-auto rounded-sm shadow-sm cursor-pointer shadow-black" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + item.card.info.imageId} alt={item.card.info.name} />
                        </div>
                   </div>
                    
                )
                    
                )}
            </div>
    )
}

export default Itemlist;