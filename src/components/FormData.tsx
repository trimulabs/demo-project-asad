import Image from 'next/image'
import * as React from 'react'
import { Box, Stack, Avatar, Typography, Button } from '@mui/material'

import COLORS from '@/styles/colors'
import theme from '@/styles/ThemeRegistry/theme'
import EmptyUser from '@/../public/Assets/Icons/EmptyUser.svg'
import editIcon from '@/../public/Assets/Icons/edit-03.svg'
import { gatewayData } from '@/data/constants'

export default function FromData() {
  return (
    <Box
      sx={{
        width: '95%',
        bgcolor: COLORS.white,
        borderRadius: theme.spacing(2),
        border: `1px solid ${COLORS.selected}`,
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
          borderBottom: `1px solid ${COLORS.selected}`,
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
              padding: theme.spacing(1.25),
              borderRadius: theme.spacing(1.5),
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
        {gatewayData.map((item, index) => (
          <Box
            key={index}
            sx={{
              borderBottom:
                index !== gatewayData.length - 1
                  ? `1px solid ${COLORS.selected}`
                  : 'none',
              marginBottom:
                index !== gatewayData.length - 1 ? theme.spacing(3) : 'none',
            }}
          >
            <Stack
              direction="column"
              sx={{
                paddingBottom:
                  index !== gatewayData.length - 1
                    ? theme.spacing(1.5)
                    : 'none',
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
