import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MyMapContainer from '../../Helper/MyMapContainer'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import SocialMediaIcons from '../../Helper/SocialMediaIcons'
function Footer () {
  return (
    <>
      <div className='footer-main '>
        <Container>
          <Row>

          <Col xs={12} md={4} className='footer-card'>
              {/* <div style={{ padding: '20px' }}> */}
              <MyMapContainer />
              {/* </div> */}
            </Col>
            <Col xs={12} md={4} className='footer-card'>
              {/* <div className='footer-card'> */}
              <h1 className='footer-card-header'>Connect with Us</h1>
              <p className='footer-card-text'>
                Would you like to book a session of our workshop for your
                business or community group? Send us a message for that or other
                requests. We will get back to you soon! contact for gem online
                training gem portal training
              </p>
              <hr />
              <h6 className='footer-card-text'>RajwardhanOnline</h6>
              <div className='footer-card-text'>
                <i
                  className='bi bi-envelope footer-card-text'
                  style={{ marginRight: '10px' }}
                ></i>
                <a
                  href='mailto:vinayakdoke934@gmail.com'
                  className='footer-card-text'
                  style={{ textDecoration: 'none' }}
                >
                  vinayakdoke934@gmail.com
                </a>
              </div>
              <address className='footer-card-text'>
                At post Inchagon, Tal.Mohol,Dist.Solapur
              </address>
              <SocialMediaIcons/>
              {/* </div> */}
            </Col>
            <Col xs={12} md={4} className='footer-card'>
              {/* <div > */}
              <h3 className='footer-card-header'>Useful Links</h3>

              <Link to='/about' className='footer-card-text-link' style={{textAlign:"left"}}>
                About US
              </Link>
              <br />
              <Link to='/about' className='footer-card-text-link'style={{textAlign:"left"}}>
                Courses
              </Link>
              <br />
              <Link to='/about' className='footer-card-text-link' style={{textAlign:"left"}}>
                Contact US
              </Link>
            </Col>

            
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer
