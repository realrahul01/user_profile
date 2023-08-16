/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ThemeContext  = createContext();

const ThemeProvider = ({children})=>{
    const [isDark,setIsDark] = useState(localStorage.getItem('isDarkTheme')==='true')
    console.log(isDark)

    const toggleTheme = ()=>{
        setIsDark(!isDark)
    }

    useEffect(()=>{
        localStorage.setItem('isDarkTheme',isDark)
    },[isDark])


    return(
        <ThemeContext.Provider value={{isDark,toggleTheme}}>
             {children} 
             {isDark && (
                <style>
                    {`
                    body{
                        background-color: #042743;
                        color: #fff;
                    }
                    `}
                </style>
             )}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider