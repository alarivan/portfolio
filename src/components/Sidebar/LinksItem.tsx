import React from "react"
import styled from "styled-components"

const SLinksItem = styled.li`
  :not(:last-child) {
    margin-right: 1.5rem;
  }

  a {
    color: #252525;
    text-decoration: none;
  }
`

interface Props {
  url: string
  title: string
}

const LinksItem: React.FC<Props> = ({ url, title, children }) => {
  return (
    <SLinksItem>
      <a href={url} title={title} target="_blank" rel="noopener">
        {children}
      </a>
    </SLinksItem>
  )
}

export default LinksItem
