import { useDispatch, useSelector } from 'react-redux';
import Itemlist from "./Itemlist";
import { clearCart } from '../../utils/cartsSlice';

const Cart =()=>{
    const cartItems=useSelector((store)=>store.cart.items);
     const dispatch=useDispatch();
     const handleClearCart = ()=>{
        dispatch(clearCart());
     };
   return (
    <div className='mx-auto p-10'>
        <h1 className='text-center font-semibold text-4xl text-orange-500 '>Cart</h1>
        <div className='w-24 bg-black text-white rounded-md text-center px-2 py-1 absolute right-20 top-36 cursor-pointer shadow-black shadow-md ' onClick={handleClearCart}>Clear Cart</div>
        <div className='mx-auto w-7/12 mt-10'>
        {cartItems.length === 0 ? <h1 className='text-6xl mt-52 mx-auto text-center font-semibold text-gray-400'>No Items Added</h1> : <Itemlist items={cartItems}/> }
            {/*  */}
        </div>
    </div>
   )
}
export default Cart;