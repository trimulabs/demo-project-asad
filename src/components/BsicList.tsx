/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { Stack, Chip, Button } from '@mui/material'

export default function BasicList() {
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
              background: '#FFFFFF',
              borderRadius: '16px',
              border: '0.5px',
              p: '16px',
              mt: '16px',
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
                  p: '10px',
                  borderRadius: '8px',
                  background: '#EEF2F6',
                }}
              >
                {index + 1}
              </Box>
              <Typography variant="labelM">{title}</Typography>
              <Chip color="success" label="Active" />
            </Stack>

            <Button color="secondary" variant="contained">
              Manage
            </Button>
          </Box>
        )
      })}
    </Box>
  )
}
