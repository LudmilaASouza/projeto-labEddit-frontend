import styled, {createGlobalStyle} from "styled-components"
import Router from "./routes/Router"

const GlobalStyle = createGlobalStyle `
  html {
    font-family: 'IBM Plex Sans', sans-serif;
  }

  button, input {
    font-family: 'Noto Sans',  sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  ${'' /* #root {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e5e5e5;
  } */}
`

export const AppContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  width: 428px;
  max-width: 100vw;
  height: 926px;
  max-height: 100vh;
  border: 2px solid;

  @media screen and (max-width: 768px), (max-width: 480px) {
    width: 100%; 
    height: 100%;
  }
`

export default function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Router />
    </AppContainer>
  )
}

