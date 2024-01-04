/* eslint-disable @typescript-eslint/no-unused-vars */
import { createTheme } from '@mui/material'
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakartaSans = Plus_Jakarta_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

interface CustomTypographyVariants {
  headingM: React.CSSProperties
  headingS: React.CSSProperties
  headingXS: React.CSSProperties
  labelXL: React.CSSProperties
  labelL: React.CSSProperties
  labelM: React.CSSProperties
  labelS: React.CSSProperties
  labelXS: React.CSSProperties
  errorBodyXS: React.CSSProperties
}

declare module '@mui/material/styles' {
  interface TypographyVariants extends CustomTypographyVariants {}
  interface TypographyVariantsOptions extends CustomTypographyVariants {}
}

const typographyOptions = {
  fontFamily: jakartaSans.style.fontFamily,
  headingM: {
    fontSize: '40px',
    fontWeight: 700,
    lineHeight: '120%',
  },
  headingS: {
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: '125%',
  },
  headingXS: {
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '133.333%',
  },
  labelXL: {
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '140%',
  },
  labelL: {
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '155.556%',
  },
  labelM: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '150%',
  },
  labelS: {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '142.857%',
  },
  labelXS: {
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '133%',
  },
  errorBodyXS: {
    fontSize: '11px',
    fontWeight: 400,
    lineHeight: '150%',
    marginBottom: '4px',
    minHeight: '12px',
    marginLeft: '12px',
  },
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#003343',
    },
    secondary: {
      main: '#F8FAFC',
    },
  },

  typography: typographyOptions,

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
        },
      },
    },
  },
})

export default theme
