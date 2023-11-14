import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import swal from "sweetalert";
import { AuthContext } from "../Providers/AuthProvider";

const NavBar = () => {


    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate();


    const handleSignOut = () => {

        logOut()
            .then(res => {
                console.log(res)
                swal("Good job!", "SignOut Successfully", "success")
            })

            .catch(error => {
                swal("Oops..!", `${error.message}`, "error");
            })
        navigate("/login")
    }


    const navList = <>

        {/* Home  */}
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-700 underline" : ""
            }
        >
            <p className="font-bold"> Home</p>
        </NavLink>

        {/* All Food Items  */}

        <NavLink
            to="/allfood"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-700 underline" : ""
            }
        >
            <p className="font-bold">All Food Items</p>
        </NavLink>

        {/* Add Food */}

       {
       user&&
         <NavLink
         to="/addfood"
         className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "text-yellow-700 underline" : ""
         }
     >
         <p className="font-bold">Add Food</p>
     </NavLink>
       }

        {/* About Us  */}
        <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-700 underline" : ""
            }
        >
            <p className="font-bold">About US</p>
        </NavLink>

        {/* Contact  */}
        <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-700 underline" : ""
            }
        >
            <p className="font-bold">Contact</p>
        </NavLink>

        {/* Blog  */}

        {
            user &&
            <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-yellow-700 underline" : ""
                }
            >
                <p className="font-bold">Blog</p>
            </NavLink>
        }




        {
            user ? "" : <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-yellow-700 underline" : ""
                }
            >
                <p className="font-bold">Register</p>
            </NavLink>

        }



    </>


    return (
        <div>
            <div className="navbar h-16 shadow-md rounded-lg mt-5 px-6 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navList}
                        </ul>
                    </div>
                    <div className=" flex items-center gap-3">
                        <img className="w-9 md:w-16" src="https://i.ibb.co/4jmn4hF/Chef-logo-vector-PNG-1.png" alt="" />
                        <h1 className="text-sm lg:text-2xl md:text-2xl font-bold text-yellow-700 ">Luxury<span className="text-pink-500"> Dine</span></h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        {navList}
                    </ul>
                </div>

                <div className="navbar-end gap-2">


                    {
                        user && <div className="flex items-center gap-2 text-xs ">

                            <div>
                                <h2 className="font-medium text-center">{user?.displayName
                                }</h2>

                                <h2 className="font-normal">
                                    {user.email}
                                </h2>
                            </div>

                            <div className="avatar">
                                <div className="w-9 rounded-full">

                                    <img src={user?.photoURL} />

                                </div>

                            </div>



                        </div>


                    }



                    <div>

                        {
                            user ? <div onClick={handleSignOut} className="navbar-end ">
                                <Link className="font-bold text-white px-2 py-1 rounded-lg hover:bg-cyan-500 bg-pink-500">SignOut</Link>
                            </div>
                                :
                                <div className="navbar-end">
                                    <Link className="font-bold text-white px-2 py-1 rounded-lg hover:bg-cyan-500 bg-pink-500" to="/login">Login</Link>
                                </div>
                        }
                    </div>


                </div>
            </div>
        </div>
    );
};

export default NavBar;