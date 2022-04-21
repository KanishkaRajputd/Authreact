import { createContext,useState } from "react";

export const AuthContext=createContext();
export const AuthContextProvider=({children})=>{
    const [isAuth,setAuth]=useState("Login First");
    const toggleAuth=(inc)=>{
        setAuth(inc);
    }


    return (<AuthContext.Provider value= {{isAuth,toggleAuth}}>
        {children}
    </AuthContext.Provider>);
}
