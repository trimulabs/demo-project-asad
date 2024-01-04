import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
        },
      },
    },
  },
})

export default theme
