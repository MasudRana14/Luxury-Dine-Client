

const AboutUs = () => {

    return (
        <div className="mt-10">

            <h1 className="text-center font-bold text-3xl text-yellow-700">About <span className="text-pink-600">Us</span></h1>
            <p className="border-2 border-b-yellow-700 w-1/12 mx-auto"></p>


            <div className="mt-6">
                <div className="hero  bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://i.ibb.co/tBh2GF0/about.jpg" className="w-1/2 rounded-lg shadow-xl gap-5" />
                        <div>
                            <h1 className="text-4xl font-bold">Come for our fresh, delicious
                                food you wont forget.</h1>
                            <p className="py-6">Welcome to Luxury Dine a culinary haven where every dish is a masterpiece. Our chefs craft a symphony of flavors using the finest ingredients. Immerse yourself in our chic ambiance, where luxury meets comfort. From intimate dinners to celebratory feasts, savor exceptional moments at Gastronome Delights, where each bite is a journey.</p>
                            <button className="btn btn-sm bg-yellow-400 hover:bg-pink-500">Our History</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AboutUs;