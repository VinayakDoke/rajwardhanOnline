import React from 'react'
import Header from '../Helper/Header'
import UpComingCourse from './Components/UpComingCourse'
import VideoSection from './Components/VideoSection'
import CardSection from './CardSection/CardSection'
import Footer from './Footer/Footer'

function Home () {
  return (
    <>
      <Header />
      <br />
      <UpComingCourse />
      <VideoSection />
      <CardSection />
      <Footer/>
    </>
  )
}

export default Home
