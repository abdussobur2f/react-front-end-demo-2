import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Contact.css'
 import {BiSolidPhoneCall,BiCurrentLocation} from 'react-icons/bi'
 import {HiOutlineMail} from 'react-icons/hi'





const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div>
      <div className="section contact pb-5 pt-3">
     
        <div className="container-xxl">
          <div className="row pb-5 pt-3">
            <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.3932547854474!2d89.378263973885!3d25.0885460360957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcfd3ee3853bc9%3A0xe4c7ec17f9db21f2!2sFasitola%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1692021169343!5m2!1sen!2sbd" width="100%" height="450"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 ">
            <div className="heading">
          <h1 className=' pb-2'>  contact <span className='cng'>us</span>   </h1>
        </div>
              <h1 className='mb-3'>Let's Discuss Your project</h1>
              <div className='contact_icon '>
                <li className='pragraph d-flex align-items-baseline gap-2'> <span> <BiSolidPhoneCall/>  </span> <p>01645726503</p></li>
                <li className='pragraph d-flex align-items-baseline gap-2'> <span><HiOutlineMail /> </span> <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, fugiat?</p></li>
                <li className='pragraph d-flex align-items-baseline gap-2'>   <span><BiCurrentLocation /></span> <p>abdus it instuite gobindagonj ghaibandha</p></li>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">


              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 col-sm-6 mb-3">
                    <Form.Group controlId="validationCustom01">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"

                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div className="col-lg-6  col-sm-6 mb-3">
                    <Form.Group controlId="validationCustom02">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"

                      />
                      <Form.Control.Feedback type="invalid">Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div className="col-lg-6  col-sm-6 mb-3">


                    <Form.Group controlId="validationCustomUsername">
                      <Form.Label>Username</Form.Label>
                      <InputGroup hasValidation>

                        <Form.Control
                          type="text"
                          placeholder="Username"
                          aria-describedby="inputGroupPrepend"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please choose a username.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </div>

                  <div className="col-lg-6  col-sm-6 mb-3">
                    <Form.Group controlId="validationCustom03">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="City" required />
                      
                      
                    </Form.Group>
                  </div>
                  <div class="form-group mb-3">
    <label for="exampleFormControlTextarea1"> write some text</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Send something' rows="3"></textarea>
  </div>

                </div>







 


                <Button type="submit" className='px-4  py-2'>Send Massage</Button>
              </Form>
            </div>



          </div>
        </div>


      </div>
    </div>

  )
}

export default Contact
