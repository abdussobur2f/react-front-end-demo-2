import React, { useState } from 'react'

const Onsubmit = () => {


    const [data, setData] =useState()
    

   
 


    const submitHandler = (event)=> {
        const valueo = event.target.value
      const s=  valueo.preventDefault();
        setData(alert(s))
         
    }
  return (
    <div className='he'>
      




            <form action="" Onsubmit={submitHandler}>
            <input type="text" name=""  id=""   value={ data}/>
                <br />
                <input  value={ data}   type="password" />
                <button Onsubmit={submitHandler} type="submit">submit now</button>
            </form>
 <span>{data}</span>
    </div>
  )
}

export default Onsubmit
