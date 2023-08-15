import React, { useState } from 'react'
import {qustion} from './Api'
import MyAccordian from './MyAccordian'
const Acc = () => {

    const [data,setData] = useState(qustion);
 
  
  return (
    <div>
      {
        data.map((element)=> <MyAccordian x={element} key={element}/>)
      }
    </div>
  )
}

export default Acc
