import PropTypes from 'prop-types'; 


const OrderFood = ({ order }) => {
    const { name, photo, date, quantity, price } = order;


    return (
        <div>
            <div className="mt-10 mb-10">

                <div className="">
                    <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-80 rounded-xl bg-clip-border  mx-auto">
                        <div className="relative overflow-hidden text-gray-700 bg-white  rounded-xl bg-clip-border">
                            <img
                                src={photo}
                                className="object-cover w-full "
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    {name}
                                </p>
                                <p className="block text-yellow-700 font-bold text-base antialiased  leading-relaxed text-blue-gray-900">
                                    {price} $
                                </p>
                            </div>
                            <p className="block font-bold  text-sm antialiased  leading-normal text-gray-700 opacity-80">
                                Date : {date}
                            </p>
                            <p className="block font-bold  text-sm antialiased  leading-normal text-gray-700 opacity-80">

                                Quantity : {quantity}
                            </p>
                        </div>
                        <div className="p-6 pt-0">
                            <button
                                className="block w-full select-none rounded-lg bg-yellow-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                               Update
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

OrderFood.propTypes = {
    order:PropTypes.object
    }

export default OrderFood;