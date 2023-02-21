import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import app from '../../firebasecompo.js/firebasecompo';

const auth=getAuth(app);
export const AuthContext= createContext();
const UserContext = ({children}) => {

    const [user,setUser]=useState({displayName:'akash' })
    const [load,setLoad]=useState(true)

    const provider= new GoogleAuthProvider()
  


    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signin =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoad(false)
        })
        return ()=>{
            unsubscribe();
        }

    },[])

        const logout=()=>{
            return signOut(auth);
        }

        const signingoogle=()=>{
           
            return signInWithPopup(auth,provider);
        
        }



    const authInfo={user:user,createUser,signin,logout,signingoogle,load}
    return (
    <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default UserContext;