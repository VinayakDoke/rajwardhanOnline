import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
function ContactForm () {
  return (
    <>
      <div className='custom-form-main'>
        
        <Container className='custom-form'>
             <div className='custom-form-header'>Contact Us</div>
             <hr/>
          <Row>
         
            <Col>
           
              <Form>

              <Form.Group className='mb-3' controlId='formBasicEmail'>
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control type='text' placeholder='Enter name' />
                  {/* <Form.Text className='text-muted'>
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control type='email' placeholder='Enter email' />
                  {/* <Form.Text className='text-muted'>
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control type='email' placeholder='Enter Mobile No.' />
                  {/* <Form.Text className='text-muted'>
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control type='text' placeholder='How can we help?' />
                </Form.Group>
              
                <Button variant='success' type='submit'>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ContactForm
