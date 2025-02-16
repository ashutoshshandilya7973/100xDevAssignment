import {createContext, useState} from 'react';

export const AuthContext = createContext(null);

const AuthContextProvider=({children})=>{
    const [user,setUser]=useState("Ashu");
    const [isAuthenticated,setIsAuthenticated]=useState(false); 


    const isLogin=({email})=>{
        console.log(email);
         setUser(email);
         setIsAuthenticated(true);
    }
    const isLogout=()=>{
        setUser("");
        setIsAuthenticated(false);
    }

    const data={
        user,
        isAuthenticated,
        isLogin,
        isLogout
    };
    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;