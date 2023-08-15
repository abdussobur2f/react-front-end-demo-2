 
import Card from 'react-bootstrap/Card';
import './Service.css'

 import React from 'react'
 
 const Service = () => {
   return (
     < >
    <div className="container-fluid services pb-5">
    <div className="heading  pt-4">
          <h1 className='text-light text-center pb-2'> my <span className='cng '>services</span> </h1>
        </div>
      <div className="container">
            <div className="row g-4">

            <div className="col-md-6 col-lg-4 ">
                        
                    <Card >

                    <Card.Body>
                      <img src="download.png" class="img-fluid  " alt=""/>
                    {/* <img class="card-img-top image-fluid" src="download.png" alt=""/> */}
                    <Card.Title>web desgin</Card.Title>
                    <Card.Text>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem veritatis hic odit optio porro praesentium neque officia esse quia doloribus.
                    </Card.Text>
                   
                    </Card.Body>
                    </Card>
                </div>
              
                <div className="col-md-6 col-lg-4 ">
                        
                <Card className='shadow-lg'>

                    <Card.Body>
                    <img src="download 1.png" class="img-fluid  " alt=""/>
                    <Card.Title>web development</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem veritatis hic odit optio porro praesentium neque officia esse quia doloribus.
                    </Card.Text>
                     
                    </Card.Body>
                    </Card>
                </div>
             
                <div className="col-md-6 col-lg-4  ">
                    
                <Card >

                    <Card.Body>
                    <img src="download 2.png" class="img-fluid  " alt=""/>
                    <Card.Title>graphic design</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem veritatis hic odit optio porro praesentium neque officia esse quia doloribus.
                    </Card.Text>
                     
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 col-lg-4 ">
                    
                <Card >

                    <Card.Body>
                      <img src="download 3.png" class="img-fluid  rounded-circle" alt=""/>
                    
                    <Card.Title>mobile apps</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem veritatis hic odit optio porro praesentium neque officia esse quia doloribus.
                    </Card.Text>
                    
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 col-lg-4 ">
                    
                <Card >

                    <Card.Body>
                    <img src="download 4.png" class="img-fluid  " alt=""/>
                    <Card.Title> seo marketing</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem veritatis hic odit optio porro praesentium neque officia esse quia doloribus.
                    </Card.Text>
                    
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 col-lg-4  ">
                    
                <Card >

                    <Card.Body>
                    <img src="download 5.png" class="img-fluid  " alt=""/>
                    <Card.Title>web banner</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem veritatis hic odit optio porro praesentium neque officia esse quia doloribus.
                    </Card.Text>
                     
                    </Card.Body>
                    </Card>
                </div>

 
             </div>
          
      </div>
    
    </div>



 
     </ >
   )
 }
 
 export default Service
 