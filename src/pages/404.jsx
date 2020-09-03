import React from "react"
import { Section404 } from "semantic-styled-ui"
import { Helmet } from "react-helmet"
import { SharedFooter } from "../components/SharedFooter"

const Page = () => (
  <>
    <Helmet>
      <title>404 Error - Missing Page</title>
    </Helmet>
    <Section404 />
    <SharedFooter />
  </>
)

export default Page
