import React from "react"
import styled from "styled-components"
import { Field, ErrorMessage } from "formik"

const SInputGroup = styled.div`
  margin: 0.5rem 0;
`

const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.1rem;
  display: block;
`

const SField = styled(Field)`
  padding: 0.5rem;
  width: 100%;
  min-width: 320px;
  box-shadow: inset 0 1px 3px #ddd;
  border: 1px solid #ccc;

  ${({ component }) => (component === "textarea" ? "min-height: 100px;" : "")}
`

const SErrorMessage = styled(ErrorMessage)`
  font-size: 0.8rem;
  margin-top: 0.25rem;
  color: #ff4136;
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
