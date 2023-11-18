import { useLoaderData } from "react-router-dom";
import OrderFood from "./OrderFood";


const MyOrderFood = () => {

    const order = useLoaderData()

   



    return (
        <div>
            <h1 className="mt-6 text-center text-3xl font-bold text-pink-600">My Order <span className="text-yellow-700">Food Items</span></h1>
            <p className="border-2 border-b-yellow-700 w-1/6 mx-auto"></p>


            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
            {
                order.map(order => <OrderFood key={order._id} order={order}></OrderFood>)
            }
            </div>
        
        </div>
    );
};

export default MyOrderFood;