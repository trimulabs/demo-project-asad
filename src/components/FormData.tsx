import Image from 'next/image'
import * as React from 'react'
import { Box, Stack, Avatar, Typography, Button } from '@mui/material'

import COLORS from '@/styles/colors'
import theme from '@/styles/ThemeRegistry/theme'
import EmptyUser from '@/../public/Assets/Icons/EmptyUser.svg'
import editIcon from '@/../public/Assets/Icons/edit-03.svg'

const data = [
  { entity: 'Merchant Name', content: 'ABC Payments' },
  { entity: 'Contact Name', content: 'John Smith' },
  { entity: 'Contact Email', content: 'dummy@coding.io' },
  { entity: 'Contact Phone', content: '+6281234567890' },
  { entity: 'Contact Address', content: 'Jakarta' },
  { entity: 'Contact City', content: 'Jakarta' },
  { entity: 'Merchant ID', content: '4069500400011342' },
]

export default function FromData() {
  return (
    <Box
      sx={{
        // width: '608px',
        width: '95%',
        bgcolor: COLORS.white,
        borderRadius: theme.spacing(2),
        border: `1px solid var(--grayscale-200, ${COLORS.selected})`,
      }}
    >
      <Stack
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '16px 20px 16px 20px',
          borderBottom: `1px solid var(--grayscale-200, ${COLORS.selected})`,
        }}
        direction="row"
        spacing={2}
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
              width: '52px',
              height: '52px',
              bgcolor: COLORS.lightBlue,
              padding: '10px',
              borderRadius: '12px',
            }}
          >
            <Avatar
              src={EmptyUser.src}
              sx={{
                width: '28px',
                height: '28px',
              }}
            />
          </Box>

          <Typography variant="labelL">Merchant Details</Typography>
        </Stack>
        <Button
          color="secondary"
          variant="contained"
          sx={{ gap: theme.spacing(1) }}
        >
          <Image src={editIcon} alt="icon"></Image>
          Edit
        </Button>
      </Stack>

      <Box sx={{ padding: theme.spacing(2.5) }}>
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              borderBottom:
                index !== data.length - 1
                  ? `1px solid var(--grayscale-200, ${COLORS.selected})`
                  : 'none',
              marginBottom:
                index !== data.length - 1 ? theme.spacing(3) : 'none',
            }}
          >
            <Stack
              direction="column"
              sx={{
                paddingBottom:
                  index !== data.length - 1 ? theme.spacing(1.5) : 'none',
                gap: theme.spacing(0.75),
              }}
            >
              <Box>
                <Typography variant="labelS">{item.entity}</Typography>
              </Box>
              <Box>
                <Typography variant="labelSS">{item.content}</Typography>
              </Box>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
