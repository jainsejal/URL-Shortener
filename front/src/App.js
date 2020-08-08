import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header'
import Content from './components/Content'

// Add global styles
const GlobalStyle = createGlobalStyle`

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
 body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 }
`

function App () {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content />
    </>
  )
}

export default App
