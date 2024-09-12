import React, { useEffect } from 'react'
import Header from '../Helper/Header'
import UpComingCourse from './Components/UpComingCourse'
import VideoSection from './Components/VideoSection'
import CardSection from './CardSection/CardSection'
import Footer from './Footer/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css';


const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Header />
      <br />
      <div data-aos="fade-up">
        <UpComingCourse />
      </div>
      <br />
      <div data-aos="fade-right">
        <VideoSection />
      </div>
      <br />
      <div>
        <CardSection />
      </div>
      <br />
      <Footer />
    </>
  );
};

export default Home;