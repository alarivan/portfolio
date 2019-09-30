import React, { ReactNode } from "react"
import styled from "styled-components"
import GlobalStyles from "./styled/global"
import Sidebar from "./sidebar"
import Helmet from "react-helmet"
import "modern-normalize"
import "react-image-lightbox/style.css"

type Props = {
  children: ReactNode
}

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 300px 1fr;
  }
`

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <GlobalStyles />
      <StyledContainer>
        <Sidebar />
        {children}
      </StyledContainer>
    </>
  )
}

export default Layout
