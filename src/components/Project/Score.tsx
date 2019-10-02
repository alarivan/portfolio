import React from "react"
import styled from "styled-components"

export type ScorePlatform = "mobile" | "desktop"

export interface ScoreProps {
  platform: ScorePlatform
  score: number
}

const SScore = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    margin-right: 1rem;
  }
`

const Badge = styled.div`
  border: 4px solid #0cce6b;
  background: #daffec;
  color: #0cce6b;
  font-weight: bold;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Platform = styled.div`
  margin-top: 0.5rem;
  font-weight: bold;
  font-size: 0.8rem;
`

const Score: React.FC<ScoreProps> = ({ platform, score }) => {
  return (
    <SScore>
      <Badge>
        <div>{score}</div>
      </Badge>
      <Platform>{platform}</Platform>
    </SScore>
  )
}

export default Score
