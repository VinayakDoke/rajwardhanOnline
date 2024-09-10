import React from 'react'
import Header from '../Helper/Header'
import UpComingCourse from './Components/UpComingCourse'
import VideoSection from './Components/VideoSection'
import CardSection from './CardSection/CardSection'

function Home () {
  return (
    <>
      <Header />
      <br/>
      <UpComingCourse/>
     <VideoSection/>
     <CardSection/>
    </>
  )
}

export default Home
