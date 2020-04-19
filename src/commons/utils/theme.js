import theme from '../constants/theme'

export const getTheme = () => ({
  ...theme,
  palette: {
    ...theme.palette,
    divider: '#e5e5e5'
  }
})