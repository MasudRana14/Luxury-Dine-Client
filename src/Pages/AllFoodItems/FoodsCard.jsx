

const FoodsCard = ({foods}) => {

    const {name,photo,category,quantity,price} = foods;

    return (

        <div>

           <div>

           <div className="w-80 mx-auto border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <div>
                    <img className="rounded-t-lg" src={photo} alt="" />
                </div>
                <div className="p-5">
                    <h2>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    </h2>

                    <p className=" text-gray-700 dark:text-gray-400 text-lg font-bold"><span className="font-bold">Category:</span> {category}</p>

                    <p className="font-bold text-gray-700 dark:text-gray-400 text-lg"><span className="font-bold">Quantity:</span> {quantity}</p>

                    <p className="mb-3 font-bold text-gray-700 dark:text-gray-400 text-lg"><span className="font-bold">Price:</span> {price} $</p>


                    <button className="btn btn-sm bg-yellow-500 hover:bg-pink-400 font-bold">Details</button>
                </div>

            </div>

           </div>

        </div>
    );
};

export default FoodsCard;