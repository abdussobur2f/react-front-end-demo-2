 import React from 'react'
 import 'bootstrap/dist/css/bootstrap.min.css';
//  import 'bootstrap/dist/css/bootstrap.min.css';
 
// //  import FromHandal from './component/FromHandal';
//  import BasicExample from './component/BasicExample';
import './App.css';

// // function App() {
// // const [dark , setDark] = useState({
// //   color:'green'
// // })
// // const Update =()=> {
// //   if(dark.color==='green'){
// //     setDark({color:'black'})
// //   }
// // }
 

// //   return (
// //       <div>
// //         <FromHandal/>
// //         <BasicExample mode={dark} update={Update} />
// //       </div>
    
// //   );
// // }
//  import Home from './TodoApp/Home';
// import Curseul from './TodoApp/Cursosal/Curseul';
// import Onsite from './TodoApp/Cursosal/Onsite';
// import Accoridian from './TodoApp/Cursosal/Accoridian';
//  import Acc from './accordian/Acc';
// import Range from './NewProject/Range';

import NavigaTion from './NewProject/NavigaTion';
 import Hero from './NewProject/Hero';
 import About from './NewProject/About';
 import Service from './NewProject/Service';
 import Experince from './NewProject/Experince';
 import Education from './NewProject/Education';
 import Testimonial from './NewProject/Testimonial';
 import Contact from './NewProject/Contact';
 import Portfolio from './NewProject/Portfolio/Portfolio';
 import Footer from './NewProject/Footer';
//  import Accoridian from './TodoApp/Cursosal/Accoridian';
//  import NewTodo from './TodoApp/NewTodo'
 
//  import { BrowserRouter, Routes, Route } from "react-router-dom";
 const App = () => {
  return (
    <div>
        
        <NavigaTion/>
        <Hero/>
        <About/>
         <Service/>
        <Experince/>
        <Education/>
        <Portfolio/>
         <Testimonial/>
        <Contact/>
        <Footer/> 
       {/* <Accoridian/> */}
       {/* <NewTodo/>  */}

   
    </div>
  )
}

export default App
 
// import ReactDOM from "react-dom/client";
 
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React from 'react'
// import Nav from "./Nav";
// import Home from "./Home";
// import About from "./About";
// import Contacrrrt from "./Contacrrrt";
// const App = () => {
//   return (
//     <div>
       
//   <Nav/>
//         <BrowserRouter>
//       <Routes>
//       <Route path="/" element={ <Nav/> } />
//         <Route  index element={ <Home/> } />
//         <Route path="about" element={ <About/> } />
//         <Route path="Contact" element={ <Contacrrrt/> } />
//         <Route />
//       </Routes>
//     </BrowserRouter>
//     </div>
//   )
// }

// export default App
