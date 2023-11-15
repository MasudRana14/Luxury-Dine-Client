
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";


const FoodPurchase = () => {

    const order = useLoaderData()
    const { user } = useContext(AuthContext)
    const { name, price } = order;

    const handlePurchase = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const date = form.date.value;

        const purchase = { name, price, quantity, buyerName, buyerEmail, date };



        // Send data to the server 
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Purchase Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })





    }



    return (
        <div className="mt-8">
            <div>
                <h1 className="text-3xl text-center font-bold">Purchase Your Food</h1>
                <p className="border-2 border-b-yellow-700 w-1/6 mx-auto"></p>
            </div>


            <div className="w-2/3 mx-auto mt-10 mb-10 bg-green-100 p-10">

                <form onSubmit={handlePurchase}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} placeholder="Food Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name="price" defaultValue={price} readOnly placeholder="Price" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Buyer Name</span>
                            </label>
                            <input type="text" name="buyerName" defaultValue={user?.displayName} readOnly placeholder="Buyer Name" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Buyer Email</span>
                            </label>
                            <input type="email" name="buyerEmail" defaultValue={user?.email} readOnly placeholder="Buyer Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Buying Date</span>
                            </label>
                            <input type="date" name="date" placeholder="Buying Date" className="input input-bordered" required />

                        </div>

                    </div>



                    <div className="form-control mt-6">
                        <input className="btn btn-secondary hover:bg-yellow-600" type="submit" value="Purchase" />
                    </div>



                </form>
            </div>
        </div>

    );
};

export default FoodPurchase;