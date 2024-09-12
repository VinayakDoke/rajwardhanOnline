import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MyMapContainer from '../../Helper/MyMapContainer'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <>
      <div className='footer-main '>
        <Container>
          <Row>

          <Col xs={12} md={4} className='footer-card'>
              {/* <div > */}
                <h1>Connect with Us</h1>
                <a href='mailto:vinayakdoke934@gmail.com'>vinayakdoke934</a>
                <address>At post Inchagon, Tal.Mohol,Dist.Solapur</address>
              {/* </div> */}
            </Col>
           
            <Col xs={12} md={4}  className='footer-card'>
              {/* <div className='footer-card'> */}
                <h1>Connect with Us</h1>
                <p style={{textAlign:"left"}}>
                  Would you like to book a session of our workshop for your
                  business or community group? Send us a message for that or
                  other requests. We will get back to you soon! contact for gem
                  online training gem portal training
                </p>
                <hr/>
                <h6>RajwardhanOnline</h6>
                <a href='mailto:vinayakdoke934@gmail.com'>vinayakdoke934</a>
                <address>At post Inchagon, Tal.Mohol,Dist.Solapur</address>
              {/* </div> */}
            </Col>
           

            <Col xs={12} md={4}>
              {/* <div style={{ padding: '20px' }}> */}
                <MyMapContainer />
              {/* </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer
