import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MyCard from './MyCard'

function CardSection () {
  return (
    <>
      <Container>
        <Row>
          <Col className='parent-container' xs={12} md={4} data-aos="fade-left">
            <MyCard />
          </Col>
          <Col className='parent-container' xs={12} md={4} data-aos="fade-up">
            <MyCard />
          </Col>
          <Col className='parent-container' xs={12} md={4} data-aos="fade-right">
            <MyCard />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CardSection
