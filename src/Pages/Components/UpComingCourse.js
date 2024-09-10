import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function UpComingCourse() {
  return (
    <>
      <Container>
        <Row>
          <Col>UPCOMING GEM PORTAL TRAINING SCHEDULE (ONLINE AND OFFLINE)</Col>
        </Row>
        <br />
        <Row>
          <Col></Col>
          {/* <Col xs={12} md={8}>
            <ul>
              <li className='lifontSize'>GEM PORTAL TRAINING AT DELHI (22 AUG TO 24 AUG 2024)</li>
              <li className='lifontSize'>GEM PORTAL TRAINING AT DELHI (22 AUG TO 24 AUG 2024)</li>
              <li  className='lifontSize'>ETENDER (EPROCUREMENT TRAINING)</li>
              <li  className='lifontSize'>(30 JULY TO 02 AUG 2024) INDIAN ARMY (JAMMU) - AUG 2024</li>
              <li  className='lifontSize'>GEM L1 TRAINING (AS PER REQUIREMENT)</li>
            </ul>
          </Col> */}
          <Col xs={12} md={6} >
            <ul style={{ listStyle: 'none' }} >
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '5px'
                }}
                className='lifontSize'
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '5px',
                    height: '5px',
                    backgroundColor: 'black',
                    borderRadius: '50%',
                    marginRight: '10px'
                  }}
                ></span>
                GEM PORTAL TRAINING AT DELHI (22 AUG TO 24 AUG 2024)
              </li>
              <li
              className='lifontSize'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '5px'
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '5px',
                    height: '5px',
                    backgroundColor: 'black',
                    borderRadius: '50%',
                    marginRight: '10px'
                  }}
                ></span>
                GEM PORTAL TRAINING AT DELHI (22 AUG TO 24 AUG 2024)
              </li>
              <li
              className='lifontSize'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '5px'
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '5px',
                    height: '5px',
                    backgroundColor: 'black',
                    borderRadius: '50%',
                    marginRight: '10px'
                  }}
                ></span>
                ETENDER (EPROCUREMENT TRAINING)  (30 JULY TO 02 AUG 2024)
              </li>

              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '5px'
                }}
                className='lifontSize'
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '5px',
                    height: '5px',
                    backgroundColor: 'black',
                    borderRadius: '50%',
                    marginRight: '10px'
                  }}
                ></span>
               INDIAN ARMY (JAMMU) - AUG 2024
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '5px'
                }}
                className='lifontSize'
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '5px',
                    height: '5px',
                    backgroundColor: 'black',
                    borderRadius: '50%',
                    marginRight: '10px'
                  }}
                ></span>
                GEM L1 TRAINING (AS PER REQUIREMENT)
              </li>
            </ul>
          </Col>

          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default UpComingCourse