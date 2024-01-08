import React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material'
import theme from '@/styles/ThemeRegistry/theme'
import COLORS from '@/styles/colors'
import CustomBadge from './badges/CustomBadge'

export default function MerchantData() {
  return (
    <Box sx={{ width: '608px' }}>
      {[
        'Bank Card',
        'Preferred Payment',
        'ABC Payment',
        'Payment option 4',
      ].map((title, index) => {
        return (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignContent: 'center',
              background: 'white',
              borderRadius: theme.spacing(2),
              border: '0.5px',
              p: theme.spacing(2),
              mt: theme.spacing(2),
              textAlign: 'center',
            }}
          >
            <Stack
              sx={{
                flexDirection: 'row',
                alignItems: 'center',
                alignContent: 'center',
              }}
              direction="row"
              spacing={2}
            >
              <Box
                sx={{
                  width: '40px',
                  height: '40px',
                  p: theme.spacing(1.25),
                  borderRadius: theme.spacing(1),
                  background: COLORS.selected,
                }}
              >
                {index + 1}
              </Box>
              <Typography variant="labelM">{title}</Typography>
              {index === 2 ? (
                <CustomBadge content="Disable" type="Disable" />
              ) : (
                <CustomBadge content="Active" type="Active" />
              )}
            </Stack>

            <Button variant="contained" href="/MerchantDetails">
              Manage
            </Button>
          </Box>
        )
      })}
    </Box>
  )
}
