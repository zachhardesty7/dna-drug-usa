import { graphql } from "gatsby"
import { Masonry } from "masonic"
import React from "react"
import {
  Form,
  Grid,
  Icon,
  Message,
  PageSegment,
  Step,
  Title,
  Transition,
  encode,
  media,
} from "semantic-styled-ui"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import { SharedFooter } from "../components/SharedFooter"

const S = {} // styled-components namespace

S.Message = styled(Message)`
  /* use "!important" to override Transition */
  display: flex !important;
  margin-bottom: 1em;
`

S.Step = styled(Step)`
  flex-wrap: nowrap;
  &&&:after {
    ${({ $notch }) => {
      if ($notch === "left")
        return `
          left: 0;
          transform: translateY(-50%) translateX(-50%) rotate(135deg);
        `

      if (!$notch) return "display: none;"

      return null
    }};
  }

  @media ${media.mobile} {
    &&&:after {
      display: none;
    }
    &.active {
      background: #ffffff;
    }
  }
`

S.FormGroup = styled(Form.Group)`
  @media ${media.mobile} {
    .field {
      margin: 0 0 1em;
    }
  }
`

const SchedulePage = ({ data: { page } }) => {
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
  }

  return (
    <>
      <PageSegment>
        <Helmet>
          <title>{page.title}</title>
        </Helmet>
        <>
          <Title>{page.title}</Title>
          <Grid doubling stackable reversed="mobile">
            <Grid.Column width={10}>
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
                <input type="hidden" name="form-name" value="schedule" />

                <Form.Input
                  name="name"
                  error={error}
                  fluid
                  placeholder="Full Name"
                  label="Full Name"
                  onChange={handleChange}
                  value={textInputs.name}
                />
                <S.FormGroup widths="equal">
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
                </S.FormGroup>
                <Form.Input
                  name="street"
                  error={error}
                  fluid
                  placeholder="Address"
                  label="Address"
                  onChange={handleChange}
                  value={textInputs.street}
                />
                <S.FormGroup>
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
                </S.FormGroup>
                {/* MARK: services */}
                <Form.Field>
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label htmlFor="services">
                    Interested Services / Tests (check all that apply)
                  </label>
                </Form.Field>
                <Masonry
                  id="services"
                  columnWidth={175} // TESTING: vs columnCount={4}
                  columnGutter={12}
                  tabIndex={null} // hide focus border
                  items={page.services.map((service) => ({ service }))}
                  render={({ data: { service } }) => (
                    <Form.Checkbox
                      css={`
                        .ui.checkbox {
                          line-height: 1.25em;

                          label::before,
                          label::after {
                            line-height: 1em;
                            top: 50%;
                            transform: translateY(-50%);
                          }
                        }
                      `}
                      label={service}
                      key={service}
                      id={service}
                      checked={selectedServices[service]}
                      onChange={(_, { checked }) =>
                        setSelectedServices({
                          ...selectedServices,
                          [service]: checked,
                        })
                      }
                    />
                  )}
                />

                <S.FormGroup widths="equal">
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
                </S.FormGroup>
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
            {/* #region - steps */}
            <Grid.Column width={6}>
              <Step.Group vertical ordered>
                {page.steps.map((step, i) => (
                  <S.Step
                    active={i === 0}
                    key={step.content.content}
                    $notch="left"
                  >
                    <Step.Content>
                      <Step.Description>
                        {step.content.content}
                      </Step.Description>
                    </Step.Content>
                  </S.Step>
                ))}
              </Step.Group>
            </Grid.Column>
          </Grid>
        </>
      </PageSegment>
      <SharedFooter />
    </>
  )
}

export const query = graphql`
  query {
    page: contentfulSchedulePage(
      contentful_id: { eq: "wYWMrGhUhna1nWrBN1IcE" }
    ) {
      title
      services
      steps {
        content {
          content
        }
      }
    }
  }
`

export default SchedulePage
