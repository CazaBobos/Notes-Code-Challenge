import { useEffect,useState } from "react";

export default function useSessionStorage(key,defaultValue){
    const [value,setValue] = useState(()=>{
        if(typeof window !== 'undefined'){
            const jsonValue = window.sessionStorage.getItem(key);
            
            if(jsonValue!=null) return JSON.parse(jsonValue);

            //checks if defaultValue is another function
            return typeof defaultValue === "function" ? 
                defaultValue() : defaultValue;
        }
    });
    
    useEffect(()=>{
        sessionStorage.setItem(key,JSON.stringify(value));
    },[key,value]);

    return [value,setValue];
}

/*
useSessionStorage works the same way useLocalStorage 
does, with the difference data isn't persistent. for
more info, read useLocalStorage hook comment.
*/