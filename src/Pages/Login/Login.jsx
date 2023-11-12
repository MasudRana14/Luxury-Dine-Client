import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";


const Login = () => {

    const { signIn, googleLogin } = useContext(AuthContext)
    const [errorAlert, setErrorAlert] = useState()
    const location = useLocation()
    const changeNavigate = useNavigate('')



    const handleLogin = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        
        signIn(email,password)
        .then(result =>{
            console.log(result)
            swal("Good job!", "Login Successfully", "success");
            changeNavigate(location?.state ? location.state : "/")
        })
        .catch(error =>{
            setErrorAlert( swal("Opps",error.message))
        })
    
   
   
    
    }
    


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img className="w-[550px]" src="https://i.ibb.co/9qS4hL7/undraw-online-ad-re-ol62.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-80 max-w-sm shadow-2xl bg-base-100">

                        <h1 className="text-2xl font-medium p-3 text-center">Sign In</h1>

                        <div>
                            {
                                errorAlert && <h1 className="text-red-600 text-xl mb-2">{errorAlert}</h1>
                            }
                        </div>

                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label justify-end">
                                    <a href="#" className="label-text-alt link link-hover ">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <button className="btn btn-primary hover:cursor-pointer">Login</button>
                            </div>

                            <div className="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <Link to="/register" className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                        </div>
                        </form>
                        <div className="w-1/2 mx-auto mb-3 text-center bg-amber-600 text-white rounded-2xl p-2 font-medium hover:cursor-pointer hover:bg-cyan-600">
                            <button onClick={googleLogin}>Google Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;