
import OurChef from "../OurChef/OurChef";
import Banner from "./Banner/Banner";



const Home = () => {
    return (
        <div>
            <div>
               <Banner></Banner>
            </div>
            
            <h1 className="text-center text-3xl font-bold mt-10 ">Top Selling Food </h1>
            <p className="border-2 border-b-yellow-700 w-1/6 mx-auto"></p>

                <section>
                    <OurChef></OurChef>
                </section>
           
        </div>
    );
};

export default Home;