import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 

const FoodsCard = ({ foods }) => {

    const { _id, name, photo, category, quantity, price } = foods;

    return (

        <div>

            <div>

                <div className="w-80 mx-auto border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <div>
                        <img className="rounded-t-lg" src={photo} alt="" />
                    </div>
                    <div className="p-5">
                        <div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                        </div>

                        <p className=" text-gray-700 dark:text-gray-400 text-lg font-bold"><span className="font-bold">Category:</span> {category}</p>

                        <p className="font-bold text-gray-700 dark:text-gray-400 text-lg"><span className="font-bold">Quantity:</span> {quantity}</p>

                        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400 text-lg"><span className="font-bold">Price:</span> {price} $</p>


                        <Link to={`/details/${_id}`}>
                            <button className="btn btn-sm bg-yellow-500 hover:bg-pink-400 font-bold">Details</button>
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
};

FoodsCard.propTypes = {
foods:PropTypes.object
}

export default FoodsCard;