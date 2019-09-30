import React from "react"
import styled from "styled-components"
import InfoItem from "./InfoItem"

const SInfo = styled.div`
  flex-grow: 1;
  max-width: 360px;
  margin: 0 auto 1rem;
`

const Inner = styled.div`
  padding: 1rem;
  /* box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04); */
  /* background: #f9f9f9; */
`

const Items = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: left;
`

const items = [
  {
    title: "Front-end",
    description:
      "HTML5, CSS3, Javascript, ES6, React, Gatsby, Vue, Blockstack, GraphQL",
  },
  {
    title: "Back-end",
    description: "PHP, Magento 2, Elixir, Phoenix Framework, MySQL, PostgreSQL",
  },
  {
    title: "Cloud",
    description: "AWS, Netlify, Heroku",
  },
]

const Info: React.FC = () => {
  return (
    <SInfo>
      <Inner>
        <h3>What I do</h3>
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
