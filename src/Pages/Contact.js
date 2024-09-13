import React, { useEffect } from 'react'
import Header from '../Helper/Header'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from './Components/ContactForm'
import Footer from './Footer/Footer'
import ContactInfo from './Components/ContactInfo'

function Contact () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header />
      <div className='contact-page parent-container'>
        <div className='contact-page-image-text'>
          Contact Us
        </div>
      </div>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            {' '}
            <ContactForm />
          </Col>
          <Col xs={12} md={6}>
            <ContactInfo />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}

export default Contact

// function BasicExample() {
//   return (
//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default BasicExample;
