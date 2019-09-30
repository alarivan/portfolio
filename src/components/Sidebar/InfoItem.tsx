import React from "react"
import styled from "styled-components"

const SInfoItem = styled.li`
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
`
const Title = styled.div`
  font-weight: bold;
  margin-bottom: 0.15rem;
`

interface Props {
  title: string
  description: string
}

const InfoItem: React.FC<Props> = ({ title, description }) => {
  return (
    <SInfoItem>
      <Title>{title}</Title>
      <div>{description}</div>
    </SInfoItem>
  )
}

export default InfoItem
