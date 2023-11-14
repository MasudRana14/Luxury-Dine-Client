import PropTypes from 'prop-types'; 


const HomeCard = ({ food }) => {

    const { photo, name, category, price,  } = food;

    return (
        <div>
            <div
                className="block w-72 bg-gray-200 mx-auto rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div
                    className="relative overflow-hidden bg-cover bg-no-repeat"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    <img
                        className="rounded-t-lg"
                        src={photo}
                        alt="" />
                </div>
                <div className="p-6">
                    <h5
                        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                       {name}
                    </h5>
                    <p className="mb-2 font-bold text-neutral-600 dark:text-neutral-200">
                        <span className="">Category :</span> {category}
                    </p>
                    <p className="mb-2 font-bold text-neutral-600 dark:text-neutral-200">
                        <span className="">Price :</span> {price} $
                    </p>
                    <button className="btn btn-sm bg-yellow-500 hover:bg-pink-400 font-bold">Details</button>
                </div>
            </div>

        </div>
    );
};


HomeCard.propTypes = {
    food:PropTypes.object
    }
    

export default HomeCard;