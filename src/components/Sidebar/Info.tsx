import React from "react"
import styled from "styled-components"
import InfoItem from "./InfoItem"

const SInfo = styled.div`
  flex-grow: 1;
  max-width: 360px;
  margin: 0 auto 1rem;
`

const Inner = styled.div`
  padding: 0 1rem;
`

const Items = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: left;
`

const items = [
  {
    title: "Languages",
    description: [
      "JavaScript, TypeScript",
      "HTML5, CSS3, SCSS",
      "PHP",
      "Elixir",
    ],
  },
  {
    title: "Frameworks & Tools",
    description: [
      "React, Redux",
      "Node.js, Express, Koa",
      "Gatsby, Next.js",
      "Vue, Vuex",
      "Phoenix Framework",
      "Laravel, Lumen",
      "Docker, Kubernetes",
      "MySQL, PostgreSQL",
      "Magento 2, Shopify",
      "AWS, Netlify",
      "Cypress, Jest, Storybook",
      "Webpack, NPM, Git",
      "REST, GraphQL",
    ],
  },
]

const Info: React.FC = () => {
  return (
    <SInfo>
      <Inner>
        <h3>What I'm good at</h3>
        <Items>
          {items.map((item, index) => (
            <InfoItem key={index} {...item} />
          ))}
        </Items>
      </Inner>
    </SInfo>
  )
}

export default Info
