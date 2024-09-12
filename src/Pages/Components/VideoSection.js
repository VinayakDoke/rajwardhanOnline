import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReactPlayer from 'react-player'
function VideoSection () {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6} className='parent-container'>
            <div className='custom-player'>
              <ReactPlayer
                url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                controls={true}
                className='custom-player'
              />
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            className='d-flex justify-content-center align-items-center'
            style={{ minHeight: '100px' }}
          >
            <div>
              <b>Gem Demo</b>
              <br />
              <p>Gem Demo</p>
            </div>
          </Col>
        </Row>
        <Row>
          {/* Gem Demo - Hidden on xs, visible on md and larger */}
          <Col
            xs={12}
            md={6}
            className='d-none d-md-flex justify-content-center align-items-center'
          >
            Gem Demo
          </Col>

          {/* ReactPlayer */}
          <Col xs={12} md={6} className='parent-container'>
            <div className='custom-player'>
              <ReactPlayer
                url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                controls={true}
                className='custom-player'
              />
            </div>
          </Col>

          {/* Gem Demo - Visible only on small screens */}
          <Col
            xs={12}
            md={6}
            className='d-flex d-md-none justify-content-center align-items-center'
            style={{ minHeight: '100px' }}
          >
            Gem Demo
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default VideoSection
