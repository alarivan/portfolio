import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"

interface Props {
  title: string
  onButtonClick: () => void
}

const SModalHeader = styled.div`
  display: flex;
  align-items: center;
  background: #f9f9f9;
  padding: 1rem;

  background-color: #e7f0fd;
  border-bottom: 1px solid #accbee;
`

const Title = styled.h3`
  margin: 0;
  flex: 1 0 auto;
`

const Close = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`

const ModalHeader: React.FC<Props> = ({ title, onButtonClick }) => {
  return (
    <SModalHeader>
      <Title>{title}</Title>
      <Close onClick={onButtonClick}>
        <FontAwesomeIcon icon={faTimesCircle} size="lg" color="#252525" />
      </Close>
    </SModalHeader>
  )
}

export default ModalHeader
