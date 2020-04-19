import { createMuiTheme } from '@material-ui/core/styles'
import { amber } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    background: {
      level1: '#FFF',
      level2: '#F8F8F8',
      level3: '#EDEDED',
      main: '#FAFAFA'
    },
    divider: {
      main: '#EAEAEA'
    },
    primary: {
      main: '#9765a4',
      contrastText: '#FFF'
    },
    secondary: {
      main: '#ffc20d',
      light: '#9b7b71',
      contrastText: '#FFF'
    },
    error: {
      main: '#E25335',
      contrastText: '#FFF'
    },
    warning: {
      main: amber[700],
      contrastText: '#FFF'
    },
    success: {
      main: '#59C00B',
      contrastText: '#FFF'
    },
    scrollbar: {
      main: '#f7f7f7'
    },
    grayScale: {
      main: '#000',
      middle: '#575757'
    }
  },
})

export default theme
