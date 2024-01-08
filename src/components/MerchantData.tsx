import * as React from 'react'
import Link from 'next/link'
import { Box, Typography, Stack, Chip, Button } from '@mui/material'
import theme from '@/styles/ThemeRegistry/theme'
import COLORS from '@/styles/colors'

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
              <Chip color="success" label="Active" />
            </Stack>
            <Link href="/MerchantDetails" type="button">
              Blog Post
            </Link>

            {/* <Button
              variant="contained"
              onClick={() => {
                console.log(title)
              }}
            >
              Manage
            </Button> */}
          </Box>
        )
      })}
    </Box>
  )
}
