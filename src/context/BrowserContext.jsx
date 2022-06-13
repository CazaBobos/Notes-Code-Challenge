import React, { useContext, useState } from "react";
import useSessionStorage from "../hooks/useSessionStorage";

const BrowserContext = React.createContext();

export function useBrowser(){
    return useContext(BrowserContext);
}

export const appRoutes = {
    login: '/',
    myNotes: '/mynotes',
    archivedNotes: '/archivednotes'
};

export const BrowserProvider = ({children})=>{

    const DEFAULT_USERNAME = 'Default_User';
    const DEFAULT_PASSWORD = 'Default_Password';
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [isLoggedIn,setIsLoggedIn] = useSessionStorage('loggedIn',false);
    
    return(
        <BrowserContext.Provider value={{
            DEFAULT_USERNAME,
            DEFAULT_PASSWORD,
            username,setUsername,
            password,setPassword,
            isLoggedIn,setIsLoggedIn,
            appRoutes
        }}>
            {children}
        </BrowserContext.Provider>
    );
}