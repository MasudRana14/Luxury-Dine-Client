import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {



    const { createUser,  userUpdate} = useContext(AuthContext)
const [errorRegister, setErrorRegister] = useState('')

const navigate = useNavigate();


const handleRegister = e=>{
    e.preventDefault();
    setErrorRegister('')
   const form = new FormData(e.currentTarget);
   const name = form.get('name');
   const email = form.get('email');
   const photo = form.get('photo');
   const password = form.get('password');
  
//    if (!/(?=.*[A-Za-z])(?=.*\d)]{7,12}$/.test(password))
    
   if (!password.length<6){

//     Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Something went wrong!',
//         footer: '<a href="">Why do I have this issue?</a>'
//       })
//       return

//    }else{
    
    createUser(email, password)
    .then(result => {
        console.log(result)
        swal("Good job!", "Register Successfully", "success");
       
        userUpdate(name, photo)
        .then(result =>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
        navigate("/")
    })
   
    .catch(error => {
       swal("Oops..!", `${error.message}`, "error");
    })
   

}

   }


    return (

        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img className="w-[550px]" src="https://i.ibb.co/9Wfx9Wk/Register.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-[400px] shadow-2xl bg-base-100">

                        <h1 className="text-2xl font-bold p-3 text-center">Register Now</h1>

                         <div>
                                {
                                    errorRegister && <h1 className="text-red-600 text-center mb-2">{errorRegister}</h1>
                                }
                            </div>

                        <form onSubmit={ handleRegister } className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="your email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                              
                            </div>

                            <div className="form-control">
                                <button className="btn btn-primary hover:bg-amber-600">Register</button>
                            </div>

                            <div className="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
                            Already Have Account Please? <Link to="/register" className="text-blue-700 hover:underline dark:text-blue-500">Please Login</Link>
                            </div>
                        </form>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;