import React from "react"
// import styled from "styled-components"

import { Blurbs, Hero, Icon } from "semantic-styled-ui"

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
    <Blurbs title="Why DNA & Drug USA">
      <Blurbs.Item
        // icon={<Icon name={blurb.icon} inverted size="bigger" />}
        header="Timing"
      >
        we produce results in 24 hours for many of the offered tests. Our wait
        times are also low due to the volume of testing sites in our network.
      </Blurbs.Item>
      <Blurbs.Item
        // icon={<Icon name={blurb.icon} inverted size="bigger" />}
        header="Competitive Pricing"
      >
        we pride ourselves on offering the most competitive testing prices in
        the market.
      </Blurbs.Item>
      <Blurbs.Item
        // icon={<Icon name={blurb.icon} inverted size="bigger" />}
        header="Customer Service"
      >
        our open line of communication and number of communication lines offers
        a quick, smooth, and transparent experience with our testing
        professionals.
      </Blurbs.Item>
      <Blurbs.Item
        // icon={<Icon name={blurb.icon} inverted size="bigger" />}
        header="Clean Testing Facilities"
      >
        our testing sites pride themselves on cleanliness so that our customers
        feel comfortable throughout the entire process.
      </Blurbs.Item>
    </Blurbs>
    <Blurbs title="The Purposes of a DNA Test">
      <Blurbs.Item
        header="Parent(s) seeking child support"
        icon={<Icon name="money" inverted size="bigger" />}
      />
      <Blurbs.Item
        header="Procuring custody or visitation rights of a child or children"
        icon={<Icon name="eye" inverted size="bigger" />}
      />
      <Blurbs.Item
        header="Verifying sibling relationship(s)"
        icon={<Icon name="exchange" inverted size="bigger" />}
      />
      <Blurbs.Item
        header="Grandparents verifying identity of grandchildren"
        icon={<Icon name="check circle" inverted size="bigger" />}
      />
      <Blurbs.Item
        header="Twins verifying identical or fraternal twin makeup"
        icon={<Icon name="venus double" inverted size="bigger" />}
      />
      <Blurbs.Item
        header="Adoptees seeking identity of family member(s)"
        icon={<Icon name="id card" inverted size="bigger" />}
      />
      <Blurbs.Item
        header="Identifying presence of DNA on item for infidelity concerns"
        icon={<Icon name="exclamation triangle" inverted size="bigger" />}
      />
      <Blurbs.Item
        header="Assisting in determining ancestry"
        icon={<Icon name="sitemap" inverted size="bigger" />}
      />
    </Blurbs>
  </>
)

export default LandingPage
