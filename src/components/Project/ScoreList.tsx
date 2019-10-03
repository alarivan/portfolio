import React from "react"
import Score, { ScoreProps } from "./Score"
import styled from "styled-components"

export interface ScoreListProps {
  scores: ScoreProps[]
  source: string
}

const Source = styled.h4`
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
`

const ScoreList: React.FC<ScoreListProps> = ({ scores, source }) => {
  return (
    <div>
      <Source>{source}</Source>
      <div>
        {scores.map((item, index) => (
          <Score key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default ScoreList
