import React from "react"
import styled from "styled-components"
import Project from "./Project"
import { useStaticQuery, graphql } from "gatsby"

const StyledMain = styled.main`
  padding: 1rem 1rem 0;
  grid-column-start: 2;
`
const Heading = styled.h1`
  text-align: center;
  letter-spacing: 0.18rem;
  text-transform: uppercase;
  background: transparent;
  padding: 1rem;
  margin: 0 0 1rem;
  box-shadow: 0px 2px 10px 0px rgba(50, 50, 50, 0.75);
`

const Main: React.FC = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: frontmatter___order }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              website
              source
              scores {
                source
                scores {
                  platform
                  score
                }
              }
              images {
                src {
                  id
                  publicURL
                  childImageSharp {
                    fluid(maxWidth: 300) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            html
          }
        }
      }
    }
  `)

  return (
    <StyledMain>
      <Heading>Projects</Heading>
      {data.allMarkdownRemark.edges.map(({ node }: any) => (
        <Project key={node.id} project={node} />
      ))}
    </StyledMain>
  )
}

export default Main
