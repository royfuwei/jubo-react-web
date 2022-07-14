import './ProgressDIY.scss';
import { useState } from 'react';
import { useRate } from '../../hook/useRate';

export const ProgressDIY = (props?: any) => {
    // const [percent, setPercent] = useState(10);
    const [value, setValue] = useState(0);

    const percent = useRate(value);

    const increase = async (value: number = 90) => {
        console.log('increase percent: ', percent);
        console.log('increase value: ', value);
        setValue(value);
    }
    const decrease = (value: number = 10) => {
        console.log('decrease');
        console.log('props.value: ', props.value);
        setValue(value);
    }
    /* const mounted: { current: any }=useRef() as { current: any };
    const tm: { current: any }=useRef() as { current: any };
    const tmTwo: { current: any }=useRef() as { current: any };
    useEffect(()=>{ 
        if(!mounted.current){//componentDidMount
          setPercent(value);
          mounted.current=true;
        }
        else{ //componentDidUpdate
          if(percent>value){
            if(tm.current)
              clearTimeout(tm.current)
            tmTwo.current=setTimeout(()=>{setPercent(percent-1)},20);
          }
          else if(percent<value){
            if(tmTwo.current)
              clearTimeout(tmTwo.current)
            tm.current=setTimeout(()=>{setPercent(percent+1)},20);
          }
        }
    
      },[percent, value]); */
    return(
       <div className="ProgressDIY">
           <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
             <div className="progress-bar" style={{backgroundColor:"#fe5196",width: percent.toString()+"%",height:"100%",borderRadius:"10px"}}></div>
           </div>
           目前比率: { percent.toFixed(0) }%
           <button value={90} onClick={() => increase()}>增加比率至90</button>
           <button value={10} onClick={() => decrease()}>減少比率至10</button>
       </div>
    );
}; 