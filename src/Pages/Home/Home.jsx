
import { Link, useLoaderData } from "react-router-dom";
import OurChef from "../OurChef/OurChef";
import Banner from "./Banner/Banner";
import HomeCard from "./HomeCard/HomeCard";
import AboutUs from "../AboutUs/AboutUs";
import SpecialOffer from "./SpecialOffer/SpecialOffer";




const Home = () => {

    const topFood = useLoaderData();

    const foodItem = topFood.slice(12)
    console.log(foodItem)

    return (
        <div>
            <div>
                <Banner></Banner>
            </div>

            <h1 className="text-center text-3xl font-bold mt-10 text-pink-600 ">Top Selling <span className="text-yellow-700">Food</span> </h1>
            <p className="border-2 border-b-yellow-700 w-1/6 mx-auto"></p>

            {/* Home Page Top Selling 6 foods  */}
            <section className="mt-10">

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {
                        foodItem.map(food => <HomeCard key={food._id} food={food}></HomeCard>)
                    }
                </div>
                <div className="text-center mt-6">
                    <Link to="/allfood"> <button className=" btn rounded-lg px-6 btn-sm bg-pink-400 hover:bg-yellow-400 font-bold">See All</button></Link>
                </div>
            </section>

            {/* Our Chafe Sections */}
            <section>
                <OurChef></OurChef>
            </section>

            {/* Our Special Offers  */}

            <section>
                    <SpecialOffer></SpecialOffer>
            </section>



            {/* About Us  */}

            <section>
                <AboutUs></AboutUs>
            </section>
        </div>
    );
};

export default Home;