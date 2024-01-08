'use client'
import COLORS from '@/styles/colors'
import { Box } from '@mui/material'
import theme from '@/styles/ThemeRegistry/theme'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        gap: '0px',
        padding: theme.spacing(3),
        marginLeft: '212px',
        background: COLORS.secondaryWhite,
        height: '100vh',
      }}
    >
      {children}
    </Box>
  )
}

export default Wrapper
