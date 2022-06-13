import React, { useContext } from "react";
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

    const DEFAULT_USERNAME = 'Default_Username';
    const DEFAULT_PASSWORD = 'Default_Password';
    const [loggedIn,setLoggedIn] = useSessionStorage('loggedIn',false);
    
    return(
        <BrowserContext.Provider value={{
            DEFAULT_USERNAME,
            DEFAULT_PASSWORD,
            loggedIn,setLoggedIn,
            appRoutes
        }}>
            {children}
        </BrowserContext.Provider>
    );
}