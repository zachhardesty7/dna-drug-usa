import React from "react"
import styled from "styled-components"
import {
  Checkbox,
  Container,
  Form,
  Grid,
  Icon,
  Message,
  Segment,
  Step,
  Transition,
  encode,
  media,
  padding,
} from "semantic-styled-ui"

import {
  services1,
  services2,
  services3,
  services4,
  services5,
  services6,
  services7,
  services8,
  services9,
} from "../services"

const S = {} // styled-components namespace

S.Message = styled(Message)`
  /* use "!important" to override Transition */
  display: flex !important;
  margin-bottom: 1em;
`

// S.Checkboxes = styled(Form.Field)`
S.Checkboxes = styled("div")`
  & > * {
    ${padding("vertical")("0.3em")};
    max-width: 25%;
  }
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 6em;
  max-height: ${({ maxHeight }) => maxHeight}em;
  @media ${media.desktop} {
    max-height: ${({ maxHeight }) => maxHeight * 1.157577572}em;
  }
  @media ${media.laptop} {
    max-height: ${({ maxHeight }) => maxHeight * 1.334224743}em;
  }
  /* @media ${media.tablet} {
    max-height: ${({ maxHeight }) => maxHeight * 1.1}em;
  } */
  /* @media ${media.phone} {
    max-height: ${({ maxHeight }) => maxHeight * 1.1}em;
  } */
`

S.Step = styled(Step)`
  flex-wrap: nowrap;
`

const ConsultationPage = ({ data }) => {
  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [textArea, setTextArea] = React.useState("")
  const [textInputs, setTextInputs] = React.useState({})
  const [selectedServices, setSelectedServices] = React.useState({})
  const [preferredDate, setPreferredDate] = React.useState("")
  const [preferredTime, setPreferredTime] = React.useState("")

  const removeSuccessMessage = (ms = 6000) => {
    setTimeout(() => {
      setSuccess(false)
    }, ms)
  }

  const handleSubmit = (evt) => {
    if (Object.values(textInputs).some((val) => val === "")) {
      setSuccess(false)
      setError(true)
    } else {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          "text-area": textArea,
          ...textInputs,
        }),
      }).catch((error_) => console.error(error_))

      // reset state of fields
      const newFieldsObj = Object.fromEntries(
        Object.keys(textInputs).map((key) => [key, ""])
      )

      setSuccess(true)
      setError(false)
      setTextInputs(newFieldsObj)

      removeSuccessMessage()
    }

    evt.preventDefault()
  }

  const handleChange = (_, { name, value }) => {
    setTextInputs({ ...textInputs, [name]: value })
  }

  const handleChangeArea = (_, { value }) => {
    setTextArea(value)
    console.log("AL: value", value)
  }

  // const services = services1

  const services = [
    "Paternity Test",
    "Maternity Test",
    "Motherless Paternity Testing",
    "Non-Invasive Prenatal Paternity Test",
    "Grandparentage Test – Full",
    "Grandparentage Test – Single",
    "Siblingship Test - Full and Half Siblings",
    "Genetic Reconstruction Test",
    "Y-STR Test",
    "Avuncular Test",
    "Twin Zygosity Test",
    "DNA Banking",
    "DNA Profiling",
    "Infidelity Test",
    "mtDNA Test",
    "Skin DNA Lifestyle",
    "Healthy Weight",
    "Food & Pet Sensitivity",
    "GPS Origins",
    "Semen Detection",
    "Next Day Results",
  ]

  const steps = [
    "Please fill out your personal contact information or reach out to us directly",
    "Once your information is received, we'll reach to you to set your appointment at a time and location that is best for you.",
    "Samples are collected by one of our medical professionals and sent to the laboratory.",
    "Your results will be sent to you via email within a few days, with a hard-copy via mail if requested.",
  ]

  const chars = services.join("").length
  // y = m1*x1*x1 + m2*x2 + b
  // @see https://docs.google.com/spreadsheets/d/1P6H7pW5YQwHS4hSEVchzi30q04j8QrVYuWkJ9YV6NZw/edit?usp=sharing
  const maxHeight =
    chars * 0.0132528382632489 +
    services.length * 0.1451091322 +
    2.86778981742734

  // console.log("chars", chars)
  // console.log("services.length", services.length)
  // console.log("maxHeight", maxHeight)

  return (
    <Segment vertical basic>
      <Container>
        <Grid>
          <Grid.Column width={12}>
            <Form
              // name={name}
              onSubmit={handleSubmit}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              // success={success}
              // error={error}
            >
              {/* limit bot responses with Netlify */}
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="consultation" />

              <Form.Input
                name="name"
                error={error}
                fluid
                placeholder="Full Name"
                label="Full Name"
                onChange={handleChange}
                value={textInputs.name}
              />
              <Form.Group widths="equal">
                <Form.Input
                  name="email"
                  type="email"
                  error={error}
                  fluid
                  placeholder="Email"
                  label="Email"
                  onChange={handleChange}
                  value={textInputs.email}
                />
                <Form.Input
                  name="phone"
                  type="tel"
                  error={error}
                  fluid
                  placeholder="Phone Number"
                  label="Phone Number"
                  onChange={handleChange}
                  value={textInputs.phone}
                />
              </Form.Group>
              <Form.Input
                name="street"
                error={error}
                fluid
                placeholder="Street"
                label="Street"
                onChange={handleChange}
                value={textInputs.street}
              />
              <Form.Group>
                <Form.Input
                  name="city"
                  error={error}
                  fluid
                  width={8}
                  placeholder="City"
                  label="City"
                  onChange={handleChange}
                  value={textInputs.city}
                />

                <Form.Input
                  name="state"
                  error={error}
                  fluid
                  width={4}
                  placeholder="State"
                  label="State"
                  onChange={handleChange}
                  value={textInputs.state}
                />
                <Form.Input
                  name="zip"
                  error={error}
                  fluid
                  width={4}
                  placeholder="Zip Code"
                  label="Zip Code"
                  onChange={handleChange}
                  value={textInputs.zip}
                />
              </Form.Group>
              {/* MARK: services */}
              <Form.Field>
                <label>Services you're interested in:</label>
                <S.Checkboxes
                  maxHeight={maxHeight}
                  items={services.length}
                  length={services.join("").length}
                >
                  {services.map((service) => (
                    <Checkbox
                      label={service}
                      key={service}
                      // id={service}
                      value={selectedServices[service]}
                      onChange={(_, { label, checked }) =>
                        setSelectedServices({
                          ...selectedServices,
                          [label]: checked,
                        })
                      }
                    />
                  ))}
                </S.Checkboxes>
              </Form.Field>
              <Form.Group widths="equal">
                <Form.Input
                  name="date"
                  type="date"
                  error={error}
                  fluid
                  label="Preferred Date"
                  onChange={(_, { value }) => setPreferredDate(value)}
                  value={preferredDate}
                />
                <Form.Input
                  name="time"
                  type="time"
                  error={error}
                  fluid
                  label="Preferred Time"
                  onChange={(_, { value }) => setPreferredTime(value)}
                  value={preferredTime}
                />
              </Form.Group>
              <Form.TextArea
                name="comments"
                error={error && textArea === ""}
                placeholder="Have anything else to let us know?"
                label="Comments"
                style={{ minHeight: 125 }}
                onChange={handleChangeArea}
                value={textArea}
              />

              <Transition.Group animation="fade down" duration={500}>
                {success && (
                  <S.Message icon success>
                    <Icon name="check" aria-label="success" />
                    <Message.Content>
                      <Message.Header>Form Submitted</Message.Header>
                      You'll hear back from us shortly!
                    </Message.Content>
                  </S.Message>
                )}
                {error && (
                  <S.Message icon error>
                    <Icon name="exclamation" aria-label="failure" />
                    <Message.Content>
                      <Message.Header>Error</Message.Header>
                      Please fill out all fields!
                    </Message.Content>
                  </S.Message>
                )}
              </Transition.Group>

              <Form.Button type="submit">Submit</Form.Button>
            </Form>
          </Grid.Column>
          <Grid.Column width={4}>
            <Step.Group vertical ordered>
              {steps.map((step) => (
                <S.Step>
                  <Step.Content>
                    {/* <Step.Title>Shipping</Step.Title> */}
                    <Step.Description>{step}</Step.Description>
                  </Step.Content>
                </S.Step>
              ))}
            </Step.Group>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  )
}

export default ConsultationPage
