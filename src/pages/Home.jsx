import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import ApprochSection from '../components/ApprochSection'
import WorkSection from '../components/WorkSection'
import ValueSection from '../components/ValueSection'
import ServiceSection from '../components/ServiceSection'
import PeopleInMotion from '../components/PeopleInMotion'
import StatsSection from '../components/StatsSection'
import CultureSection from '../components/CultureSection'
import ContactSection from '../components/ContactSection'
import SocialServices from '../components/SocialServices'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutSection></AboutSection>
      <ApprochSection></ApprochSection>
      <WorkSection></WorkSection>
      <ValueSection></ValueSection>
      <ServiceSection></ServiceSection>
      <PeopleInMotion></PeopleInMotion>
      <StatsSection></StatsSection>
      <CultureSection></CultureSection>
      <ContactSection></ContactSection>
      <SocialServices></SocialServices>
      <Footer></Footer>
    </div>
  )
}

export default Home
