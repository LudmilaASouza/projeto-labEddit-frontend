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

  #root {
    width: 100vw;
    height: 100vh;
    display: flex;
    ${'' /* align-items: center; */}
    justify-content: flex-start;
    background-color: #e5e5e5;
  }
`

export const AppContainer = styled.div `
  background-color: #fafafa;
  width: 428px;
  max-width: 100vw;
  height: 926px;
  max-height: 100vh;
  justify-content: flex-start;
  border: 1px solid gray;
  
  @media (max-width: 768px)  {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center; 
    padding: 20px; 
    width: 100vw;
    height: 100vh;
    max-width: none;
    max-height: none;
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

