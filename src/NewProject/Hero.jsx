import React from 'react'
import './Hero.css'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container-xxl  ">


       
      <div className="Hero  row justify-content-between h-100  align-items-center">
            <div className="hero_container gap-1 gap-xxl-2 ga-md-0 text-light col-xxl-6 mb-3">
            
                <h1 className="heading ">Front-End Developer</h1>
               
               

            <div className='typewritter heading'>
    <h1>
      I'm a {' '}
      <span>
   
        <Typewriter
          words={['Web designer', 'ui/ux designer', 'Graphics', 'Freelancer!']}
          loop={5}
          cursor
          cursorStyle='_'
          typeSpeed={200}
          deleteSpeed={50}
          delaySpeed={1000}
       
        />
      </span>
    </h1>
  </div>
  <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae eveniet libero consequatur obcaecati vitae! Accusantium minus facilis voluptatum libero ab.</p>

  <div>
  <button className="btn  mt-2">Red More</button>
  </div>
            </div>


            <div className=" col-lg-5 img ">
      
     <div className='h-100 '>
     <img className='img-fluid mt-4 mt-xxl-0' src="hero-bg.png" alt="imag not found" />
     </div>
  
    </div>

      </div>
      </div>





      </div>
    </>
  )
}

export default Hero
