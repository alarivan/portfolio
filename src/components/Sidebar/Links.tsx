import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import LinksItem from "./LinksItem"

const SLinks = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
`

interface Props {}

const Links: React.FC<Props> = () => {
  return (
    <SLinks>
      <LinksItem url="https://github.com/alarivan/">
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </LinksItem>
      <LinksItem url="https://www.linkedin.com/in/stas-kokshin-5a7b53112/">
        <FontAwesomeIcon icon={faLinkedin} size="3x" color="#0077b5" />
      </LinksItem>
    </SLinks>
  )
}

export default Links
