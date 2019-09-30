import React from "react"
import styled from "styled-components"

interface Props extends React.HTMLProps<HTMLButtonElement> {
  maxWidth?: string
}

const SDefaultButton = styled.button<Props>`
  position: relative;
  cursor: pointer;
  border: 2px solid #252525;
  color: #252525;
  padding: 0.5rem 1rem;
  width: ${({ width }) => (width ? width : "200px")};
  margin: auto;
  letter-spacing: 0.18rem;
  text-transform: uppercase;
  background: transparent;
  font-weight: bold;
  transition: color 100ms ease-in-out;
  overflow: hidden;
  flex: 0 0 auto;

  :hover {
    ::before {
      top: 0;
    }

    div {
      color: #f1f1f1;
    }
  }

  ::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #252525;
    position: absolute;
    transition: top 300ms ease;
    top: -100%;
    left: 0;
    z-index: 0;
  }

  div {
    z-index: 10;
    position: relative;
  }
`

const DefaultButton: React.FC<Props> = ({
  label,
  disabled,
  onClick,
  width,
}) => {
  return (
    <SDefaultButton width={width} disabled={disabled} onClick={onClick}>
      <div>{label}</div>
    </SDefaultButton>
  )
}

export default DefaultButton
