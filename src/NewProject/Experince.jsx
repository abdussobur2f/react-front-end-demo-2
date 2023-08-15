import React from 'react'
import './Experince.css'
import Card from 'react-bootstrap/Card';


const Experince = () => {
  return (
    < >
    <section className="experince">
    <div className="heading  pt-4">
          <h1 className='text-light text-center pb-2 text-black'> my <span className='cng '>Experience</span> </h1>
        </div>
        .<div class="container">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12">
                              
                <Card className=' mb-3' >
                <Card.Header><h3>Visual Designer</h3>
                    <span>2017-2018 full time inhouse</span>
                </Card.Header>

                <Card.Body>
                
               
                <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem veritatis hic odit optio porro praesentium neque officia esse quia doloribus.
                </Card.Text>

                </Card.Body>
                </Card>
              
     
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                              
                <Card className=' mb-3'>
                <Card.Header><h3>Web Development</h3>
                    <span>2017-2018 full time inhouse</span>
                </Card.Header>
                <Card.Body>
                
               
                <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem veritatis hic odit optio porro praesentium neque officia esse quia doloribus.
                </Card.Text>

                </Card.Body>
                </Card>
              
     
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                              
                <Card >
                <Card.Header><h3>Graphic Design</h3>
                    <span>2017-2018 full time inhouse</span>
                </Card.Header>
                <Card.Body>
                
               
                <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem veritatis hic odit optio porro praesentium neque officia esse quia doloribus.
                </Card.Text>

                </Card.Body>
                </Card>
              
     
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                              
                <Card ><Card.Header><h3>Mobile Apps</h3>
                    <span>2017-2018 full time inhouse</span>
                </Card.Header>  
                <Card.Body>
                
               
                <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem veritatis hic odit optio porro praesentium neque officia esse quia doloribus.
                </Card.Text>

                </Card.Body>
                </Card>
              
     
                </div>
            </div>
        </div>
    </section>
      
    </ >
  )
}

export default Experince
