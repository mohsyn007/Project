import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { GoogleAuthProvider, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);
  
 
const createUser=(email,password)=>{
  setLoading(true);
  return createUserWithEmailAndPassword(auth,email,password);

}
const signInUser=(email,password)=>{
  setLoading(true);
  return signInWithEmailAndPassword(auth,email,password);

}
const signInWithGoogle=()=>{
  return signInWithPopup(auth,googleProvider);
}
const signOutUser=()=>{
  setLoading(true);
  return signOut(auth);
  
}
useEffect(()=>{
 const unSubscribe= onAuthStateChanged(auth,currentUser=>{
 
  setUser(currentUser);
  setLoading(false);

  })
  return ()=>{
    unSubscribe();
  }
},[])

// onAuthStateChanged(auth,currentUser=>{
//   if(currentUser){
//   
//     setUser(currentUser);
//   }
//   else{
//     
//     setUser(null);
//   }
// })


const authInfo = {
 
  user,
  loading,
  createUser,
  signInUser,
  signInWithGoogle,
  signOutUser
 };
  return (
    <AuthContext.Provider value={authInfo}>
      {/* main part who will have access to this context */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

/* 
1. Create Context with null default

2.Create Provider
3.Set a  value
4.use the authProvider in main.jsx 
5.access the children inside the authprovider in the main.jsx
6.export auth context
*/
