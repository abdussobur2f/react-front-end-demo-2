import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
 
 
 

function NavigaTion() {

  const [fixed ,setFixed] = useState(false)

  const handleNav = () =>{
    if(window.scrollY > 100){
      setFixed(true)
    }else{
      setFixed(false)
    }
  }

  window.addEventListener("scroll" , handleNav)
 
  return (
    <Navbar className={fixed ? "nav active" : ' nav text-light'} expand="lg">
      <Container>
        <Navbar.Brand  href="#home"><h3 className='text-light text-capitalize mb-0 lh-0 text-decoration-underline'>AB/<span className='text-info '>sobur</span></h3></Navbar.Brand>
        
        <Navbar.Toggle>  <span className='text-light'><FontAwesomeIcon icon={faBars} /></span></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='text-light'> 
           Home 
           </Nav.Link>

            <Nav.Link className="text-light">
               about  
          </Nav.Link> 

            
            <Nav.Link className="text-light">experince</Nav.Link>
            <Nav.Link className="text-light">protoflio</Nav.Link>
            <Nav.Link className="text-light">blog</Nav.Link>
            <Nav.Link className="text-light">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigaTion;