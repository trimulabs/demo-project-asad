import React from 'react'
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from '@mui/material'

import COLORS from '@/styles/colors'
import theme from '@/styles/ThemeRegistry/theme'

const GenericList = () => {
  return (
    <Box
      sx={{
        width: '282px',
        bgcolor: COLORS.white,
        borderRadius: theme.spacing(2),
        marginBottom: theme.spacing(2),
        border: `1px solid var(--grayscale-200, ${COLORS.selected})`,
      }}
    >
      <Box
        sx={{
          padding: '16px 20px 16px 20px',
          borderBottom: `1px solid var(--grayscale-200, ${COLORS.selected})`,
        }}
      >
        <Typography variant="labelL">
          Support Department phone numbers
        </Typography>
      </Box>

      <List sx={{ padding: theme.spacing(2.5) }}>
        <ListItem
          disablePadding={true}
          sx={{
            borderBottom: `1px solid var(--grayscale-200, ${COLORS.selected})`,
            paddingBottom: theme.spacing(1.5),
          }}
        >
          <ListItemText primary="Hello" secondary="World" />
        </ListItem>
      </List>
    </Box>
  )
}

export default GenericList
