import { useEffect, useRef, useState } from "react";

export interface rateMounted {
    current: any;
}

export const useRate = (value: number) => {
    const [rate, setRate] = useState(0);
    const mounted: rateMounted = useRef();
    const tm: rateMounted = useRef();
    const tm2: rateMounted = useRef();

    useEffect(()=>{ 
        if(!mounted.current){//componentDidMount
            setRate(value);
            mounted.current=true;
        }
        else{ //componentDidUpdate
            if(rate>value){
                if(tm.current) clearTimeout(tm.current);
                tm2.current=setTimeout(()=>{setRate(rate-1)},20);
            }
            else if(rate<value){
                if(tm2.current) clearTimeout(tm2.current);
                tm.current=setTimeout(()=>{setRate(rate+1)},20);
            }
        }
    
    },[rate, value]);
    return rate;
};