
import { useState } from "react";
import groceryData from "../../utils/groceryItems"; // Import the data

const Grocery = () => {
  // Access the groceryItems from the imported data
  const [data] = useState(groceryData[0]?.groceryItems || []);
  const [orderMessage, setOrderMessage] = useState(""); // State to store the order message
  const [isInStock, setIsInStock] = useState(true); // State to store the stock status

  // Handle case where grocery data is empty or undefined
  if (!data.length) {
    return <p>No grocery items available.</p>;
  }

  // Function to handle order placement
  const handleOrder = (item) => {
    // Check if item is out of stock
    if (!item.inStock) {
      setOrderMessage(`Sorry, "${item.name}" is out of stock.`);
      setIsInStock(false); // Set inStock to false
    } else {
      setOrderMessage(`Your order for "${item.name}" has been placed!`);
      setIsInStock(true); // Set inStock to true
    }

    // Clear the message after a few seconds
    setTimeout(() => {
      setOrderMessage("");
    }, 3000); // Message disappears after 3 seconds
  };

  return (
    <div className="px-20 py-16 bg-zinc-200">
      <h1 className="text-center font-semibold text-5xl mb-10 text-orange-600">Our Grocery</h1>

      {/* Order Message Display */}
      {orderMessage && (
        <div
          className={`w-52 top-44 left-[650px] absolute text-center text-white p-2 rounded-md ${
            isInStock ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {orderMessage}
        </div>
      )}

      <div className="flex flex-wrap m-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="card bg-white w-52 shadow-md p-5 shadow-black transition-all hover:bg-zinc-100 rounded-md m-5 hover:shadow-lg hover:shadow-yellow-700"
          >
            <figure className="mb-2">
              <img className="rounded-sm h-28 object-contain" src={item.image} alt={item.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title tracking-tight mb-3">
                <h1 className="font-semibold text-zinc-800">{item.name}</h1>
                <div className="badge badge-secondary text-green-700">₹{item.rate}</div>
              </h2>
              <div className="badge badge-outline">
                {item.inStock ? (
                  <span className="text-green-500 font-medium">In Stock</span>
                ) : (
                  <span className="text-red-500 font-medium">Out of Stock</span>
                )}
              </div>
              <div className="card-actions mt-2 relative">
                <div
                  className={`bg-yellow-500 w-[120px] absolute left-5 py-1 cursor-pointer rounded-md text-center text-white ${
                    !item.inStock ? "bg-red-600 opacity-40 cursor-not-allowed hover:shadow-lg hover:shadow-red-700" : ""
                  }`}
                  onClick={() => handleOrder(item)} // Call handleOrder on click
                >
                  Order Now
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grocery;

