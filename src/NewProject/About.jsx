import React from 'react'
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
 

const About = () => {
  return (
    <>
      <section className='about'>
        <div className="container-xxl">
        <div className=" about_item">
       
       
          <div className="row justify-content-between align-items-center">
            <div className="col-md-4 col-lg-4 order-2 pt-2 order-lg-0 order-md-0 order-xxl-0 ">


              <div className="  about_d  mt-5 mt-xxl-0 mt-lg-0 mt-md-5">
                <img  src="sobur.png " className="img-fluid h-75 card-img-top rounded-5 " alt="" />
                <h2 className='text-center heading  mt-1 text-capitalize mt-3'>abdus sobur</h2>
                <p className='text-center subtitle text-capitalize'>ui/ux designer</p>

              </div>
            </div>
            <div className="col-md-8 col-lg-7  ">
      
              <div className="about_text  text-capitalize ">
              <div className="heading">
          <h1>about <span className='cng'>us</span> </h1>
        </div>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, fugiat! Facilis optio eaque natus eveniet repudiandae omnis, ratione numquam eos!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic vero vitae nesciunt corrupti. Enim, sit. Blanditiis deleniti molestiae aliquam iure quisquam quos enim architecto distinctio reprehenderit, tempora maiores magni.</p>
       

             <div className="row">
             <div className="heading">
                <h1>personal info</h1>
              </div>
              <div className="col-md-6">

                <li><span className='perName'>name</span>: abdus sobur</li>
                <li><span className='perName'>age</span> : 20 years</li>
                <li><span className='perName'>nationalty</span> : bangladesh</li>
                <li><span className='perName'>freelancer</span> : avaible</li>
              
              </div>
              <div className="col-md-6">

                <li><span className='perName'>Address : </span> gobindagonj bangladesh</li>
                <li><span className='perName'>Phone : </span> 01645726503</li>
                <li><span className='perName'>Skype : </span>  Deteryplakson22</li>
                <li><span className='perName'>Email   : </span>  sobur@gmail.com</li>

              </div>

             <div>
             <a name="" id="" className="btn d-inline-block mt-3" href="/" role="button">download cv</a>
             </div>
             </div>
            </div>
          </div>
         </div>
        </div>
        </div>
        </section >
    </>
     
    
  )
}

export default About
