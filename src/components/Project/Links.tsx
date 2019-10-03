import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

interface Props {
  website: string
  source?: string
}

const SLinks = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  margin: 0.75rem 0 1rem;

  li {
    display: block;
    flex: 1 1 auto;

    &:not(:last-child) {
      margin-right: 0.5rem;
    }

    @media (min-width: 768px) {
      flex: 0 0 auto;
    }
  }
`

const Link = styled.a`
  display: block;
  color: #111;
  text-decoration: none;
  font-weight: 500;
  padding: 0.25rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 300ms ease;
  border: 1px solid;

  @media (min-width: 768px) {
    padding: 0.5rem 1rem;
  }
`

const Website = styled(Link)`
  background-color: #cbf4cb;
  border-color: #88bd89;

  :hover {
    background-color: #aceead;
  }
`
const Source = styled(Link)`
  background-color: #cdccf4;
  border-color: #9c9bd7;

  :hover {
    background-color: #adacee;
  }
`

const Icon = styled(FontAwesomeIcon)`
  &.svg-inline--fa.fa-w-16 {
    width: 0.6rem;
    margin-right: 0.5rem;

    @media (min-width: 768px) {
      width: auto;
    }
  }
`

const Title = styled.div`
  font-size: 0.6rem;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`

const Links: React.FC<Props> = ({ website, source }) => {
  return (
    <SLinks>
      <li>
        <Website href={website} target="_blank" rel="noopener">
          <Icon icon={faExternalLinkAlt} />
          <Title>view website</Title>
        </Website>
      </li>
      {source && (
        <li>
          <Source href={source} target="_blank" rel="noopener">
            <Icon icon={faGithub} />
            <Title>view source</Title>
          </Source>
        </li>
      )}
    </SLinks>
  )
}

export default Links
