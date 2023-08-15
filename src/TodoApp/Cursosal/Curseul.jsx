import React from 'react'
 

 

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 import { Col, Row } from 'react-bootstrap';
 
 

 
import 'bootstrap/dist/css/bootstrap.min.css';

const Curseul = () => {
  return (
      <div className="container-fluid bg-dark">
         <Row>
          <Col m={2} lg={3} md={6} sm={12} >
            <Card>
          <Card.Img    src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
      
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                      </Col>

                            
                <Col lg={3} md={6} sm={12} mb={3} >
                  <Card>
                <Card.Img    src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
            
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Card>
          <Card.Img    src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
      
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
          <Col lg={3} md={6} sm={12}>
            <Card>
          <Card.Img    src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
      
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
            
        </Row>
        </div>
  )
 
  }
 

export default Curseul;
