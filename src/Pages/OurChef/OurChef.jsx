import Marquee from "react-fast-marquee";

const OurChef = () => {
    return (
        <div>

                <section className="mt-10">

                    <h2 className="text-center font-bold text-3xl">Our Best Chefs</h2>
                    <p className="border-2 border-b-yellow-700 w-1/6 mx-auto"></p>

                    <Marquee speed={14}>
                        <div className="flex gap-6 mt-10">

                          {/* Card 1  */}
                          
                            <div className="relative grid w-80 h-80 max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/X8DM4kM/chef-3.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                                </div>
                                <div className="relative p-6 px-6 py-14 md:px-12">
                                    <p className="block font-sans text-2xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                        MASON ROBINSON
                                    </p>
                                    <p className="text-white">CHEF</p>
                                </div>
                            </div>

                          {/* Card 2  */}

                            <div className="relative grid w-80 h-80 max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/jJ9VHpN/chef1.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                                </div>
                                <div className="relative p-6 px-6 py-14 md:px-12">
                                    <p className="block font-sans text-2xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                    SOPHIE WHITE
                                    </p>
                                    <p className="text-white">COOK</p>
                                </div>
                            </div>

                          {/* Card 3  */}

                            <div className="relative grid w-80 h-80 max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/BrPcjWQ/Chef-2.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                                </div>
                                <div className="relative p-6 px-6 py-14 md:px-12">
                                    <p className="block font-sans text-2xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                   THOMAS WILSON
                                    </p>
                                    <p className="text-white">SOUS CHEF</p>
                                </div>
                            </div>

                          {/* Card 4  */}

                            <div className="relative grid w-80 h-80 max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/b36yh6S/chef4.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                                </div>
                                <div className="relative p-6 px-6 py-14 md:px-12">
                                    <p className="block font-sans text-2xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                  DALLAS KIM
                                    </p>
                                    <p className="text-white">PASTRY CHEF</p>
                                </div>
                            </div>
                            
                          {/* Card 5  */}

                            <div className="relative grid w-80 h-80 max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 mr-5">
                                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/fXPHjBP/chef5.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                                </div>
                                <div className="relative p-6 px-6 py-14 md:px-12">
                                    <p className="block font-sans text-2xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                    SHERMAN LEONARD
                                    </p>
                                    <p className="text-white">COOK</p>
                                </div>
                            </div>

                        </div>
                    </Marquee>

                </section>
         

        </div>
    );
};

export default OurChef;