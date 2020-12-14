import React from "react"
import styled from "styled-components"

const SInfoItem = styled.li`
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
`
const Title = styled.div`
  font-weight: bold;
  margin-bottom: 0.35rem;
`

const DescriptionLine = styled.div`
  margin-bottom: 0.5rem;
`

interface Props {
  title: string
  description: Array<string>
}

const InfoItem: React.FC<Props> = ({ title, description }) => {
  return (
    <SInfoItem>
      <Title>{title}</Title>
      <div>
        {description.map(item => (
          <DescriptionLine style={{ marginBottom: "0.25rem" }} key={item}>
            {item}
          </DescriptionLine>
        ))}
      </div>
    </SInfoItem>
  )
}

export default InfoItem
