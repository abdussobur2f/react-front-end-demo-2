// import React from 'react'

// import { useState } from "react"
// import { Alert } from 'react-bootstrap'
 

//  const Fromhandal = (props) => {



//   const [update,setUpdate] = useState("enter the text here ")
//   const [dark , setDark] = useState( 
//    { color:'black',
//     backgroundColor:'white',
//  }
 
// )

//  const EnableMode =() =>{
//   if(dark.color==='black'){
//     setDark({
//       color:'white',
//       backgroundColor:'black'
//     })
//   }
//   else{
//     setDark(   { color:'black',
//     backgroundColor:'white',
//  })
//   }
//  }




















//   const Uppercase= () =>{

//     let Newtext = update.toUpperCase();
    
//     setUpdate(Newtext)
//   }

//   const Lowercase = () => {
//     let Newt = update.toLocaleLowerCase();
//     setUpdate(Newt)
//   }

// const Clear = () => {
//   setUpdate('')
// }
  
//   const onChange = (event) => {
//     setUpdate(event.target.value)


//   }
// const handleSubmit = () => {
//    Alert('submit')
 

// }
  
 
//    return (
// <div>

    
// <div className="on"  style={dark}  >
//        <h1>The textarea please </h1>
      
//        <textarea  onChange={onChange} value={update} name="" id="" cols="50" rows="10"></textarea> <br />
//        <input type="text" name="" id="" />
//        <br /><br />
       
//        <button onClick={Uppercase}>upparcase</button>
//        <button onClick={Lowercase}>Lowercase</button>
//        <button onClick={Clear}> Clear</button> <br /> <br />
//        <button onClick={EnableMode}>dark mode</button>
     
      

//      </div>

//      <div className="summery" >
//       <p>word {update.split("").length } charcters {update.length}</p>
      
//       <h1>preview</h1>
//       <span>{update}</span>


//      </div>
// </div> 
//    )
//  }
 
//  export default Fromhandal
 