import React from "react"
import Gallery from "./Project/Gallery"
import Links from "./Project/Links"
import styled from "styled-components"
import ScoreList, { ScoreListProps } from "./Project/ScoreList"

const SProject = styled.div`
  padding: 1rem;
  box-shadow: 0px 2px 10px 0px rgba(50, 50, 50, 0.75);
  background: #f9f9f9;
  margin-bottom: 1rem;
`

const Title = styled.h3`
  margin: 0.25rem 0;
`

interface Props {
  project: {
    id: string
    frontmatter: {
      title: string
      website: string
      source?: string
      scores: ScoreListProps[]
      images: [
        {
          src: {
            id: string
            publicURL: string
            childImageSharp: { fluid: any }
          }
        }
      ]
    }
    html: string
  }
}

const Project: React.FC<Props> = ({ project }) => {
  return (
    <SProject>
      <Title>{project.frontmatter.title}</Title>
      <Links
        website={project.frontmatter.website}
        source={project.frontmatter.source}
      />
      <Gallery images={project.frontmatter.images} />
      <div dangerouslySetInnerHTML={{ __html: project.html }}></div>
      <div>
        {project.frontmatter.scores &&
          project.frontmatter.scores.map((item, index) => (
            <ScoreList key={index} {...item} />
          ))}
      </div>
    </SProject>
  )
}

export default Project
