import React from "react"
import Score, { ScoreProps } from "./Score"

export interface ScoreListProps {
  scores: ScoreProps[]
  source: string
}

const ScoreList: React.FC<ScoreListProps> = ({ scores, source }) => {
  return (
    <div>
      <h4>{source}</h4>
      <div>
        {scores.map((item, index) => (
          <Score key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default ScoreList
