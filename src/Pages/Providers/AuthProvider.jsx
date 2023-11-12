import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import PropTypes from 'prop-types';
import app from "../../FireBase/firebase.config";

export const AuthContext = createContext(null)

const provider = new GoogleAuthProvider();

const auth = getAuth(app);



const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

// Create User 
const createUser = (email, password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
}


    const signIn = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const googleLogin = ()=>{
        return signInWithPopup(auth, provider)
    }

    // userLogout
    const logOut = ()=>{
        setLoader(true)
        return signOut(auth)
    } 

    // UserUpdate 
    const userUpdate =(name, photo)=>{
  
        return updateProfile(auth.currentUser, {
            displayName: name , photoURL: photo,
          })
    }

useEffect(()=>{
    const unSubscribe =onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setLoader(false)
    })
    return ()=>{
        unSubscribe()
    }
},[])





const authInfo ={
    user,
    createUser,
    logOut,
    signIn,
    loader,
    googleLogin,
    userUpdate
}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
children:PropTypes.object.isRequired
}

export default AuthProvider;