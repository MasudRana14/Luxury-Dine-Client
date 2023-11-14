
import OurChef from "../OurChef/OurChef";
import Banner from "./Banner/Banner";



const Home = () => {
    return (
        <div>
            <div>
               <Banner></Banner>
            </div>
            
            <h1 className="text-center text-3xl font-bold mt-10 underline">Top Selling Food </h1>

                <section>
                    <OurChef></OurChef>
                </section>
           
        </div>
    );
};

export default Home;