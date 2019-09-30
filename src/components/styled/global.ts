import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
html {
  font-family: 'Montserrat', sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #252525;
  margin: 0;
  width: 100%;
  height: 100vh;
  font-family: "Exo", sans-serif;
  background-color: #accbee;
  background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23accbee' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23b0cdef' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23b3cff0' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23b7d1f1' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23bad4f2' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23bed6f2' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23c2d8f3' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23c5daf4' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23c9dcf5' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23ccdef6' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23cfe1f7' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23d3e3f8' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23d6e5f9' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%23dae7fa' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%23dde9fa' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23e0ecfb' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23e4eefc' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23e7f0fd' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
  /* background by SVGBackgrounds.com */
  background-size: 500% 500%;
}
`
export default GlobalStyle
