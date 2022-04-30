import { createTheme } from '@mui/material/styles'
const theme = createTheme({
  root: {
    hover: {
      '&:hover': {
        backgroundColor: 'rgb(7, 177, 77, 0.42)',
      },
    },
  },
  palette: {
    primary: {
      main: '#6d4c41',
    },
    secondary: {
      light: '#76d275',
      main: '#43a047',
      contrastText: '#ffcc00',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    background: {
      paper: '#bcaaa4',
      default: '#d7ccc8',
    },
    text: {
      primary: '#38003b',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
      hoverOpacity: '0.3',
    },
  },
})

export default theme
