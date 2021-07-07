import React , {useEffect, useState } from 'react';
function IntervalHookCounter (){
  const [count,setCount] = useState(0);
  const thick = ()=>{
    setCount(prevCount => prevCount+1)
  }
  useEffect(()=>{
const interval = setInterval(thick,1000);
return ()=>{
  clearInterval(interval);
}
  },[count])

  return<div>
counter : {count}
  </div>
}
export default IntervalHookCounter;