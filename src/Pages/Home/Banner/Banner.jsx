

const Banner = () => {


    return (
        <div className="mt-3">


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
    );
};

export default Banner;