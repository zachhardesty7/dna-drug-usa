import React from "react"
// import styled from "styled-components"

import { Blurbs, Hero, Icon } from "semantic-styled-ui"

const data = {
  header: {
    title: "Schedule Appointment",
    subtitle:
      "Allow us to schedule an appointment at one of our nationwide locations to provide you the peace of mind that you deserve.",
    button: "Schedule a Consultation",
  },
  blurbs1: {
    title: "Why DNA & Drug USA",
    blurbs: [
      {
        header: "Timing",
        icon: "",
        content:
          "we produce results in 24 hours for many of the offered tests. Our wait times are also low due to the volume of testing sites in our network.",
      },
      {
        header: "Competitive Pricing",
        icon: "",
        content:
          "we pride ourselves on offering the most competitive testing prices in the market.",
      },
      {
        header: "Customer Service",
        icon: "",
        content:
          "our open line of communication and number of communication lines offers a quick, smooth, and transparent experience with our testing professionals.",
      },
      {
        header: "Clean Testing Facilities",
        icon: "",
        content:
          "our testing sites pride themselves on cleanliness so that our customers feel comfortable throughout the entire process.",
      },
    ],
  },
  blurbs2: {
    title: "How does it work?",
    blurbs: [
      {
        header: "Parent(s) seeking child support",
        icon: "money",
      },
      {
        header: "Procuring custody or visitation rights of a child or children",
        icon: "eye",
      },
      {
        header: "Verifying sibling relationship(s)",
        icon: "exchange",
      },
      {
        header: "Grandparents verifying identity of grandchildren",
        icon: "check circle",
      },
      {
        header: "Twins verifying identical or fraternal twin makeup",
        icon: "venus double",
      },
      {
        header: "Adoptees seeking identity of family member(s)",
        icon: "id card",
      },
      {
        header: "Identifying presence of DNA on item for infidelity concerns",
        icon: "exclamation triangle",
      },
      {
        header: "Assisting in determining ancestry",
        icon: "sitemap",
      },
    ],
  },
}

const LandingPage = () => (
  <>
    <Hero overlay="darker" baseline="bottom" size="relaxed" textAlign="right">
      <Hero.Title>{data.header.title}</Hero.Title>
      <Hero.Subtitle>{data.header.subtitle}</Hero.Subtitle>
      <Hero.Button>{data.header.button}</Hero.Button>
    </Hero>
    <Blurbs title={data.blurbs1.title}>
      {data.blurbs1.blurbs.map((item) => (
        <Blurbs.Item
          header={item.header}
          icon={item.icon && <Icon name={item.icon} inverted size="bigger" />}
        >
          {item.content}
        </Blurbs.Item>
      ))}
    </Blurbs>
    <Blurbs title={data.blurbs2.title}>
      {data.blurbs2.blurbs.map((item) => (
        <Blurbs.Item
          header={item.header}
          icon={item.icon && <Icon name={item.icon} inverted size="bigger" />}
        />
      ))}
    </Blurbs>
  </>
)

export default LandingPage
