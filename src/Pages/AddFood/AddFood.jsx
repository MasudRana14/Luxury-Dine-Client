import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from 'sweetalert2'

const AddFood = () => {

    const { user } = useContext(AuthContext)

    const handleAddFood = event =>{
        event.preventDefault()

        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const addby = form.addby.value;
        const origin = form.origin.value;
        const description = form.description.value;

        const addFood = {name,photo,category,quantity,price,addby,origin,description};
        
        // Send data to the server 
        fetch('http://localhost:5000/foods', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(addFood)
        })
        .then(res => res.json())
        .then(data =>{
           if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Food Added Successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })
           }
        })


    }





    return (
        <div className="w-1/2 mx-auto mt-10 mb-10 bg-yellow-100 p-6">

            <h1 className="text-center text-3xl font-bold mb-5 ">Add Food Items</h1>


            <form onSubmit={handleAddFood}>
                {/* Form Row  */}
                <div className="md:flex gap-5 mb-6">

                    {/* Food Name  */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Food Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Food Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* Food Image  */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Food Image</span>
                        </label>
                        <label className="input-group">
                            <input type="url" name="photo" placeholder="Food Image" className="input input-bordered w-full" />
                        </label>
                    </div>
                   

                </div>
                <div className="md:flex gap-5 mb-6">

                    {/* Food Category */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Food Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Food Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* Food quantity  */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                   

                </div>
                <div className="md:flex gap-5 mb-6">

                    {/* Food Price  */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* Food Add By  */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Add By</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="addby" placeholder="Add By" defaultValue={user?.displayName} readOnly className="input input-bordered w-full" />
                        </label>
                    </div>
                   

                </div>
                <div className="md:flex gap-5 mb-6">

                    {/*Food Origin  */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Food Origin</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="origin" placeholder="Food Origin" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* Food Image  */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                   

                </div>

                    {/*Add Food Button */}
                    <input type="submit" value="Add Item" className="btn btn-secondary w-full mt-4" />

               
            </form>


        </div>
    );
};

export default AddFood;