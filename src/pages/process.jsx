import React from "react"
import { Blurbs, Container, Header, Icon, Segment } from "semantic-styled-ui"

const data = {
  title: "How does it work?",
  blurbs: [
    {
      header: "Pick Test(s)",
      icon: "options",
      // icon: "list",
      content:
        "DNA & Drug USA offers a number of various tests that suit your needs - whether for legal purposes or peace of mind.  We'll schedule an appointment at a lab near you once you have an idea as to which test(s) you'd like completed.",
    },
    {
      header: "Schedule Appointment",
      icon: "calendar plus outline",
      content:
        "once you reach out via our online appointment scheduling form or phone - one of our medical professionals will reach out to coordinate the location and time for you to complete your test.",
    },
    {
      header: "Collection",
      icon: "dna",
      content:
        "one of our friendly medical professionals will complete the test at a location convenient to you and submit the materials to our laboratory to complete the test and get you the results back in a timely manner.",
    },
    {
      header: "Communication",
      icon: "mail",
      content:
        "we'll email you the results as soon as the results are delivered to us.  We're happy to send via U.S. mail if needed.",
    },
    {
      header: "Peace of Mind",
      icon: "peace",
      content:
        "we hope that once these steps are complete that you'll enjoy the peace of mind that your results provide.  We're here for you and are grateful for the trust that you've instilled in us to complete your testing needs.",
    },
  ],
}

const ProcessPage = () => {
  return (
    <>
      <Blurbs title={data.title}>
        {data.blurbs.map((item) => (
          <Blurbs.Item
            header={item.header}
            icon={item.icon && <Icon name={item.icon} inverted size="bigger" />}
          >
            {item.content}
          </Blurbs.Item>
        ))}
      </Blurbs>
    </>
  )
}

export default ProcessPage
