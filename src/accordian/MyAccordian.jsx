import React, { useState } from 'react'
 

const Myaccordian = (props) => {
    const {ask,qus}= props.x
    const [show,setShow]=useState(false)
  return (
    <div>
        <p onClick={()=>setShow(!show)}>+</p>
            <h5 onClick={()=>setShow(!show) }>{ask}</h5>
            {show && <p>{qus}</p>}
    </div>
  )
}

export default Myaccordian;
