import React from "react"
import { Formik, Form, FormikActions, FormikProps } from "formik"
import {
  initialValues,
  validationSchema,
  ContactFormValues,
} from "../../utils/contact"
import styled from "styled-components"
import InputGroup from "./InputGroup"
import DefaultButton from "../Button"

const SForm = styled(Form)`
  display: flex;
  flex-direction: column;
`

interface Props {
  onSubmit: (
    values: ContactFormValues,
    actions: FormikActions<ContactFormValues>
  ) => void
}

const ContactForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      render={(formikBag: FormikProps<ContactFormValues>) => (
        <SForm
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <InputGroup label="Email" field={{ name: "email", type: "email" }} />
          <InputGroup label="Name" field={{ name: "name", type: "text" }} />
          <InputGroup
            label="Message"
            field={{ name: "message", component: "textarea" }}
          />

          <DefaultButton
            width="100%"
            label="Submit"
            type="submit"
            disabled={formikBag.isSubmitting}
          />
        </SForm>
      )}
    />
  )
}

export default ContactForm
