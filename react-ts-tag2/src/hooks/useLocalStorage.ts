import { useState } from "react";

export function useLocalStorage(key:string){

    const [data, setData]=useState(()=>{

        const storedValue = localStorage.getItem(key)
        return storedValue ? JSON.parse(storedValue):null;
    })

    const setStorageValue = (newValue:unknown)=>{
            setData(newValue)
            localStorage.setItem(key, JSON.stringify(newValue))
    }

    const removeStoredValue = ()=>{
        setData(null)
        localStorage.removeItem(key)
    }

    return {data, setStorageValue, removeStoredValue}
}