import React from "react"
import styled from "styled-components"

interface Props {
  website: string
  source?: string
}

const SLinks = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  margin: 0 0 1rem;
`

const Link = styled.a`
  color: #444;
  text-decoration: none;
  font-size: 0.8rem;
  margin-right: 1rem;

  :hover {
    text-decoration: underline;
  }
`

const Links: React.FC<Props> = ({ website, source }) => {
  return (
    <SLinks>
      <li>
        <Link href={website} target="_blank" rel="noopener">
          website
        </Link>
      </li>
      {source && (
        <li>
          <Link href={source} target="_blank" rel="noopener">
            source
          </Link>
        </li>
      )}
    </SLinks>
  )
}

export default Links
