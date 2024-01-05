/* eslint-disable @typescript-eslint/no-unused-vars */
import { createTheme } from '@mui/material'
import { Plus_Jakarta_Sans } from 'next/font/google'
import COLORS from '@/styles/colors'

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

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    displayXL: true
    displayL: true
    displayM: true
    displayS: true
    headingXL: true
    headingL: true
    headingM: true
    headingS: true
    headingXS: true
    headingXSM: true
    headingXXS: true
    labelXL: true
    labelL: true
    labelM: true
    labelS: true
    labelXS: true
    bodyXL: true
    bodyL: true
    bodyM: true
    bodyS: true
    bodyXS: true
    labelMd: true
    labelSB: true
    bodySM: true
    bodySSM: true
    bodyMM: true

    bodySSX: true
    bodySXX: true
  }
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
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondaryWhite,
    },
  },

  typography: typographyOptions,

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '6px 20px',
          textTransform: 'none',
          boxShadow: 'none',
        },
        containedPrimary: {
          color: 'white',
          backgroundColor: COLORS.btnBlack,
        },
        containedSecondary: {
          color: 'black',
          backgroundColor: COLORS.btnLightBlue,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: `linear-gradient(180deg, #003343 0%, #002733 100%)`,
          color: 'white',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.secondaryWhite,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'capitalize',
          padding: '12px',
          marginTop: '24px',
          height: '32px',

          '&.Mui-selected': {
            backgroundColor: COLORS.selected,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          textTransform: 'capitalize',
          padding: '8px 12px 8px 12px',
          height: '24px',
        },
        colorSuccess: {
          background: COLORS.badgeSuccess,
          color: 'black',
        },
      },
    },
  },
})

export default theme
