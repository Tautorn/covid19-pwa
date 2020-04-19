import React from 'react'
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import GlobalStyle from 'commons/styles/global-style'
import Main from './containers/Main'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'

const theme = {}

const App = () => {
  return (
    <StylesProvider injectFirst>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <Main />
      </StyledThemeProvider>
    </StylesProvider>
  )
}

export default App
