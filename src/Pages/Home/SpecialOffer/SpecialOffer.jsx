
const SpecialOffer = () => {

    return (
        <div className="mt-14 mb-10">







            <div className="mt-8">
                <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/hYDDy8q/Special-Offer.jpg)' }}>

                    <div className="hero-overlay h-96 bg-opacity-10 "></div>

                    <div className="hero-content text-center  text-neutral-content">

                        <div className="bg-gray-200 opacity-60 px-3 py-3 lg:px-60 lg:py-8 rounded-xl">

                            <h1 className="text-center md:text-4xl font-bold text-pink-600">Our Special <span className="text-yellow-700">Offers</span></h1>


                            <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-16 mt-6">


                                <div className=" ">
                                    <h3 className="mb-2 text-black underline md:text-2xl font-bold">2 FOR $10</h3>
                                    <h3 className=" text-black underline md:text-2xl font-bold">Choice of 2:</h3>

                                    <div className="mt-2 mb-3">

                                        <h4 className="text-black font-bold">Soup</h4>
                                        <p className="text-black font-bold">1/2 Acai Bowl</p>
                                        <p className="text-black font-bold">1/2 Sandwich</p>
                                        <p className="text-black font-bold">1/2 Cheesecake</p>

                                    </div>
                                    <button className="btn btn-sm btn-warning font-bold">Purchase Now</button>
                                </div>

                                <div>
                                    <div className="">
                                        <div>
                                            <h3 className=" text-black md:text-2xl font-bold">1 DAY FREE</h3>
                                            <p className="mb-2 text-black underline font-bold">When You Buy 6 Days </p>
                                        </div>
                                        <div>
                                            <h3 className=" text-black md:text-2xl font-bold">7 Day Detox</h3>
                                            <p className="mb-2 text-black underline font-bold">Cleanse Program:</p>
                                        </div>

                                        <h4 className="text-black font-bold">Includes 1/2 Acai Bowl or Smoothie</h4>
                                        <p className="text-black font-bold">7 Days Plans Starting At $42</p>
                                        
                                        <button className="btn btn-sm btn-warning font-bold mt-3">Purchase Now</button>
                                    </div>
                                </div>



                            </div>


                        </div>

                    </div>
                </div>


            </div>



        </div>
    );
};

export default SpecialOffer;