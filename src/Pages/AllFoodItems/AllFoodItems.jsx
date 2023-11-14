import { useLoaderData } from "react-router-dom";
import FoodsCard from "./FoodsCard";

const AllFoodItems = () => {

    const allFoods = useLoaderData();


    return (

        <div>
            <h1 className="text-3xl font-bold text-center mt-3">All Food Items {allFoods.length} </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">

                {
                    allFoods.map(foods => <FoodsCard key={foods._id} foods={foods}></FoodsCard>)
                }
            </div>

        </div>
    );
};

export default AllFoodItems;