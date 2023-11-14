// import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Details = () => {
    // const [show, setShow] = useState([]);
    const details = useLoaderData();
    const { name, photo, category, description, price, addby, origin } = details;


    return (
        <div className="mt-10">

            <h1 className="text-center text-3xl font-bold underline"><span className="text-pink-600">Our All</span> <span className="text-yellow-700">Foods Items</span></h1>
          

            <div className="mt-10 mb-10 bg-green-100 py-10 ">


                <div className="relative mx-auto flex w-full max-w-[50rem] flex-row rounded-xl bg-pink-100 bg-clip-border text-gray-700 shadow-md ">

                    <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                        <img
                            src={photo}
                            alt="image"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="p-6">
                        
                        <h4 className="block mb-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                           {name}
                        </h4>

                        <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug">
                           <span>Category: </span>
                           {category}
                        </h4>

                        <p className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug">
                           <span>Price: </span>
                           {price}
                        </p>

                        <p className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug">
                           <span>Made By: </span>
                           {addby}
                        </p>

                        <p className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug">
                           <span>Origin: </span>
                           {origin}
                        </p>

                        <p className="block mb-8  text-base  antialiased font-semiboldleading-relaxed text-gray-700">
                            {description}
                        </p>
                        <div>
                            <button className="btn btn-sm bg-yellow-500 hover:bg-pink-400 font-bold">Order Now</button>
                        </div>
                    </div>
                </div>


            </div>



        </div>
    );
};

export default Details;