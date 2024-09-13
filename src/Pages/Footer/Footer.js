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
        {/* <Container>
          <Row>
            <Col xs={12} md={4} className='footer-card'>
              <MyMapContainer />
            </Col>
            <Col xs={12} md={4} className='footer-card'>
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
              <SocialMediaIcons />
            </Col>
            <Col xs={12} md={4} className='footer-card'>
              <h3 className='footer-card-header'>Useful Links</h3>
              <Link
                to='/'
                className='footer-card-text-link'
                style={{ textAlign: 'left' }}
              >
                Home
              </Link>
              <br />
              <Link
                to='/about'
                className='footer-card-text-link'
                style={{ textAlign: 'left' }}
              >
                About US
              </Link>
              <br />
              <Link
                to='/about'
                className='footer-card-text-link'
                style={{ textAlign: 'left' }}
              >
                Courses
              </Link>
              <br />
              <Link
                to='/contact'
                className='footer-card-text-link'
                style={{ textAlign: 'left' }}
              >
                Contact US
              </Link>
            </Col>
          </Row>
          <hr style={{ color: 'white' }} />
          <Row>
            <Col
              className='footer-card-text'
              style={{ paddingBottom: '20px', textAlign: 'center' }}
            >
              Copyright © 2023 Rajwardhan PORTAL TRAINING - All Rights Reserved.
            </Col>
          </Row>
        </Container> */}
        <Container>
          <Row>
            <Col xs={12} md={3} className='footer-card'>
              <h1 className='footer-card-header'>About Us</h1>
              <p className='footer-card-text'>
                Would you like to book a session of our workshop for your
                business or community group? Send us a message for that or other
                requests. We will get back to you soon! contact for gem online
                training gem portal training
              </p>
              <SocialMediaIcons />
            </Col>
            <Col xs={12} md={4} className='footer-card'>
              <h1 className='footer-card-header'>Connect with Us</h1>

              <div className='footer-card-text'>
                <div style={{ marginBottom: '10px' }}>
                  <a href='tel:+918788584847' className='footer-card-text'>
                    <i className='bi bi-telephone footer-card-text'></i>+91
                    8788584847
                  </a>
                </div>

                <div style={{ marginBottom: '10px' }}>
                  <a
                    href='mailto:vinayakdoke934@gmail.com'
                    className='footer-card-text'
                  >
                    <i className='bi bi-envelope footer-card-text'></i>
                    vinayakdoke934@gmail.com
                  </a>
                </div>

                <div>
                  <Link
                    to='#'
                    className='footer-card-text'
                    style={{ marginBottom: '30px' }}
                    disabled
                  >
                    <i className='bi bi-calendar3 footer-card-text'></i>
                    Mon.-Sat : 11-00 AM to 6-30 PM
                  </Link>
                </div>

                <address className='footer-card-text'>
                  {' '}
                  <i className='bi bi-geo-alt footer-card-text'></i> At post
                  Inchgaon, Tal.Mohol,Dist. Solapur
                </address>
              </div>
            </Col>
            <Col xs={12} md={2} className='footer-card'>
              <h3 className='footer-card-header'>Our Serivces</h3>
              <div className='footer-card-text'>
                <Link to='/' className='footer-card-text'>
                  Home
                </Link>
              </div>

              <div className='footer-card-text'>
                <Link to='/about' className='footer-card-text'>
                  About US
                </Link>
              </div>

              <div className='footer-card-text'>
                <Link to='/about' className='footer-card-text'>
                  Courses
                </Link>
              </div>
              <div className='footer-card-text'>
                <Link
                  to='/contact'
                  className='footer-card-text'
                 
                >
                  Contact US
                </Link>
              </div>
            </Col>

            <Col xs={12} md={3} className='footer-card'>
              <h3 className='footer-card-header'>Quick Links</h3>
              <div className='footer-card-text'>
                <Link to='/' className='footer-card-text'>
                  GEM
                </Link>
              </div>
              <div className='footer-card-text'>
                <Link to='/' className='footer-card-text'>
                  TENDER
                </Link>
              </div>
             
             
              <div className='footer-card-text'>
                <Link to='/' className='footer-card-text'>
                  Terms of Service
                </Link>
              </div>

              <div className='footer-card-text'>
                <Link to='/about' className='footer-card-text'>
                  Refund Policy
                </Link>
              </div>

            
            </Col>
          </Row>
          <hr style={{ color: 'white' }} />
          <Row>
            <Col
              className='footer-card-text'
              style={{ paddingBottom: '20px', textAlign: 'center' }}
            >
              Copyright © 2023 Rajwardhan PORTAL TRAINING - All Rights Reserved.
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer
