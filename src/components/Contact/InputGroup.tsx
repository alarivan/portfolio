import React from "react"
import styled, { css } from "styled-components"
import { Field, ErrorMessage } from "formik"

const SInputGroup = styled.div`
  margin: 0.5rem 0;
`

const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.1rem;
  display: block;
`
const textareaStyles = css`
  display: block;
  min-height: 100px;
`
const SField = styled(Field)`
  padding: 0.5rem;
  width: 100%;
  min-width: 320px;
  border: 1px solid #accbee;

  ${({ component }) => (component === "textarea" ? textareaStyles : "")}
`

const SErrorMessage = styled(ErrorMessage)`
  font-size: 0.8rem;
  margin-top: 0.15rem;
  background: #d53930;
  padding: 0.15rem 0.25rem;
  color: #f9f9f9;
`

interface Props {
  label: string
  field: {
    name: string
    type?: string
    component?: string
  }
}

const InputGroup: React.FC<Props> = ({ label, field }) => {
  return (
    <SInputGroup>
      <Label htmlFor={field.name}>{label}</Label>
      <SField {...field} placeholder={label} />
      <SErrorMessage name={field.name} component="div" />
    </SInputGroup>
  )
}

export default InputGroup
