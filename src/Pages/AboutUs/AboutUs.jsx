

const AboutUs = () => {

    return (
        <div className="mt-4">


            <div>

                <section className="bg-center bg-no-repeat bg-cover  bg-[url('https://i.ibb.co/Hzby4WQ/banner.jpg')] bg-gray-400 h-[550px] bg-blend-multiply rounded-lg">
                    <div className="px-4 mx-auto max-w-screen-xl text-center py-24">

                        <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-5xl opacity-90 ">Luxury Dine Restaurant</h1>
                        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Welcome to Luxury Dine Restaurant where passion meets plate in a symphony of flavors. <br /> Our chefs craft culinary masterpieces, blending tradition with innovation. <br /> Join us for an unforgettable dining experience where <br /> each moment is a celebration of exquisite taste and warm hospitality.</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                            <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-yellow-400 focus:ring-4 focus:ring-gray-400">
                                Learn more
                            </a>
                        </div>
                    </div>
                </section>
            </div>




            <h1 className="text-center font-bold text-3xl text-yellow-700 mt-7">About <span className="text-pink-600">Us</span></h1>
            <p className="border-2 border-b-yellow-700 w-1/12 mx-auto"></p>


            <div className="mt-6 mb-8">
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