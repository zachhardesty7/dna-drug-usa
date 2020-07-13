import React from "react"
// import styled from "styled-components"

import { Hero } from "semantic-styled-ui"

const LandingPage = () => (
  <>
    <Hero overlay="darker" baseline="bottom" size="relaxed" textAlign="right">
      <Hero.Title>Schedule Appointment</Hero.Title>
      <Hero.Subtitle>
        Allow us to schedule an appointment at one of our nationwide locations
        to provide you the peace of mind that you deserve.
      </Hero.Subtitle>
      <Hero.Button>Schedule a Consultation</Hero.Button>
    </Hero>
  </>
)

export default LandingPage
