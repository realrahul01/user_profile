/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({children})=>{
    const [isUserLogin,setIsUserLogin] = useState(sessionStorage.getItem('isLogin')==='true')  // initial isUserLogin is false here

    useEffect(()=>{
        sessionStorage.setItem('isLogin',isUserLogin)
    },[isUserLogin])
    
    const loginHandler = ()=>{
        setIsUserLogin(true)
    }

    const logoutHandler = ()=>{
        setIsUserLogin(false)
    }
    return(
        <AuthContext.Provider value={{isUserLogin,loginHandler,logoutHandler}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;