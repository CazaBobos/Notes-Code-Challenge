import { useEffect,useState } from "react";

export default function useLocalStorage(key,defaultValue){
    const [value,setValue] = useState(()=>{
        if(typeof window !== 'undefined'){
            const jsonValue = window.localStorage.getItem(key);
            
            if(jsonValue!=null) return JSON.parse(jsonValue);

            //checks if defaultValue is another function
            return typeof defaultValue === "function" ? 
                defaultValue() : defaultValue;
        }
    });
    
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));
    },[key,value]);

    return [value,setValue];
}

/*
useLocalStorage is a custom hook to access browser local storage.
It is compatible with Server Side Rendering (e.g. NextJs), so it
controls if the page has rendered before trying to access data.
Otherwise it could lead to unexpected behavior
*/