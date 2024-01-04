import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#003343',
    },
    secondary: {
      main: '#F8FAFC',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          color: 'white',
          backgroundColor: '#121926',

          paddingTop: '6px',
          paddingBottom: '6px',
          paddingLeft: '20px',
          paddingRight: '20px',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#003343',
          color: 'white',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          padding: '24px',
        },
      },
    },
  },
})

export default theme
