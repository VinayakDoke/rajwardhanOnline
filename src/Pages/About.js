import React from 'react'
import Header from '../Helper/Header'
import WhatsAppLink from '../Helper/WhatsAppLink'
import Map from '../Helper/Map'
import MapBox from '../Helper/MapBox'
import MyMapContainer from '../Helper/MyMapContainer'

function About() {

  return (
    <>
      <Header/>
      <div>About</div>
      <WhatsAppLink/>
      <MyMapContainer/>
      {/* <Map/> */}
      {/* <MapBox/> */}
    </>
  )
}

export default About