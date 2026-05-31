import { useState,useEffect,useRef } from "react";
export function useDebounce(value,delay){
    const currentClock = useRef();
    
    const fn = ()=>{
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(value,delay);
    }

    return fn;
}